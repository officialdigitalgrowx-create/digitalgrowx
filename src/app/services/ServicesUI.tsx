'use client';
import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/sitedata';
import { schemaServicesList, schemaBreadcrumb } from '@/lib/schema';

/* ── Accent colours ──────────────────────────────────────────── */
const marketingAccents: Record<string, { orb: string; iconGlow: string; tagColor: string; dotColor: string; ctaColor: string }> = {
    'seo': { orb: '#7c3aed', iconGlow: 'rgba(124,58,237,0.35)', tagColor: '#a78bfa', dotColor: '#7c3aed', ctaColor: '#c4b5fd' },
    'aeo-gpt-ads': { orb: '#0ea5e9', iconGlow: 'rgba(14,165,233,0.35)', tagColor: '#38bdf8', dotColor: '#0ea5e9', ctaColor: '#7dd3fc' },
    'local-seo': { orb: '#10b981', iconGlow: 'rgba(16,185,129,0.35)', tagColor: '#34d399', dotColor: '#10b981', ctaColor: '#6ee7b7' },
    'social-media': { orb: '#ec4899', iconGlow: 'rgba(236,72,153,0.35)', tagColor: '#f472b6', dotColor: '#ec4899', ctaColor: '#f9a8d4' },
    'performance-marketing': { orb: '#f97316', iconGlow: 'rgba(249,115,22,0.35)', tagColor: '#fb923c', dotColor: '#f97316', ctaColor: '#fdba74' },
    'lead-generation': { orb: '#6366f1', iconGlow: 'rgba(99,102,241,0.35)', tagColor: '#818cf8', dotColor: '#6366f1', ctaColor: '#a5b4fc' },
    'brand-awareness': { orb: '#eab308', iconGlow: 'rgba(234,179,8,0.35)', tagColor: '#facc15', dotColor: '#eab308', ctaColor: '#fde047' },
    'google-ads': { orb: '#ef4444', iconGlow: 'rgba(239,68,68,0.35)', tagColor: '#f87171', dotColor: '#ef4444', ctaColor: '#fca5a5' },
    're-marketing': { orb: '#8b5cf6', iconGlow: 'rgba(139,92,246,0.35)', tagColor: '#c4b5fd', dotColor: '#8b5cf6', ctaColor: '#ddd6fe' },
};

const marketingTagLabels: Record<string, string> = {
    'seo': 'Organic Growth', 'aeo-gpt-ads': 'AI-First', 'local-seo': 'Local Reach',
    'social-media': 'Engagement', 'performance-marketing': 'Paid Media',
    'lead-generation': 'Pipeline', 'brand-awareness': 'Branding', 'google-ads': 'PPC',
    're-marketing': 'Conversion+',
};

/* ── Card component ──────────────────────────────────────────── */
function ServiceCard({ service, accent, tagLabel, basePath = '/services' }: {
    service: { slug: string; icon: string; title: string; shortDesc: string; benefits: string[]; statBadge: string };
    accent: { orb: string; iconGlow: string; tagColor: string; dotColor: string; ctaColor: string };
    tagLabel: string;
    basePath?: string;
}) {
    const [hovered, setHovered] = useState(false);
    return (
        <Link
            href={`${basePath}/${service.slug}`}
            style={{
                position: 'relative',
                background: hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
                border: hovered ? `1px solid ${accent.orb}55` : '1px solid rgba(255,255,255,0.09)',
                borderRadius: '1.25rem',
                padding: '2rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered ? `0 20px 60px ${accent.orb}22` : 'none',
                transition: 'all 0.35s cubic-bezier(0.165,0.84,0.44,1)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Top orb glow on hover */}
            {hovered && (
                <div style={{
                    position: 'absolute', top: '-40px', right: '-40px',
                    width: '120px', height: '120px', borderRadius: '50%',
                    background: accent.orb, filter: 'blur(50px)', opacity: 0.25,
                    pointerEvents: 'none',
                }} />
            )}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.4rem' }}>
                <div style={{
                    width: '44px', height: '44px', borderRadius: '0.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    boxShadow: `0 0 18px ${accent.iconGlow}`,
                    background: `${accent.orb}22`, color: accent.tagColor, fontSize: '22px',
                    transition: 'transform 0.3s ease',
                    transform: hovered ? 'scale(1.1)' : 'scale(1)',
                }}>
                    {service.icon}
                </div>
                <span style={{
                    fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.1em', padding: '0.22rem 0.65rem', borderRadius: '9999px',
                    color: accent.tagColor, background: `${accent.orb}22`, border: `1px solid ${accent.orb}44`,
                }}>
                    {tagLabel}
                </span>
            </div>

            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: 'rgba(255,255,255,0.92)', marginBottom: '0.55rem', lineHeight: 1.35 }}>
                {service.title}
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '0 0 1.4rem', flexGrow: 1 }}>
                {service.shortDesc}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {service.benefits.slice(0, 3).map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.78rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, opacity: 0.85, background: accent.dotColor }} />
                        {f}
                    </li>
                ))}
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.1rem', borderTop: `1px solid ${hovered ? accent.orb + '33' : 'rgba(255,255,255,0.08)'}`, transition: 'border-color 0.3s ease' }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.28)', flexGrow: 1 }}>
                    {service.statBadge}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '-0.01em', color: accent.ctaColor }}>
                    Explore →
                </span>
            </div>
        </Link>
    );
}

