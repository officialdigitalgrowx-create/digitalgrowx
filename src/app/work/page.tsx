'use client';
import { useState } from 'react';
import { caseStudies } from '@/data/case-studies';


const accentMap: Record<string, { orb: string; glow: string; tag: string; dot: string; cta: string }> = {
    'arke-hitech-machine': { orb: '#f97316', glow: 'rgba(249,115,22,0.28)', tag: '#fb923c', dot: '#f97316', cta: '#fdba74' },
    'shubham-sky-track': { orb: '#0070ff', glow: 'rgba(0,112,255,0.28)', tag: '#60a5fa', dot: '#0070ff', cta: '#93c5fd' },
    'lift-mech-industries': { orb: '#7c3aed', glow: 'rgba(124,58,237,0.28)', tag: '#a78bfa', dot: '#7c3aed', cta: '#c4b5fd' },
    'jn-interior': { orb: '#d97706', glow: 'rgba(217,119,6,0.28)', tag: '#fcd34d', dot: '#d97706', cta: '#fde68a' },
    'yashvi-energy-solution': { orb: '#16a34a', glow: 'rgba(22,163,74,0.28)', tag: '#4ade80', dot: '#16a34a', cta: '#86efac' },
    'shreenath-developers': { orb: '#0ea5e9', glow: 'rgba(14,165,233,0.28)', tag: '#7dd3fc', dot: '#0ea5e9', cta: '#bae6fd' },
    'school-admissions-growth-gujarat': { orb: '#8b5cf6', glow: 'rgba(139,92,246,0.28)', tag: '#c4b5fd', dot: '#8b5cf6', cta: '#ddd6fe' },
};

function CaseCard({ cs, featured = false }: { cs: typeof caseStudies[number]; featured?: boolean }) {
    const [hovered, setHovered] = useState(false);
    const a = accentMap[cs.slug] ?? accentMap['arke-hitech-machine'];

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                background: hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
                border: hovered ? `1px solid ${a.orb}55` : '1px solid rgba(255,255,255,0.09)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hovered ? `0 24px 70px ${a.glow}` : '0 4px 20px rgba(0,0,0,0.15)',
                transition: 'all 0.38s cubic-bezier(0.165,0.84,0.44,1)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
            }}
        >
            {/* Top shimmer line */}
            {hovered && (
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${a.orb}, transparent)`,
                    pointerEvents: 'none',
                }} />
            )}

            {/* Orb glow */}
            {hovered && (
                <div style={{
                    position: 'absolute', top: '-50px', right: '-50px',
                    width: '160px', height: '160px', borderRadius: '50%',
                    background: a.orb, filter: 'blur(60px)', opacity: 0.18,
                    pointerEvents: 'none',
                }} />
            )}

            {/* Banner / header area */}
            <div style={{
                padding: '1.75rem 2rem 1.25rem',
                background: hovered
                    ? `linear-gradient(135deg, ${a.orb}18 0%, transparent 80%)`
                    : `linear-gradient(135deg, ${a.orb}0c 0%, transparent 80%)`,
                borderBottom: `1px solid rgba(255,255,255,0.06)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                transition: 'background 0.38s ease',
                flexWrap: 'wrap',
            }}>
                {/* Logo stamp */}
                <div style={{
                    width: '52px', height: '52px',
                    background: '#ffffff',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '8px',
                    boxShadow: `0 4px 16px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.12)`,
                    flexShrink: 0,
                }}>
                    {cs.logo ? (
                        <img src={cs.logo} alt={cs.company}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                    ) : (
                        // Industry-based SVG fallback icons
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {cs.tag === 'Construction' ? (
                                <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            ) : cs.tag === 'Real Estate' ? (
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" stroke="#0070ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            ) : cs.tag === 'Industrial B2B' ? (
                                <rect x="2" y="7" width="20" height="14" rx="2" stroke="#7c3aed" strokeWidth="1.5"/>
                            ) : cs.tag === 'Luxury Interiors' ? (
                                <path d="M20 9V3H4v6M4 21V9h16v12M9 21v-6h6v6" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            ) : cs.tag === 'Solar Energy' ? (
                                <circle cx="12" cy="12" r="5" stroke="#16a34a" strokeWidth="1.5"/>
                            ) : cs.tag === 'Social Media & Ads' ? (
                                <circle cx="6" cy="12" r="3" stroke="#8b5cf6" strokeWidth="1.5"/>
                            ) : (
                                <circle cx="12" cy="12" r="9" stroke="#0ea5e9" strokeWidth="1.5"/>
                            )}
                        </svg>
                    )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1, minWidth: 0 }}>
                    {/* Tag pill */}
                    <span style={{
                        display: 'inline-flex', alignSelf: 'flex-start',
                        fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase',
                        letterSpacing: '0.1em', padding: '0.22rem 0.65rem', borderRadius: '9999px',
                        color: a.tag, background: `${a.orb}22`, border: `1px solid ${a.orb}44`,
                    }}>
                        {cs.tag}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', fontWeight: 500 }}>
                        {cs.duration}
                    </span>
                </div>

                {/* Featured badge */}
                {featured && (
                    <span style={{
                        fontSize: '0.58rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em',
                        padding: '0.18rem 0.6rem', borderRadius: '9999px',
                        background: `linear-gradient(135deg, ${a.orb}, ${a.cta})`,
                        color: '#fff', flexShrink: 0,
                    }}>
                        Featured
                    </span>
                )}
            </div>

            {/* Body */}
            <div style={{ padding: '1.75rem 2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{
                    fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                    color: a.tag, marginBottom: '0.5rem', opacity: 0.85,
                }}>
                    {cs.service}
                </p>

                <h3 style={{
                    fontSize: '1.05rem', fontWeight: 800, color: 'rgba(255,255,255,0.92)',
                    lineHeight: 1.35, marginBottom: '0.85rem',
                }}>
                    {cs.company}
                </h3>

                <p style={{
                    fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.75, flex: 1, marginBottom: '1.5rem',
                }}>
                    {cs.headline}
                </p>

                {/* Metrics row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${Math.min(cs.results.length, 3)}, 1fr)`,
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                }}>
                    {cs.results.slice(0, 3).map((r, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: '0.85rem',
                            padding: '0.85rem 0.6rem',
                            textAlign: 'center',
                        }}>
                            <div style={{
                                fontSize: '1.25rem', fontWeight: 900,
                                color: '#fff', lineHeight: 1, marginBottom: '4px',
                                background: `linear-gradient(135deg, #fff, ${a.tag})`,
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            }}>
                                {r.metric}
                            </div>
                            <div style={{ fontSize: '0.6rem', fontWeight: 700, color: a.tag, opacity: 0.7, lineHeight: 1.3 }}>
                                {r.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA removed per request */}
            </div>
        </div>
    );
}

