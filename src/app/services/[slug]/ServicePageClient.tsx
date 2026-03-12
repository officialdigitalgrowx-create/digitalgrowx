'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useGSAP } from '@/lib/animations';
import { type Service, type IconName } from '@/data/services';
import { Search, Globe, Share2, BarChart, Users, Zap, Target, RefreshCw } from 'lucide-react';

const iconMap = {
    Search, Globe, Share2, BarChart, Users, Zap, Target, RefreshCw
};

export default function ServicePageClient({ service, relatedServices }: { service: Service; relatedServices: Service[] }) {
    const scope = useGSAP();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const Icon = iconMap[service.iconName as keyof typeof iconMap];

    return (
        <div ref={scope}>
            {/* Hero */}
            <section className="service-hero">
                <div className="container">
                    <div className="breadcrumb" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)' }}>Home</Link>
                        <span className="separator mx-2">/</span>
                        <Link href="/services" style={{ color: 'rgba(255,255,255,0.5)' }}>Services</Link>
                        <span className="separator mx-2">/</span>
                        <span style={{ color: 'white' }}>{service.title}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>{Icon && <Icon size={64} className="text-primary" />}</span>
                            <h1 className="gsap-fade-up" style={{ color: 'white', margin: '1rem 0' }}>{service.headline}</h1>
                            <p className="gsap-fade-up" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 0 2rem auto' }}>{service.subheadline}</p>
                            <div style={{ display: 'inline-block', padding: '0.6rem 1.25rem', background: 'rgba(0,112,255,0.2)', border: '1px solid rgba(0,112,255,0.3)', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 600, color: '#93c5fd', marginBottom: '2.5rem' }}>{service.statBadge}</div>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'inherit' }}>
                                <Link href="/free-audit" className="btn btn-primary btn-xl">Get Free Growth Audit &rarr;</Link>
                                <Link href="/appointment" className="btn btn-ghost btn-xl">Book Strategy Session</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-16 gsap-fade-up">
                        <span className="section-tag">Strategic Impact</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>Why Our <span className="text-gradient">{service.title}</span> Works</h2>
                    </div>
                    <div className="gsap-stagger-children benefits-grid">
                        {(service.benefits || []).map((b, i) => (
                            <div key={i} className="card" style={{ padding: '2.5rem' }}>
                                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1.25rem' }}>{b.icon}</span>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{b.title}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--color-gray-500)', lineHeight: 1.6 }}>{b.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Integration Showcase */}
            <section className="section section-dark" style={{ overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="lg:grid-cols-2">
                        <div className="gsap-fade-up">
                            <span className="section-tag section-tag-light">AI-Powered</span>
                            <h2 style={{ color: 'white' }}>The <span className="text-gradient">AI Moat</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginTop: '1.5rem' }}>Our approach to {service.title} isn&apos;t just about standard tactics. We leverage proprietary AI models and automation to identify opportunities your competitors move too slowly to catch.</p>
                            <ul style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {(service.deliverables || []).slice(0, 3).map((d, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', color: 'white', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>⚡</span>
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="gsap-scale-in" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', padding: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)' }}>10x</div>
                                <div style={{ color: 'white', fontWeight: 600, marginTop: '0.5rem' }}>Inquiry Efficiency</div>
                                <div style={{ height: '4px', background: 'var(--gradient-primary)', borderRadius: '2px', margin: '1.5rem 0' }} />
                                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>High Ticket Leads</div>
                                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Validated by our AI-Scoring Framework</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology / Process */}
            <section className="section" style={{ background: '#f8fafc', padding: '100px 0' }}>
                <div className="container">
                    <div className="text-center mb-16 gsap-fade-up">
                        <span className="section-tag">Science of Growth</span>
                        <h2 style={{ fontWeight: 900 }}>Our <span className="text-gradient">Evolutionary Methodology</span></h2>
                        <p style={{ color: 'var(--color-gray-500)', maxWidth: '600px', margin: '1rem auto 0' }}>A systematic, data-backed approach to scaling your brand across the digital landscape.</p>
                    </div>

                    <div className="process-grid">
                        {(service.process || []).map((p, idx) => (
                            <div key={p.step} className="gsap-fade-up" style={{ position: 'relative', zIndex: 1, padding: '2rem', background: 'white', borderRadius: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'var(--gradient-primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    fontWeight: 900,
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 10px 20px rgba(0,112,255,0.2)'
                                }}>
                                    {p.step}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0f172a' }}>{p.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7 }}>{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section-gray">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center mb-12 gsap-fade-up">
                        <span className="section-tag">Transparency</span>
                        <h2>Common <span className="text-gradient">Questions</span></h2>
                    </div>
                    <div className="faq-container">
                        {(service.faqs || []).map((faq, i) => (
                            <div key={i} className="faq-item">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="faq-trigger">
                                    {faq.question}
                                    <span style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', flexShrink: 0, marginLeft: '1rem', fontSize: '1.2rem' }}>▾</span>
                                </button>
                                {openFaq === i && (
                                    <div style={{ padding: '0 2rem 2rem', fontSize: '1rem', color: 'var(--color-gray-600)', lineHeight: 1.8 }}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            {relatedServices && relatedServices.length > 0 && (
                <section className="section">
                    <div className="container">
                        <div className="text-center mb-12">
                            <span className="section-tag">Ecosystem</span>
                            <h2>Strategic <span className="text-gradient">Add-ons</span></h2>
                        </div>
                        <div className="benefits-grid">
                            {relatedServices.map(rs => {
                                const RSIcon = iconMap[rs.iconName as keyof typeof iconMap];
                                return (
                                    <Link key={rs.slug} href={`/services/${rs.slug}`} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', padding: '2.5rem' }}>
                                        <span style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>{RSIcon && <RSIcon size={48} />}</span>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{rs.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-500)', lineHeight: 1.6, flex: 1 }}>{rs.description}</p>
                                        <span style={{ marginTop: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Explore Strategy <span>&rarr;</span></span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section style={{ background: '#001a3d', color: 'white', padding: '8rem 0' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900 }}>Scale Your Influence <span className="text-gradient">Today.</span></h2>
                    <p style={{ maxWidth: '600px', margin: '1.5rem auto 2rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>Stop chasing vanity metrics. Book a strategy session to see how we can deliver 10x growth for your business.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <Link href="/free-audit" className="btn btn-primary btn-xl">Get Free Growth Audit &rarr;</Link>
                        <Link href="/appointment" className="btn btn-ghost btn-xl">Contact Strategic Team</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .mx-2 { margin-left: 0.5rem; margin-right: 0.5rem; }
            `}</style>
        </div>
    );
}
