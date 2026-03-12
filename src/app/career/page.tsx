'use client';
import Link from 'next/link';

const openRoles = [
    { title: 'SEO Strategist', type: 'Full-Time · Remote', dept: 'Organic Growth', badge: '#7c3aed', exp: '2+ years', desc: 'Own the organic rankings for our clients. Deep knowledge of technical SEO, content strategy, and link building required.' },
    { title: 'Performance Marketing Manager', type: 'Full-Time · Remote', dept: 'Paid Media', badge: '#f97316', exp: '3+ years', desc: 'Manage large Meta & Google ad accounts. Must have proven track record of 5x+ ROAS campaigns.' },
    { title: 'AI & Automation Specialist', type: 'Full-Time · Remote', dept: 'AI Solutions', badge: '#0ea5e9', exp: '1+ years', desc: 'Build custom AI agents and automation workflows using n8n, Make, and LLM APIs.' },
    { title: 'Content Strategist', type: 'Full-Time · Remote', dept: 'Content', badge: '#10b981', exp: '2+ years', desc: 'Create high-converting content for SEO blogs, landing pages, and social media. AI-augmented writing skills a plus.' },
    { title: 'Full-Stack Web Developer', type: 'Contract · Remote', dept: 'Tech', badge: '#6366f1', exp: '3+ years', desc: 'Build beautiful, high-performance web apps using Next.js, React, and Tailwind. UX sensibility is essential.' },
    { title: 'Social Media Manager', type: 'Full-Time · Remote', dept: 'Social', badge: '#ec4899', exp: '1+ years', desc: 'Manage Instagram, LinkedIn, and YouTube content for 10+ premium clients. Video editing skills a strong plus.' },
];

const steps = [
    { num: '01', title: 'Apply Online', desc: 'Submit your resume and a short note on why you are perfect for this role.' },
    { num: '02', title: 'Skill Assessment', desc: 'A short, paid task relevant to the role. We respect your time — always.' },
    { num: '03', title: 'Video Interview', desc: 'A relaxed 30-min chat with the hiring manager.' },
    { num: '04', title: 'Welcome Aboard', desc: 'Offer letter, onboarding kit, and your first AI tool subscription on us.' },
];

export default function CareerPage() {
    return (
        <main className="career-main">
            <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Hero */}
                <section style={{ textAlign: 'center', paddingBottom: '5rem' }}>
                    <span className="pill">Careers</span>
                    <h1 style={{ marginTop: '1.25rem', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
                        Join the Agency<br /><span className="text-gradient">Built for Winners.</span>
                    </h1>
                    <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '40rem', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
                        We&apos;re always looking for exceptional people who are obsessed with results, AI, and growth. No egos. Just outcomes.
                    </p>
                </section>

                {/* Open Roles */}
                <section style={{ marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: '2.5rem' }}>Open Positions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {openRoles.map((r) => (
                            <div key={r.title} className="role-card">
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                            <h3 style={{ fontWeight: 800, color: '#fff', fontSize: '1.05rem' }}>{r.title}</h3>
                                            <span style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.65rem', borderRadius: '9999px', background: `${r.badge}22`, color: r.badge, border: `1px solid ${r.badge}44` }}>{r.dept}</span>
                                        </div>
                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>{r.desc}</p>
                                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>📅 {r.type}</span>
                                            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>⏱ {r.exp} experience</span>
                                        </div>
                                    </div>
                                    <Link href="/appointment" className="apply-btn" style={{ borderColor: r.badge, color: r.badge }}>Apply →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process */}
                <section style={{ marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Our Hiring Process</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.25rem' }}>
                        {steps.map((s) => (
                            <div key={s.num} className="glass-tile">
                                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#7c3aed', opacity: 0.5, marginBottom: '0.75rem', lineHeight: 1 }}>{s.num}</div>
                                <h3 style={{ fontWeight: 800, color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>{s.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Wildcard CTA */}
                <section style={{ textAlign: 'center' }}>
                    <div className="glass-tile" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>Don&apos;t See Your Role?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', lineHeight: 1.7 }}>If you&apos;re exceptional at what you do, we want to hear from you anyway.</p>
                        <Link href="/appointment" className="cta-btn">Send Us Your Profile →</Link>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .career-main { min-height:100vh; background:linear-gradient(135deg,#080b14,#0c101e,#080d18); padding:8rem 0 6rem; position:relative; overflow:hidden; }
        .blob { position:absolute; border-radius:50%; filter:blur(110px); opacity:0.2; pointer-events:none; }
        .b1 { width:650px;height:650px;background:#6366f1;top:-180px;left:-160px; }
        .b2 { width:500px;height:500px;background:#10b981;bottom:0;right:-130px; }
        .b3 { width:400px;height:400px;background:#f97316;top:45%;left:50%;opacity:0.12; }
        .pill { display:inline-block;padding:0.35rem 1.1rem;border-radius:9999px;font-size:0.68rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;background:rgba(99,102,241,0.18);color:#a5b4fc;border:1px solid rgba(99,102,241,0.38);backdrop-filter:blur(6px); }
        .glass-tile { background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:1.25rem;padding:1.75rem;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px); }
        .role-card { background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:1.25rem;padding:1.75rem;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);transition:background 0.3s,border-color 0.3s,transform 0.3s; }
        .role-card:hover { background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.15);transform:translateX(4px); }
        .apply-btn { display:inline-block;padding:0.6rem 1.4rem;border-radius:9999px;border:1px solid;font-weight:800;font-size:0.82rem;text-decoration:none;white-space:nowrap;transition:transform 0.2s,box-shadow 0.2s;flex-shrink:0; }
        .apply-btn:hover { transform:translateY(-2px); }
        .cta-btn { display:inline-block;padding:0.9rem 2.25rem;border-radius:9999px;background:linear-gradient(135deg,#6366f1,#7c3aed);color:#fff;font-weight:800;font-size:0.95rem;text-decoration:none;transition:transform 0.25s,box-shadow 0.25s; }
        .cta-btn:hover { transform:translateY(-3px);box-shadow:0 12px 32px rgba(99,102,241,0.4); }
      `}</style>
        </main>
    );
}