export default function WorkPage() {
    return (
        <main style={{
            minHeight: '100vh',
            background: 'linear-gradient(145deg, #060d1f 0%, #0a1628 60%, #060d1f 100%)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '7rem',
            paddingBottom: '6rem',
        }}>
            {/* ── Ambient background orbs ──────────────────────── */}
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.22, pointerEvents: 'none', width: '700px', height: '700px', background: '#7c3aed', top: '-200px', left: '-200px' }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.18, pointerEvents: 'none', width: '500px', height: '500px', background: '#0ea5e9', bottom: '0px', right: '-150px' }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.12, pointerEvents: 'none', width: '400px', height: '400px', background: '#f97316', top: '45%', left: '55%', transform: 'translateX(-50%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* ── Page Header ──────────────────────────────── */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '9999px',
                        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                        background: 'rgba(124,58,237,0.2)', color: '#c4b5fd', border: '1px solid rgba(124,58,237,0.4)',
                        marginBottom: '1.25rem',
                    }}>
                        Our Portfolio
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1,
                        color: '#ffffff', margin: '0 auto 1.25rem',
                    }}>
                        Real Results.{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>
                            Proven Growth.
                        </span>
                    </h1>
                    <p style={{
                        fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', maxWidth: '40rem',
                        margin: '0 auto', lineHeight: 1.8,
                    }}>
                        We don&apos;t just run campaigns — we engineer measurable outcomes. Here&apos;s how we&apos;ve helped businesses across Gujarat and India scale 3x–5x.
                    </p>
                </div>

                {/* ── Stats strip ──────────────────────────────── */}
                <div style={{
                    display: 'flex', justifyContent: 'center', gap: '2rem',
                    flexWrap: 'wrap', marginBottom: '4rem',
                }}>
                    {[
                        { value: '350+', label: 'Clients Served' },
                        { value: '9+', label: 'Industries' },
                        { value: '3–5×', label: 'Avg. Lead Growth' },
                        { value: '100%', label: 'ROI-Focused' },
                    ].map((s, i) => (
                        <div key={i} style={{
                            textAlign: 'center',
                            padding: '1rem 1.75rem',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '1rem',
                            minWidth: '120px',
                        }}>
                            <div style={{
                                fontSize: '1.6rem', fontWeight: 900, lineHeight: 1,
                                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                marginBottom: '4px',
                            }}>
                                {s.value}
                            </div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.38)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Divider label ────────────────────────────── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2.5rem' }}>
                    <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.07)' }} />
                    <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c3aed' }}>
                        Success Stories
                    </span>
                    <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.07)' }} />
                </div>

                {/* ── Case Studies Grid ─────────────────────────── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '4rem',
                }}>
                    {caseStudies.map((cs, i) => (
                        <CaseCard key={cs.slug} cs={cs} featured={i === 0} />
                    ))}
                </div>


                {/* ── Bottom CTA ────────────────────────────────── */}
                <div style={{
                    textAlign: 'center',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '1.5rem',
                    padding: '3rem 2rem',
                }}>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
                        Ready to become our next success story?
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/free-audit" style={{
                            display: 'inline-block', padding: '12px 32px', borderRadius: '99px', textDecoration: 'none',
                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff',
                            fontWeight: 700, fontSize: '14px', boxShadow: '0 6px 24px rgba(124,58,237,0.35)',
                        }}>
                            Get Free Audit →
                        </a>
                        <a href="/appointment" style={{
                            display: 'inline-block', padding: '12px 32px', borderRadius: '99px', textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)',
                            fontWeight: 600, fontSize: '14px',
                        }}>
                            Book a Strategy Call
                        </a>
                    </div>
                </div>

            </div>

            {/* ── Responsive grid fix ───────────────────────── */}
            <style>{`
                @media (max-width: 640px) {
                    .work-case-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}
