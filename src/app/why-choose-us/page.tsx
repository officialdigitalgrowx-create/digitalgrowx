'use client';
import Link from 'next/link';

const reasons = [
    {
        icon: '',
        title: 'AI-First Approach',
        desc: 'We don\'t just use AI as a buzzword — our entire workflow is built on machine learning, predictive analytics, and GPT-powered automation to outperform traditional agencies by 10x.',
        accent: '#a78bfa',
        glow: 'rgba(167,139,250,0.25)',
    },
    {
        icon: '',
        title: 'Measurable ROI, Always',
        desc: 'Every campaign we run is tracked with live dashboards and real metrics. No fluff reports — only real numbers that show exactly how your investment is growing.',
        accent: '#34d399',
        glow: 'rgba(52,211,153,0.25)',
    },
    {
        icon: '',
        title: 'Launch in 7 Days',
        desc: 'We move at startup speed. From onboarding to live campaigns in under 7 days. Our battle-tested playbooks mean zero wasted time and zero confusion.',
        accent: '#f97316',
        glow: 'rgba(249,115,22,0.25)',
    },
    {
        icon: '',
        title: 'Hyper-Targeted Strategies',
        desc: 'Cookie-cutter plans don\'t work. We research your exact market, competitors, and audience to build a precision strategy that captures your ideal customers.',
        accent: '#60a5fa',
        glow: 'rgba(96,165,250,0.25)',
    },
    {
        icon: '',
        title: 'Transparent & Accountable',
        desc: 'You own every asset, every ad account, every report. We operate with 100% transparency — what you see is what you get, no hidden fees, no vague metrics.',
        accent: '#fb7185',
        glow: 'rgba(251,113,133,0.25)',
    },
    {
        icon: '',
        title: 'Proven Global Results',
        desc: 'From local Ahmedabad brands to international enterprises, we\'ve driven growth across 15+ industries. Your niche is not too small or too big for our expertise.',
        accent: '#fcd34d',
        glow: 'rgba(252,211,77,0.25)',
    },
];

const comparisons = [
    { feature: 'AI-Powered Campaigns', us: true, others: false },
    { feature: 'Live Performance Dashboard', us: true, others: false },
    { feature: 'Dedicated Growth Strategist', us: true, others: false },
    { feature: 'Launch in 7 Days', us: true, others: false },
    { feature: 'Full Asset Ownership', us: true, others: false },
    { feature: 'Zero Long-term Lock-in', us: true, others: false },
    { feature: 'Monthly Strategy Review', us: true, others: true },
    { feature: 'Basic Reporting', us: true, others: true },
];

const testimonials = [
    {
        quote: 'Digital GrowX tripled our leads in 90 days. Their AI targeting is unlike anything we\'ve experienced before.',
        name: 'Rahul Mehta',
        role: 'CEO, Skyline Realty Group',
        avatar: '',
    },
    {
        quote: 'We went from 0 to 50K monthly visitors in just 4 months. The ROI speaks for itself.',
        name: 'Priya Shah',
        role: 'Founder, NovaByte Store',
        avatar: '',
    },
    {
        quote: 'Their transparent reporting and AI strategy gave us the clarity we needed to scale confidently.',
        name: 'Dr. Ananya Rao',
        role: 'Director, ClearSkin Clinics',
        avatar: '',
    },
];

