'use client';
import { useState, useEffect } from 'react';
import { companyInfo, contactPage } from '@/data/sitedata';
import { schemaBreadcrumb } from '@/lib/schema';

export default function ContactUI() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const payload = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            company: formData.get('company'),
            service: formData.get('service'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || 'Something went wrong. Please try again.');
                setSubmitting(false);
                return;
            }

            setSubmitted(true);
        } catch (err) {
            console.error('Contact form submit error', err);
            setError('Network error. Please try again.');
            setSubmitting(false);
        }
    };

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                    schemaBreadcrumb([
                        { name: 'Home', url: 'https://www.global.digitalgrowx.com/' },
                        { name: 'Contact Us', url: 'https://www.global.digitalgrowx.com/appointment' }
                    ])
                )
            }} />

            {/* ── PAGE HERO ────────────────────────────────────────── */}
            <section style={{
                background: 'linear-gradient(145deg, #060d1f 0%, #0a1628 50%, #05101e 100%)',
                paddingTop: '9rem',
                paddingBottom: '5rem',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Grid pattern */}
                <div aria-hidden="true" style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />
                {/* Glow */}
                <div aria-hidden="true" style={{
                    position: 'absolute', top: '-20%', right: '-5%',
                    width: '50%', height: '130%',
                    background: 'radial-gradient(ellipse, rgba(29,78,216,0.15) 0%, transparent 65%)',
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="section-tag tag-blue" style={{ marginBottom: '1.25rem' }}>
                        Get In Touch
                    </span>
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.08,
                        color: '#fff',
                        marginBottom: '1.25rem',
                    }}>
                        Let&apos;s Grow Your{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Business Together
                        </span>
                    </h1>
                    <p style={{
                        fontSize: '1.05rem',
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.8,
                        maxWidth: '540px',
                        margin: '0 auto',
                    }}>
                        Talk to our team today — no pressure, no sales pitch.
                        Just a genuine conversation about how we can help you grow.
                    </p>

                    {/* Quick contact pills */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        marginTop: '2rem',
                    }}>
                        <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '9px 20px',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.14)',
                            borderRadius: '99px',
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '13.5px', fontWeight: 600,
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.22s ease',
                            textDecoration: 'none',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; }}
                        >
                            {companyInfo.phone}
                        </a>
                        <a href={companyInfo.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '9px 20px',
                            background: 'rgba(37,211,102,0.1)',
                            border: '1px solid rgba(37,211,102,0.25)',
                            borderRadius: '99px',
                            color: '#4ade80',
                            fontSize: '13.5px', fontWeight: 600,
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.22s ease',
                            textDecoration: 'none',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.18)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)'; }}
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* ── MAIN CONTENT ─────────────────────────────────────── */}
            <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'clamp(280px, 40%, 480px) 1fr',
                        gap: isMobile ? '2rem' : '3rem',
                        alignItems: 'start',
                    }}>

                        {/* ── LEFT: Info ─────────────────────────────── */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* What you get card */}
                            <div style={{
                                background: '#fff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '20px',
                                padding: '2rem',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                            }}>
                                <h2 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    color: '#0f172a',
                                    marginBottom: '1.25rem',
                                }}>
                                    What you get — free
                                </h2>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                    {contactPage.benefits.map((benefit, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            fontSize: '14px',
                                            color: '#334155',
                                            lineHeight: 1.5,
                                        }}>
                                            {benefit.replace(/^\s*/, '')}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Details card */}
                            <div style={{
                                background: '#fff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '20px',
                                padding: '2rem',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                            }}>
                                <h2 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    color: '#0f172a',
                                }}>
                                    Contact Details
                                </h2>

                                {[/* eslint-disable @typescript-eslint/no-unused-vars */
                                    {
                                        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#2563eb" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="#2563eb" strokeWidth="1.5"/></svg>,
                                        label: 'Our Office',
                                        content: companyInfo.address,
                                        href: companyInfo.googleMaps,
                                        isAddress: true,
                                    },
                                    {
                                        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                                        label: 'Call / WhatsApp',
                                        content: companyInfo.phone,
                                        href: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
                                    },
                                    {
                                        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                                        label: 'Sales Line',
                                        content: companyInfo.phoneSales,
                                        href: `tel:${companyInfo.phoneSales.replace(/\s/g, '')}`,
                                    },
                                    {
                                        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="20" height="14" rx="2" stroke="#2563eb" strokeWidth="1.5"/><path d="M2 8l10 6 10-6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                                        label: 'Email',
                                        content: companyInfo.email,
                                        href: `mailto:${companyInfo.email}`,
                                    },
                                    {
                                        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="1.5"/><path d="M12 6v6l4 2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                                        label: 'Hours',
                                        content: 'Mon – Sat: 10:00 AM – 7:00 PM',
                                        href: null,
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="contact-info-item">
                                        <div className="contact-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                                        <div style={{ minWidth: 0 }}>
                                            <div style={{
                                                fontSize: '11px',
                                                fontWeight: 700,
                                                color: '#94a3b8',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.09em',
                                                marginBottom: '3px',
                                            }}>
                                                {item.label}
                                            </div>
                                            {item.href ? (
                                                item.isAddress ? (
                                                    <address style={{ fontStyle: 'normal' }}>
                                                        <a
                                                            href={item.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                fontSize: '13.5px',
                                                                color: '#334155',
                                                                lineHeight: 1.55,
                                                                display: 'block',
                                                                transition: 'color 0.2s',
                                                                textDecoration: 'none',
                                                            }}
                                                            onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                                                            onMouseLeave={e => (e.currentTarget.style.color = '#334155')}
                                                        >
                                                            {item.content}
                                                        </a>
                                                    </address>
                                                ) : (
                                                    <a
                                                        href={item.href}
                                                        style={{
                                                            fontSize: '14px',
                                                            fontWeight: 600,
                                                            color: '#334155',
                                                            transition: 'color 0.2s',
                                                            textDecoration: 'none',
                                                        }}
                                                        onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                                                        onMouseLeave={e => (e.currentTarget.style.color = '#334155')}
                                                    >
                                                        {item.content}
                                                    </a>
                                                )
                                            ) : (
                                                <span style={{ fontSize: '13.5px', color: '#334155' }}>
                                                    {item.content}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social links */}
                            <div style={{
                                background: 'linear-gradient(145deg, #060d1f, #0a1628)',
                                borderRadius: '20px',
                                padding: '1.75rem 2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '1rem',
                                flexWrap: 'wrap',
                            }}>
                                <div>
                                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '3px' }}>
                                        Follow Us
                                    </div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                                        Stay updated on our latest work
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {companyInfo.socials.facebook && (
                                        <a href={companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" style={{
                                            width: '38px', height: '38px',
                                            background: 'rgba(255,255,255,0.07)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '10px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            transition: 'background 0.2s',
                                            textDecoration: 'none',
                                            color: 'rgba(255,255,255,0.7)',
                                        }}
                                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                                            aria-label="Facebook"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    )}
                                    {companyInfo.socials.instagram && (
                                        <a href={companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" style={{
                                            width: '38px', height: '38px',
                                            background: 'rgba(255,255,255,0.07)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '10px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            transition: 'background 0.2s',
                                            textDecoration: 'none',
                                            color: 'rgba(255,255,255,0.7)',
                                        }}
                                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                                            aria-label="Instagram"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="18" cy="6" r="1" fill="currentColor"/>
                                            </svg>
                                        </a>
                                    )}
                                    {companyInfo.socials.linkedin && (
                                        <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{
                                            width: '38px', height: '38px',
                                            background: 'rgba(255,255,255,0.07)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '10px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            transition: 'background 0.2s',
                                            textDecoration: 'none',
                                            color: 'rgba(255,255,255,0.7)',
                                        }}
                                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                                            aria-label="LinkedIn"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: Form ────────────────────────────── */}
                        <div style={{
                            background: '#fff',
                            border: '1px solid #e2e8f0',
                            borderRadius: '24px',
                            padding: '3rem',
                            boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                            position: 'sticky',
                            top: '6rem',
                        }}>
                            {!submitted ? (
                                <>
                                    {/* Form header */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '5px 14px',
                                            background: 'rgba(29,78,216,0.07)',
                                            border: '1px solid rgba(29,78,216,0.12)',
                                            borderRadius: '99px',
                                            fontSize: '11.5px',
                                            fontWeight: 700,
                                            color: '#1d4ed8',
                                            textTransform: 'uppercase' as const,
                                            letterSpacing: '0.08em',
                                            marginBottom: '1rem',
                                        }}>
                                            <span style={{
                                                width: '6px', height: '6px',
                                                background: '#10b981',
                                                borderRadius: '50%',
                                            }} />
                                            Responding within 2 hours
                                        </span>
                                        <h2 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '1.6rem',
                                            fontWeight: 800,
                                            color: '#0f172a',
                                            letterSpacing: '-0.025em',
                                            marginBottom: '0.5rem',
                                        }}>
                                            {contactPage.headline}
                                        </h2>
                                        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                                            {contactPage.subheadline}
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Full Name <span className="req">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-input"
                                                    placeholder="Rajesh Patel"
                                                    name="name"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Phone <span className="req">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-input"
                                                    placeholder="+91 98765 43210"
                                                    name="phone"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                                            <label className="form-label">
                                                Email Address <span className="req">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-input"
                                                placeholder="you@company.com"
                                                name="email"
                                                required
                                            />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                                            <label className="form-label">Business / Company Name</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="Your Business Name"
                                                name="company"
                                            />
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                                            <label className="form-label">Service You Need</label>
                                            <select className="form-input" style={{ appearance: 'none', cursor: 'pointer' }} name="service">
                                                <option value="">Select a service...</option>
                                                <option>SEO / Search Engine Optimisation</option>
                                                <option>Google Ads / PPC</option>
                                                <option>AI Automation & CRM Integration</option>
                                                <option>Custom Web & App Development</option>
                                                <option>WhatsApp Business Automation</option>
                                                <option>Lead Generation</option>
                                                <option>Social Media Marketing</option>
                                                <option>Full Marketing & IT Package</option>
                                            </select>
                                        </div>

                                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                                            <label className="form-label">Tell Us About Your Goals</label>
                                            <textarea
                                                className="form-input"
                                                rows={4}
                                                placeholder="What are you trying to achieve? Any current challenges? Budget range?"
                                                style={{ minHeight: '110px', resize: 'vertical' }}
                                                name="message"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                background: 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '12px',
                                                fontSize: '15px',
                                                fontWeight: 700,
                                                fontFamily: 'var(--font-primary)',
                                                cursor: 'pointer',
                                                boxShadow: '0 6px 24px rgba(29,78,216,0.35)',
                                                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                                            }}
                                            disabled={submitting}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(29,78,216,0.45)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 6px 24px rgba(29,78,216,0.35)';
                                            }}
                                        >
                                            {submitting ? 'Sending…' : 'Send My Enquiry →'}
                                        </button>

                                        {error && (
                                            <p style={{ marginTop: '0.75rem', fontSize: '12px', color: '#ef4444', textAlign: 'center' }}>
                                                {error}
                                            </p>
                                        )}

                                        <p style={{
                                            textAlign: 'center',
                                            fontSize: '12px',
                                            color: '#94a3b8',
                                            marginTop: '1rem',
                                            lineHeight: 1.5,
                                        }}>
                                            {contactPage.formNote}
                                        </p>
                                    </form>
                                </>
                            ) : (
                                /* Success State */
                                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        color: '#0f172a',
                                        marginBottom: '0.75rem',
                                    }}>
                                        Message Sent!
                                    </h3>
                                    <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: 1.7, maxWidth: '340px', margin: '0 auto 2rem' }}>
                                        Thank you for reaching out. Our team will get back to you within 2 hours on business days.
                                    </p>
                                    <a href={companyInfo.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '11px 24px',
                                        background: '#25d366',
                                        color: '#fff',
                                        borderRadius: '99px',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
                                    }}>
                                        Get a faster reply on WhatsApp
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GOOGLE MAPS ───────────────────────────────────────── */}
            <section style={{ background: '#fff', padding: '0 0 5rem' }}>
                <div className="container">
                    <div style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                        position: 'relative',
                    }}>
                        {/* Map label */}
                        <div style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            zIndex: 10,
                            background: '#fff',
                            borderRadius: '12px',
                            padding: '10px 16px',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#2563eb" strokeWidth="1.5"/>
                                <circle cx="12" cy="10" r="3" stroke="#2563eb" strokeWidth="1.5"/>
                            </svg>
                            <div>
                                <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Digital GrowX</div>
                                <div style={{ fontSize: '11px', color: '#64748b' }}>Nikol, Ahmedabad</div>
                            </div>
                        </div>
                        <iframe
                            title="Digital GrowX Office Location — Nikol, Ahmedabad, Gujarat"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1146.993685472145!2d72.677573!3d23.056689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e877e890ae5ad%3A0xc7f2351a28633981!2sDigital%20GrowX!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            width="100%"
                            height="420"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Directions link */}
                    <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                        <a
                            href={companyInfo.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '13.5px',
                                fontWeight: 600,
                                color: '#1d4ed8',
                                textDecoration: 'none',
                                transition: 'opacity 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                        >
                            Get Directions on Google Maps →
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}