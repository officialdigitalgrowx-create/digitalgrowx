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
      email,
      company,
      service,
      message,
    } = body as {
      name?: string;
      phone?: string;
      email?: string;
      company?: string;
      service?: string;
      message?: string;
    };

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // ── 1. Insert into Supabase `contact_us` table ─────────────
    const { error: dbError } = await supabase
      .from('contact_us')
      .insert({
        full_name: name,
        email_address: email,
        business_name: company || null,
        service_needed: service || null,
        goals_description: message || null,
      });

    if (dbError) {
      console.error('Supabase insert error (contact_us):', dbError);
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
          subject: `New Contact Enquiry from ${name}`,
          replyTo: email,
          text: [
            `Name: ${name}`,
            `Phone: ${phone || '-'}`,
            `Email: ${email}`,
            `Company: ${company || '-'}`,
            `Service: ${service || '-'}`,
            '',
            'Message:',
            message || '-',
          ].join('\n'),
        });
      } catch (emailErr) {
        // Log but don't fail — data is already saved in Supabase
        console.error('Resend email error (contact):', emailErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error', error);
    return NextResponse.json(
      { ok: false, error: 'Server error' },
      { status: 500 },
    );
  }
}
