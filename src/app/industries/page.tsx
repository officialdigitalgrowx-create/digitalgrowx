'use client';
import { industries } from '@/data/sitedata';


const accentPalette = [
    { color: '#f97316', glow: 'rgba(249,115,22,0.18)', bg: 'rgba(249,115,22,0.07)' },  // orange
    { color: '#6366f1', glow: 'rgba(99,102,241,0.18)', bg: 'rgba(99,102,241,0.07)' },  // indigo
    { color: '#0ea5e9', glow: 'rgba(14,165,233,0.18)', bg: 'rgba(14,165,233,0.07)' },  // sky
    { color: '#10b981', glow: 'rgba(16,185,129,0.18)', bg: 'rgba(16,185,129,0.07)' },  // emerald
    { color: '#f59e0b', glow: 'rgba(245,158,11,0.18)', bg: 'rgba(245,158,11,0.07)' },  // amber
    { color: '#ec4899', glow: 'rgba(236,72,153,0.18)', bg: 'rgba(236,72,153,0.07)' },  // pink
    { color: '#8b5cf6', glow: 'rgba(139,92,246,0.18)', bg: 'rgba(139,92,246,0.07)' },  // violet
    { color: '#14b8a6', glow: 'rgba(20,184,166,0.18)', bg: 'rgba(20,184,166,0.07)' },  // teal
];

const stats = [
    { value: '9+', label: 'Industries' },
    { value: '350+', label: 'Clients Served' },
    { value: '25 Yrs', label: 'Combined Expertise' },
    { value: '100%', label: 'ROI-Focused' },
];

export default function IndustriesPage() {
    return (
        <>
            <main style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #050a14 0%, #0a0f1e 40%, #0d1427 100%)',
                paddingTop: '100px',
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
            }}>

                {/* ── Subtle grid overlay ── */}
                <div style={{
                    position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />

                {/* ── Ambient orbs ── */}
                <div style={{ position: 'fixed', top: '10%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
                <div style={{ position: 'fixed', bottom: '15%', left: '0%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>

                    {/* ── HERO ── */}
                    <div style={{ textAlign: 'center', padding: '60px 0 56px' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)',
                            borderRadius: '99px', padding: '6px 18px', marginBottom: '28px',
                        }}>
                            <span style={{ fontSize: '14px' }}>🏭</span>
                            <span style={{ fontSize: '13px', fontWeight: 600, color: '#fb923c', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                Industries We Serve
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1,
                            color: '#f8fafc', margin: '0 0 20px',
                            letterSpacing: '-0.03em',
                        }}>
                            Every Industry.{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            }}>
                                One Team.
                            </span>
                        </h1>

                        <p style={{
                            fontSize: 'clamp(15px, 2vw, 19px)', color: '#94a3b8', maxWidth: '620px',
                            margin: '0 auto 48px', lineHeight: 1.7, fontWeight: 400,
                        }}>
                            We have built results-driven Marketing & IT systems for 8+ industries across Gujarat and India —
                            from real estate to manufacturing, education to retail. Your sector. Our expertise.
                        </p>

                        {/* Stats row */}
                        <div style={{
                            display: 'flex', justifyContent: 'center', gap: '12px',
                            flexWrap: 'wrap', marginBottom: '8px',
                        }}>
                            {stats.map((s) => (
                                <div key={s.label} style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '14px', padding: '16px 28px',
                                    textAlign: 'center', minWidth: '100px',
                                }}>
                                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>{s.value}</div>
                                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── INDUSTRY CARDS GRID ── */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                        gap: '20px',
                    }}>
                        {industries.map((ind, idx) => {
                            const palette = accentPalette[idx % accentPalette.length];
                            return (
                                <div
                                    key={ind.name}
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: `1px solid rgba(255,255,255,0.06)`,
                                        borderRadius: '20px',
                                        padding: '32px 28px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = `${palette.color}44`;
                                        el.style.background = palette.bg;
                                        el.style.boxShadow = `0 0 40px ${palette.glow}`;
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = 'rgba(255,255,255,0.06)';
                                        el.style.background = 'rgba(255,255,255,0.03)';
                                        el.style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Top accent line */}
                                    <div style={{
                                        position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px',
                                        background: `linear-gradient(90deg, transparent, ${palette.color}88, transparent)`,
                                        borderRadius: '99px',
                                    }} />

                                    {/* Corner number */}
                                    <div style={{
                                        position: 'absolute', top: '18px', right: '22px',
                                        fontSize: '11px', fontWeight: 700, color: palette.color,
                                        opacity: 0.5, letterSpacing: '0.08em',
                                    }}>
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>

                                    {/* Icon */}
                                    <div style={{
                                        width: '56px', height: '56px',
                                        background: `${palette.color}15`,
                                        border: `1px solid ${palette.color}30`,
                                        borderRadius: '16px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '26px', marginBottom: '20px',
                                    }}>
                                        {ind.icon}
                                    </div>

                                    {/* Name */}
                                    <h2 style={{
                                        fontSize: '20px', fontWeight: 700,
                                        color: '#f1f5f9', margin: '0 0 10px',
                                        letterSpacing: '-0.02em',
                                    }}>
                                        {ind.name}
                                    </h2>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '14px', color: '#64748b',
                                        lineHeight: 1.7, margin: '0 0 20px',
                                    }}>
                                        {ind.desc}
                                    </p>

                                    {/* Tag */}
                                    <div style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        background: `${palette.color}12`,
                                        border: `1px solid ${palette.color}25`,
                                        borderRadius: '99px', padding: '4px 12px',
                                    }}>
                                        <span style={{ width: '6px', height: '6px', background: palette.color, borderRadius: '50%', display: 'inline-block' }} />
                                        <span style={{ fontSize: '12px', fontWeight: 600, color: palette.color }}>We Serve This Industry</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ── BOTTOM CTA ── */}
                    <div style={{
                        marginTop: '72px', textAlign: 'center',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '24px', padding: '48px 32px',
                        position: 'relative', overflow: 'hidden',
                    }}>
                        <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '200px', background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: '#f8fafc', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
                            Don't See Your Industry?
                        </h2>
                        <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '460px', margin: '0 auto 32px', lineHeight: 1.6 }}>
                            We work with businesses across all sectors. Get in touch and we'll craft a custom strategy for your market.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="/appointment" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: '#f97316', color: '#fff', fontWeight: 700,
                                fontSize: '15px', padding: '14px 32px', borderRadius: '99px',
                                textDecoration: 'none',
                                transition: 'opacity 0.2s ease, transform 0.2s ease',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'none'; }}
                            >
                                Book a Free Consultation →
                            </a>
                            <a href="/free-audit" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(255,255,255,0.06)', color: '#cbd5e1', fontWeight: 600,
                                fontSize: '15px', padding: '14px 32px', borderRadius: '99px',
                                border: '1px solid rgba(255,255,255,0.12)',
                                textDecoration: 'none',
                                transition: 'background 0.2s ease',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; }}
                            >
                                Claim Free Audit
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