export default function WhyChooseUsPage() {
    return (
        <main style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #080b14 0%, #0c101e 50%, #080d18 100%)',
            padding: '8rem 0 6rem',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Ambient blobs */}
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2, pointerEvents: 'none', width: '700px', height: '700px', background: '#7c3aed', top: '-200px', left: '-180px' }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.18, pointerEvents: 'none', width: '500px', height: '500px', background: '#0ea5e9', bottom: '10%', right: '-150px' }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.12, pointerEvents: 'none', width: '400px', height: '400px', background: '#f97316', top: '45%', left: '55%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                {/* ── Hero ── */}
                <section style={{ textAlign: 'center', paddingBottom: '5rem' }}>
                    <span style={{
                        display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '9999px',
                        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                        background: 'rgba(124,58,237,0.18)', color: '#c4b5fd',
                        border: '1px solid rgba(124,58,237,0.38)', backdropFilter: 'blur(6px)',
                    }}>Why Choose Us</span>

                    <h1 style={{
                        marginTop: '1.25rem',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900, color: '#fff', lineHeight: 1.1,
                    }}>
                        The Agency That{' '}
                        <span style={{ background: 'linear-gradient(135deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Delivers Results
                        </span>
                        , Not Excuses
                    </h1>

                    <p style={{
                        marginTop: '1.5rem', fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.5)', maxWidth: '46rem',
                        margin: '1.5rem auto 0', lineHeight: 1.8,
                    }}>
                        Hundreds of agencies talk about growth. We engineer it — with AI precision, radical transparency, and a relentless obsession with your ROI.
                    </p>
                </section>

                {/* ── Reasons Grid ── */}
                <section style={{ marginBottom: '6rem' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '1.5rem',
                    }}>
                        {reasons.map((r) => (
                            <div key={r.title} style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '1.25rem',
                                padding: '2rem',
                                backdropFilter: 'blur(18px)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                            }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                                    (e.currentTarget as HTMLDivElement).style.borderColor = r.accent + '55';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${r.glow}`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                }}
                            >
                                {/* Glow orb */}
                                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '120px', height: '120px', borderRadius: '50%', background: r.accent, filter: 'blur(60px)', opacity: 0.18, pointerEvents: 'none' }} />

                                <div style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>{r.icon}</div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>{r.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{r.desc}</p>

                                <div style={{
                                    display: 'inline-block', marginTop: '1.25rem',
                                    width: '36px', height: '3px', borderRadius: '9999px',
                                    background: r.accent,
                                }} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Comparison Table ── */}
                <section style={{ marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '0.75rem' }}>
                        Us vs. The Rest
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: '3rem', fontSize: '0.95rem' }}>
                        See why smart brands choose Digital GrowX over generic agencies.
                    </p>

                    <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: '1.25rem',
                        overflow: 'hidden',
                        backdropFilter: 'blur(18px)',
                    }}>
                        {/* Table Header */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: '1fr 180px 180px',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '1.1rem 1.5rem',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                        }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>Digital GrowX</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>Other Agencies</div>
                        </div>

                        {comparisons.map((row, i) => (
                            <div key={row.feature} style={{
                                display: 'grid', gridTemplateColumns: '1fr 180px 180px',
                                padding: '1rem 1.5rem',
                                borderBottom: i < comparisons.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                            }}>
                                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, display: 'flex', alignItems: 'center' }}>{row.feature}</div>
                                <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: '12px', height: '12px', borderRadius: '50%',
                                        background: '#34d399', boxShadow: '0 0 10px rgba(52,211,153,0.4)',
                                    }}></span>
                                </div>
                                <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {row.others
                                        ? <span style={{
                                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                            width: '12px', height: '12px', borderRadius: '50%',
                                            background: '#34d399', opacity: 0.6,
                                        }}></span>
                                        : <span style={{
                                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                            width: '12px', height: '12px', borderRadius: '50%',
                                            background: '#fb7185', opacity: 0.3,
                                        }}></span>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Testimonials ── */}
                <section style={{ marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '0.75rem' }}>
                        Clients Who Chose Right
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: '3rem', fontSize: '0.95rem' }}>
                        Real words from brands that scaled with us.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem',
                    }}>
                        {testimonials.map((t) => (
                            <div key={t.name} style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.09)',
                                borderRadius: '1.25rem',
                                padding: '2rem',
                                backdropFilter: 'blur(18px)',
                            }}>
                                <div style={{ fontSize: '1.5rem', color: '#a78bfa', marginBottom: '1rem', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
                                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                    {t.quote}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '44px', height: '44px', borderRadius: '50%',
                                        background: 'rgba(124,58,237,0.2)',
                                        border: '1px solid rgba(124,58,237,0.3)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.25rem', flexShrink: 0,
                                    }}>{t.avatar}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{t.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section style={{ textAlign: 'center' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(99,102,241,0.1) 100%)',
                        border: '1px solid rgba(124,58,237,0.3)',
                        borderRadius: '1.5rem',
                        padding: '3.5rem 2rem',
                        backdropFilter: 'blur(18px)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', borderRadius: '50%', background: '#7c3aed', filter: 'blur(80px)', opacity: 0.15, pointerEvents: 'none' }} />

                        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem', position: 'relative' }}>
                            Ready to Choose Growth?
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '1rem', position: 'relative' }}>
                            Don&apos;t settle for an agency that guesses. Partner with Digital GrowX and get a team that engineers your success with AI precision.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                            <Link href="/appointment" style={{
                                display: 'inline-block', padding: '0.9rem 2.25rem', borderRadius: '9999px',
                                background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                                color: '#fff', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none',
                                boxShadow: '0 8px 30px rgba(124,58,237,0.4)',
                            }}>
                                Get Started Today →
                            </Link>
                            <Link href="/free-audit" style={{
                                display: 'inline-block', padding: '0.9rem 2.25rem', borderRadius: '9999px',
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: '#fff', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                            }}>
                                Free Audit First
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
