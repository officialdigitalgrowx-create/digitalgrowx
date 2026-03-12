'use client';
import { useState } from 'react';
import Link from 'next/link';
import { clients } from '@/data/sitedata';
import { schemaBreadcrumb } from '@/lib/schema';

export default function ClientsUI() {
    const [activeTab, setActiveTab] = useState('All');

    const clientIndustries = ['All', ...Array.from(new Set(clients.map(c => c.industry)))];

    const filteredClients = activeTab === 'All'
        ? clients
        : clients.filter(c => c.industry === activeTab);

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #080b14, #0c101e, #080d18)',
            paddingTop: '8rem',
            paddingBottom: '6rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background glows */}
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.15, pointerEvents: 'none', width: '600px', height: '600px', background: '#7c3aed', top: '-100px', right: '-100px', zIndex: 0 }} />
            <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.15, pointerEvents: 'none', width: '500px', height: '500px', background: '#0ea5e9', bottom: '100px', left: '-100px', zIndex: 0 }} />

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                    schemaBreadcrumb([
                        { name: 'Home', url: 'https://www.digitalgrowx.com/' },
                        { name: 'Our Clients', url: 'https://www.digitalgrowx.com/our-clients' }
                    ])
                )
            }} />

            {/* Page content wrapper */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>

                {/* ── Header block ── */}
                <div style={{ textAlign: 'center', paddingBottom: '3rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.35rem 1.1rem',
                        borderRadius: '9999px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase' as const,
                        background: 'rgba(124,58,237,0.18)',
                        color: '#c4b5fd',
                        border: '1px solid rgba(124,58,237,0.38)',
                        marginBottom: '1.25rem'
                    }}>Our Impact</span>

                    <div style={{
                        fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                        fontWeight: 900,
                        color: '#fff',
                        lineHeight: 1.2,
                        marginBottom: '1.5rem',
                        wordBreak: 'break-word' as const,
                        overflowWrap: 'break-word' as const
                    }}>
                        Our Clients — 350+ Businesses Trust Digital GrowX in Ahmedabad
                    </div>

                    <div style={{
                        fontSize: '1rem',
                        color: 'rgba(255,255,255,0.55)',
                        maxWidth: '38rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.8
                    }}>
                        From real estate developers to international schools, we help elite brands across Gujarat and India scale their digital presence.
                        Digital GrowX has successfully delivered 350+ lead generation and SEO projects for Ahmedabad-based businesses.
                    </div>
                </div>

                {/* ── Industry Filter buttons ── */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap' as const,
                    gap: '0.6rem',
                    justifyContent: 'center',
                    paddingBottom: '3rem'
                }}>
                    {clientIndustries.map(industry => (
                        <button
                            key={industry}
                            onClick={() => setActiveTab(industry)}
                            style={{
                                padding: '0.5rem 1.2rem',
                                borderRadius: '99px',
                                border: `1px solid ${activeTab === industry ? '#7c3aed' : 'rgba(255,255,255,0.12)'}`,
                                background: activeTab === industry ? '#7c3aed' : 'rgba(255,255,255,0.04)',
                                color: activeTab === industry ? '#fff' : 'rgba(255,255,255,0.55)',
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                                boxShadow: activeTab === industry ? '0 6px 18px rgba(124,58,237,0.35)' : 'none',
                                whiteSpace: 'nowrap' as const,
                                flexShrink: 0
                            }}
                        >
                            {industry}
                        </button>
                    ))}
                </div>

                {/* ── Clients Grid ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '1.25rem'
                }}>
                    {filteredClients.map((client, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '1rem',
                            padding: '1.5rem 1rem',
                            textAlign: 'center' as const,
                            backdropFilter: 'blur(12px)',
                            display: 'flex',
                            flexDirection: 'column' as const,
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            boxSizing: 'border-box' as const
                        }}>
                            {/* Logo */}
                            <div style={{ width: '100%', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                                {client.logo ? (
                                    <img src={client.logo} alt={`${client.name} logo`} style={{ maxWidth: '100px', maxHeight: '52px', objectFit: 'contain', display: 'block' }} />
                                ) : (
                                    <div style={{ fontSize: '1.75rem', opacity: 0.4 }}>🏢</div>
                                )}
                            </div>

                            {/* Name */}
                            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fff', lineHeight: 1.35, wordBreak: 'break-word' as const, overflowWrap: 'break-word' as const, width: '100%' }}>
                                {client.name}
                            </div>

                            {/* Industry */}
                            <div style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#a78bfa', lineHeight: 1.4, wordBreak: 'break-word' as const, width: '100%' }}>
                                {client.industry}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div style={{ textAlign: 'center', paddingTop: '5rem' }}>
                    <div style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '1.5rem',
                        padding: '3rem 2rem',
                        backdropFilter: 'blur(20px)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: '0.75rem' }}>Want to be our next success story?</div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.75rem', lineHeight: 1.7 }}>Let&apos;s discuss your growth strategy.</div>
                        <Link href="/appointment" style={{ display: 'inline-block', padding: '1rem 2.5rem', borderRadius: '99px', background: 'linear-gradient(135deg, #7c3aed, #6366f1)', color: '#fff', fontWeight: 800, textDecoration: 'none' }}>Start Your Audit →</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
