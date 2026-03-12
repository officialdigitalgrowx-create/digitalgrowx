import Link from 'next/link';
import {
    aboutContent,
    teamMembers,
    companyStats,
    companyValues
} from '@/data/sitedata';
import { schemaBreadcrumb } from '@/lib/schema';

export default function AboutUI() {
    return (
        <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#080b14,#0c101e,#080d18)', padding: '8rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(110px)', opacity: 0.22, pointerEvents: 'none', width: '700px', height: '700px', background: '#7c3aed', top: '-200px', left: '-180px' }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(110px)', opacity: 0.22, pointerEvents: 'none', width: '500px', height: '500px', background: '#0ea5e9', bottom: 0, right: '-150px' }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(110px)', opacity: 0.13, pointerEvents: 'none', width: '350px', height: '350px', background: '#ec4899', top: '50%', left: '55%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        schemaBreadcrumb([
                            { name: 'Home', url: 'https://www.digitalgrowx.com/' },
                            { name: 'About', url: 'https://www.digitalgrowx.com/about' }
                        ])
                    )
                }} />

                {/* Hero */}
                <section style={{ textAlign: 'center', paddingBottom: '5rem' }}>
                    <span style={{ display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '9999px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'rgba(124,58,237,0.18)', color: '#c4b5fd', border: '1px solid rgba(124,58,237,0.38)', backdropFilter: 'blur(6px)' }}>About Us</span>
                    <h1 style={{ marginTop: '1.25rem', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
                        About Digital GrowX — Ahmedabad&apos;s Marketing & IT Powerhouse
                    </h1>
                    <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '42rem', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
                        Digital GrowX is India&apos;s most aggressive AI-first growth agency. We exist for one reason — to make your brand completely dominate its market.
                    </p>
                </section>

                {/* Stats */}
                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1.25rem', marginBottom: '5rem' }}>
                    {companyStats.map((s) => (
                        <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '2rem', backdropFilter: 'blur(18px)', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#a78bfa', lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>{s.label}</div>
                            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.25rem' }}>{s.detail}</div>
                        </div>
                    ))}
                </section>

                {/* Story */}
                <section style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '2rem', backdropFilter: 'blur(18px)', marginBottom: '4rem', maxWidth: '820px', margin: '0 auto 4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '1.25rem' }}>{aboutContent.story.heading}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1.5rem' }}>
                        {aboutContent.story.body}
                    </p>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '1.25rem' }}>{aboutContent.mission.heading}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, fontSize: '1rem' }}>
                        {aboutContent.mission.body}
                    </p>
                </section>

                {/* Values */}
                <section style={{ marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>How We Operate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.25rem' }}>
                        {companyValues.map((v) => (
                            <div key={v.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '2rem', backdropFilter: 'blur(18px)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                                <h3 style={{ fontWeight: 800, color: '#fff', marginBottom: '0.6rem', fontSize: '1rem' }}>{v.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team */}
                <section style={{ marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '0.5rem' }}>{aboutContent.teamIntro.heading}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>{aboutContent.teamIntro.body}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem' }}>
                        {teamMembers.map((t) => (
                            <div key={t.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '2rem', backdropFilter: 'blur(18px)', textAlign: 'center' }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 1.5rem',
                                    position: 'relative',
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                    clipPath: 'circle(49% at 50% 50%)'
                                }}>
                                    {/* Subtle glow effect */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-50%',
                                        left: '-50%',
                                        width: '200%',
                                        height: '200%',
                                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
                                        zIndex: 0
                                    }} />

                                    {t.photo ? (
                                        <img
                                            src={t.photo}
                                            alt={t.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                position: 'relative',
                                                zIndex: 1,
                                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                            className="team-photo"
                                        />
                                    ) : (
                                        <div style={{ fontSize: '2.5rem', position: 'relative', zIndex: 1 }}>👤</div>
                                    )}
                                </div>
                                <div style={{ fontWeight: 800, color: '#a78bfa', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{t.role}</div>
                                <div style={{ fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>
                                    <h2 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: '#fff' }}>{t.name}</h2>
                                </div>
                                <div style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    {t.experience}
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1rem' }}>{t.bio}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                                    {t.specialties.map(s => (
                                        <span key={s} style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', borderRadius: '4px' }}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section style={{ textAlign: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '2rem', backdropFilter: 'blur(18px)', maxWidth: '600px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>Ready to Work Together?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', lineHeight: 1.7 }}>Let&apos;s build something that dominates your market.</p>
                        <Link href="/appointment" style={{ display: 'inline-block', padding: '0.9rem 2.25rem', borderRadius: '9999px', background: 'linear-gradient(135deg,#7c3aed,#6366f1)', color: '#fff', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none' }}>Get in Touch →</Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
