'use client';
import { useState, useEffect } from 'react';
import { companyInfo } from '@/data/sitedata';

const auditBenefits = [
    { title: 'SEO Analysis', desc: 'Full scan of your Google rankings and keyword opportunities.' },
    { title: 'PPC Performance', desc: 'Identify wasted ad spend in your Google or Meta campaigns.' },
    { title: 'Conversion Audit', desc: 'UX review to find out why visitors aren\'t turning into leads.' },
    { title: 'Competitor Intel', desc: 'See what your competitors are doing better than you.' },
];

export default function FreeAuditUI() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

  
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
            website: formData.get('website'),
            goal: formData.get('goal'),
        };

        try {
            const res = await fetch('/api/free-audit', {
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
            console.error('Free audit form submit error', err);
            setError('Network error. Please try again.');
            setSubmitting(false);
        }
    };

    return (
        <main style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #050a14 0%, #0a0f1e 40%, #0d1427 100%)',
            paddingTop: '100px',
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
        }}>

            {/* Subtle grid overlay */}
            <div style={{
                position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px 100px' }}>

                {/* ── HERO SECTION ─────────────────────────────────── */}
                <div style={{ textAlign: 'center', padding: '60px 0 40px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)',
                        borderRadius: '99px', padding: '6px 18px', marginBottom: '24px',
                    }}>
                        <span style={{ fontSize: '14px' }}></span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#60a5fa', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            Limited Free Audits Available
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1,
                        color: '#f8fafc', margin: '0 0 20px', letterSpacing: '-0.03em',
                    }}>
                        Stop Guessing.{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>
                            Start Growing.
                        </span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(15px, 2vw, 18px)', color: '#94a3b8', maxWidth: '600px',
                        margin: '0 auto 40px', lineHeight: 1.7,
                    }}>
                        Get a detailed, human-reviewed digital marketing audit of your business.
                        We’ll show you exactly where you’re losing money and how to fix it.
                    </p>
                </div>

                {/* ── MAIN CONTENT GRID ────────────────────────────── */}
                <div style={{
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'minmax(300px, 1fr) 440px',
                    gap: isMobile ? '24px' : '40px', 
                    alignItems: 'start',
                }}>

                    {/* LEFT SIDE: Benefits/Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{
                            display: 'grid', 
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                            gap: '20px'
                        }}>
                            {auditBenefits.map((b, i) => (
                                <div key={i} style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: '16px', padding: '24px',
                                }}>
                                    <div style={{ fontSize: '24px', marginBottom: '12px' }}>
                                        {i === 0 ? '' : i === 1 ? '' : i === 2 ? '' : ''}
                                    </div>
                                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f1f5f9', marginBottom: '8px' }}>
                                        {b.title}
                                    </h3>
                                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                                        {b.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Social Proof / Trust */}
                        <div style={{
                            marginTop: '20px', padding: '24px',
                            background: 'rgba(255,255,255,0.02)',
                            borderRadius: '16px', border: '1px dashed rgba(255,255,255,0.1)',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>
                                Trusted by <span style={{ color: '#fff', fontWeight: 700 }}>350+ businesses</span> across India.
                                No credit card required. No obligation.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The Form */}
                    <div style={{
                        background: '#fff', borderRadius: '24px',
                        padding: isMobile ? '24px' : '40px', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        position: 'relative', overflow: 'hidden'
                    }}>
                        {!submitted ? (
                            <>
                                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                                    Request Your Audit
                                </h2>
                                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>
                                    Enter your details below and we&apos;ll get started.
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                                            Full Name *
                                        </label>
                                        <input type="text" required placeholder="John Doe" style={inputStyle} name="name" />
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                                            Phone Number *
                                        </label>
                                        <input type="tel" required placeholder="+91 98765 43210" style={inputStyle} name="phone" />
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                                            Business Website URL *
                                        </label>
                                        <input required placeholder="www.yourbusiness.com" style={inputStyle} name="website" />
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                                            What is your main goal?
                                        </label>
                                        <select style={inputStyle} name="goal">
                                            <option>Increase Local Leads</option>
                                            <option>Rank Higher on Google</option>
                                            <option>AI Automation & Efficiency</option>
                                            <option>CRM & Lead Management</option>
                                            <option>Reduce Ad Spend Wasted</option>
                                            <option>Build Brand Reputation</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        style={{
                                            width: '100%', padding: '16px',
                                            background: '#3b82f6', color: '#fff',
                                            border: 'none', borderRadius: '12px',
                                            fontSize: '16px', fontWeight: 700,
                                            cursor: 'pointer', boxShadow: '0 4px 12px rgba(59,130,246,0.3)',
                                            transition: 'transform 0.2s, background 0.2s',
                                            marginTop: '10px'
                                        }}
                                        disabled={submitting}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.transform = 'none'; }}
                                    >
                                        {submitting ? 'Sending…' : 'Analyze My Business →'}
                                    </button>

                                    {error && (
                                        <p style={{ textAlign: 'center', fontSize: '12px', color: '#ef4444', marginTop: '12px' }}>
                                            {error}
                                        </p>
                                    )}

                                    <p style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>
                                        We respect your privacy. No spam, ever.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                                    Audit Requested!
                                </h2>
                                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '32px' }}>
                                    Expect your detailed report in your inbox within 24-48 hours.
                                    Our team is already looking at your website.
                                </p>
                                <a href="/" style={{
                                    display: 'inline-block', color: '#3b82f6', fontWeight: 700,
                                    textDecoration: 'none', fontSize: '15px'
                                }}>
                                    ← Back to Homepage
                                </a>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </main>
    );
}

const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    WebkitAppearance: 'none' as const,
};