/* ── Main page ───────────────────────────────────────────────── */
export default function ServicesUI() {
    return (
        <main className="services-main">
            {/* Background orbs */}
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.25, pointerEvents: 'none', width: '600px', height: '600px', background: '#7c3aed', top: '-150px', left: '-150px' }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.25, pointerEvents: 'none', width: '500px', height: '500px', background: '#0ea5e9', bottom: '50px', right: '-120px' }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.15, pointerEvents: 'none', width: '400px', height: '400px', background: '#7c3aed', top: '40%', left: '50%', transform: 'translateX(-50%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaServicesList) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaBreadcrumb([
                        { name: 'Home', url: 'https://www.global.digitalgrowx.com/' },
                        { name: 'Services', url: 'https://www.global.digitalgrowx.com/services' }
                    ]))
                }} />

                {/* ── Page Header ────────────────────────────── */}
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span style={{
                        display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '9999px',
                        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                        background: 'rgba(124,58,237,0.2)', color: '#c4b5fd', border: '1px solid rgba(124,58,237,0.4)',
                    }}>
                        Growth Marketing Services
                    </span>
                    <h1 style={{ marginTop: '1.25rem', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 900, lineHeight: 1.1, color: '#ffffff' }}>
                        Our{' '}
                        <span style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Marketing Services
                        </span>
                    </h1>
                    <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', maxWidth: '42rem', margin: '1rem auto 0', lineHeight: 1.8 }}>
                        From dominating Google to generating qualified leads — we cover every layer of your digital growth.
                    </p>
                </div>

                {/* ── Category label ─────────────────────────── */}
                <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.07)' }} />
                        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c3aed' }}>
                            Digital Marketing Services
                        </span>
                        <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.07)' }} />
                    </div>
                </div>

                {/* ── Grid ───────────────────────────────────── */}
                <div className="services-card-grid">
                    {services.map(s => (
                        <ServiceCard
                            key={s.slug}
                            service={s}
                            accent={marketingAccents[s.slug] ?? marketingAccents['seo']}
                            tagLabel={marketingTagLabels[s.slug] ?? ''}
                        />
                    ))}
                </div>

                {/* ── Bottom CTA ─────────────────────────────── */}
                <div className="services-cta-box">
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
                        Not sure which service fits your goals?
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/free-audit" style={{
                            padding: '12px 32px', borderRadius: '99px', textDecoration: 'none',
                            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: '#fff',
                            fontWeight: 700, fontSize: '14px',
                            boxShadow: '0 6px 24px rgba(124,58,237,0.35)',
                        }}>
                            Get Free Audit →
                        </Link>
                        <Link href="/appointment" style={{
                            padding: '12px 32px', borderRadius: '99px', textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)',
                            fontWeight: 600, fontSize: '14px',
                        }}>
                            Book a Strategy Call
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
