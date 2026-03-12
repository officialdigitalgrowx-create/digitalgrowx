import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.FORM_TO_EMAIL || process.env.FORM_FALLBACK_TO;
const fromEmail = process.env.FORM_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      website,
      goal,
    } = body as {
      name?: string;
      phone?: string;
      website?: string;
      goal?: string;
    };

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // ── 1. Insert into Supabase `request_audit` table ──────────
    const { error: dbError } = await supabase
      .from('request_audit')
      .insert({
        full_name: name,
        phone_number: phone,
        business_website_url: website || null,
        main_goal: goal || null,
      });

    if (dbError) {
      console.error('Supabase insert error (request_audit):', dbError);
      return NextResponse.json(
        { ok: false, error: 'Failed to save your request. Please try again.' },
        { status: 500 },
      );
    }

    // ── 2. Send email notification via Resend (optional) ───────
    if (resend && toEmail && fromEmail) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject: `New Free Audit Request from ${name}`,
          text: [
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Website: ${website || '-'}`,
            '',
            'Main goal:',
            goal || '-',
          ].join('\n'),
        });
      } catch (emailErr) {
        // Log but don't fail — data is already saved in Supabase
        console.error('Resend email error (free-audit):', emailErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Free audit form error', error);
    return NextResponse.json(
      { ok: false, error: 'Server error' },
      { status: 500 },
    );
  }
}
