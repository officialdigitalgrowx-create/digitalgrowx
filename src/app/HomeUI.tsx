'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useGSAP, useHeroAnimation } from '@/lib/animations';
import {
    heroContent,
    heroStats,
    clientLogos,
    clients,
    problemSolutions,
    gptSpotlight,
    services,
    testimonials,
    companyStats,
    aiShowcase,
    methodology,
    faqs,
    companyInfo
} from '@/data/sitedata';
import { schemaFAQ, schemaReviews, schemaBreadcrumb } from '@/lib/schema';

function getTestimonialLogo(companyLabel: string) {
    const baseName = companyLabel.split(',')[0].trim();
    const match = clients.find(
        (c) => c.name === baseName || companyLabel.includes(c.name)
    );
    return match?.logo;
}

export default function HomeUI() {
    const gsapScope = useGSAP();
    const heroRef = useRef<HTMLDivElement>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [terminalLines, setTerminalLines] = useState(aiShowcase.terminalLines.slice(0, 3));

    // Wait for mount to ensure elements are in DOM for GSAP
    useHeroAnimation(isMounted ? heroRef : { current: null });

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setTerminalLines(prev => {
                if (prev.length >= aiShowcase.terminalLines.length) {
                    return aiShowcase.terminalLines.slice(0, 3);
                }
                return aiShowcase.terminalLines.slice(0, prev.length + 1);
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={(el) => {
            if (el) {
                (gsapScope as React.MutableRefObject<HTMLDivElement | null>).current = el;
                heroRef.current = el;
            }
        }}>
            {/* Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaReviews) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([{ name: 'Home', url: 'https://www.global.digitalgrowx.com/' }])) }} />

            {/* ── HERO ──────────────────────────────────────────────── */}
            <section className="hero-section" aria-label="Hero">
                <div className="hero-bg" aria-hidden="true">
                    <div className="hero-gradient" />
                    <div className="hero-grid-pattern" />
                    <div className="hero-glow-top" />
                    <div className="hero-glow-bottom" />
                </div>

                <div className="container hero-content">
                    {/* Left */}
                    <div className="hero-left">
                        <div className="hero-badge">
                            <span className="badge-dot" />
                            {heroContent.badge}
                        </div>

                        <h1 className="hero-title">
                            Digital Marketing Agency in{' '}
                            <span className="text-gradient-hero">India</span>
                        </h1>

                        <p className="hero-subtitle">{heroContent.subheadline}</p>

                        <div className="hero-ctas">
                            <Link href={heroContent.ctaPrimary.href} className="btn-hero-primary hero-cta magnetic-hover">
                                {heroContent.ctaPrimary.label}
                            </Link>
                            <Link href={heroContent.ctaSecondary.href} className="btn-hero-ghost hero-cta">
                                {heroContent.ctaSecondary.label}
                            </Link>
                        </div>

                        {/* Proof points */}
                        <div className="hero-stats">
                            {heroStats.slice(0, 3).map((stat, i) => (
                                <div key={i} className="hero-stat">
                                    <span className="hero-stat-value">{stat.value}</span>
                                    <span className="hero-stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Proof pills */}
                        <div className="hero-proof-pills">
                            {heroContent.proofPoints.map((point, i) => (
                                <span key={i} className="hero-proof-pill">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', flexShrink: 0 }}>
                                        <path d="M5 12l5 5L20 7" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {point}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right — Metric Card */}
                    <div className="hero-visual">


                        <div className="hero-visual-card">
                            <div className="visual-metric">
                                <span className="visual-metric-label">Monthly Lead Growth</span>
                                <span className="visual-metric-value">
                                    <span className="hero-count-up">10</span><span className="value-suffix">x</span>
                                </span>
                                <span className="visual-metric-change">↑ Record high-ticket leads this quarter</span>
                            </div>

                            <div className="visual-chart">
                                <svg viewBox="0 0 280 90" className="chart-svg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                                        </linearGradient>
                                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="1" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                        </filter>
                                        <clipPath id="clip"><rect x="0" y="-10" width="280" height="110" /></clipPath>
                                    </defs>
                                    <g clipPath="url(#clip)">
                                        {[22, 48, 72].map(y => (
                                            <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                                        ))}
                                        <path className="chart-path-fill" d="M0,85 C30,83 50,80 70,76 C90,72 105,66 125,57 C145,48 160,36 180,24 C200,12 220,5 245,2 C258,1 270,1 280,1 L280,90 L0,90 Z" fill="url(#chartGrad)" />
                                        <path className="chart-path-line" d="M0,85 C30,83 50,80 70,76 C90,72 105,66 125,57 C145,48 160,36 180,24 C200,12 220,5 245,2 C258,1 270,1 280,1" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                                        <circle cx="280" cy="1" r="3.5" fill="#a78bfa" />
                                        <circle cx="280" cy="1" r="3.5" fill="none" stroke="#a78bfa" strokeWidth="1.5">
                                            <animate attributeName="r" values="4;10;4" dur="2.6s" repeatCount="indefinite" />
                                            <animate attributeName="opacity" values="0.8;0;0.8" dur="2.6s" repeatCount="indefinite" />
                                        </circle>
                                    </g>
                                </svg>
                            </div>

                            <div className="visual-badges">
                                <span className="visual-badge">AI Optimised</span>
                                <span className="visual-badge">Real-Time</span>
                                <span className="visual-badge">Live ROI</span>
                            </div>

                            <div className="floating-chip chip-1">+347% Organic Traffic</div>
                            <div className="floating-chip chip-2">10x ROAS Achieved</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRUST STRIP ───────────────────────────────────────── */}
            <section className="trust-strip" aria-label="Trusted by brands">
                <div className="container">
                    <p className="trust-label">Trusted by 350+ fast-growing businesses across India</p>
                    <div className="marquee-wrap">
                        <div className="marquee-track">
                            {[...clients, ...clients].map((client, i) => (
                                <div key={i} className="marquee-client-item" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '10px',
                                    transition: 'all 0.4s ease'
                                }}>
                                    <div className="marquee-client-logo client-logo-wrapper" style={{
                                        height: '47px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {client.logo ? (
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                width={38}
                                                height={38}
                                                loading="lazy"
                                                decoding="async"
                                                style={{
                                                    height: '100%',
                                                    width: 'auto',
                                                }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: '1.2rem', opacity: 0.5 }}></span>
                                        )}
                                    </div>
                                    <span style={{
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        color: 'rgba(15, 23, 42, 0.4)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        transition: 'color 0.4s ease'
                                    }}>
                                        {client.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ─────────────────────────────────────────── */}
            <section className="stats-bar" aria-label="Company statistics">
                <div className="container">
                    <div className="stats-grid gsap-stagger-children">
                        {companyStats.map((s, i) => (
                            <div key={i} className="stat-card">
                                <div className="stat-icon" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {i === 0 ? (
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="9" cy="7" r="4" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ) : i === 1 ? (
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ) : i === 2 ? (
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M17 6h6v6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ) : (
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9 12l2 2 4-4" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                </div>
                                <span className="stat-value">{s.value}</span>
                                <span className="stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GPT SPOTLIGHT ─────────────────────────────────────── */}
            <section className="section gpt-spotlight" aria-label="AI visibility">
                <div className="gpt-bg-glow" aria-hidden="true" />
                <div className="container gpt-grid">
                    <div className="gsap-slide-left">
                        <span className="section-tag tag-blue">{gptSpotlight.tag}</span>
                        <h2 className="section-title white-title" style={{ marginBottom: '1rem' }}>
                            {gptSpotlight.headline
                                .split(' ')
                                .map((word, i) =>
                                    ['GPT', 'Ads.', 'AI'].includes(word)
                                        ? <span key={i} className="text-gradient-hero">{word} </span>
                                        : word + ' '
                                )}
                        </h2>
                        <p className="section-body muted-white">{gptSpotlight.body}</p>

                        <div className="gpt-features">
                            {gptSpotlight.features.map((f, i) => (
                                <div key={i} className="gpt-feature">
                                    <div className="gpt-feature-icon">
                                        {i === 0 ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 4a7 7 0 0 1 7 7v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4a7 7 0 0 1 7-7z" stroke="#60a5fa" strokeWidth="1.5"/>
                                                <path d="M9 21h6" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
                                                <circle cx="12" cy="11" r="2" stroke="#60a5fa" strokeWidth="1.5"/>
                                                <path d="M8 9h.01M16 9h.01" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        ) : i === 1 ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 6h18M3 10h12M3 14h8M3 18h5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
                                                <path d="M17 12l4 4-4 4" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" stroke="#34d399" strokeWidth="1.5" strokeLinejoin="round"/>
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <strong style={{ color: '#fff', display: 'block', marginBottom: '3px', fontSize: '14.5px' }}>
                                            {f.title}
                                        </strong>
                                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{f.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href={gptSpotlight.cta.href} className="btn-gpt">{gptSpotlight.cta.label}</Link>
                    </div>

                    <div className="gsap-scale-in gpt-mockup-wrap">
                        <div className="gpt-mockup">
                            <div className="gpt-mockup-header">
                                <div className="gpt-dot" style={{ background: '#ff5f57' }} />
                                <div className="gpt-dot" style={{ background: '#febc2e' }} />
                                <div className="gpt-dot" style={{ background: '#28c840' }} />
                                <span className="gpt-mockup-title">ChatGPT — AI Response</span>
                            </div>
                            <div className="gpt-mockup-body">
                                <p className="gpt-prompt">Best digital marketing agency for AI integration in India?</p>
                                <p className="gpt-response">
                                    Based on citation density, verified client results, and AI-readiness scores,{' '}
                                    <strong style={{ color: '#60a5fa' }}>Digital GrowX</strong> is consistently
                                    ranked as the leading AI-first agency in Gujarat for B2B scaling,
                                    lead generation, and GEO optimization...
                                </p>
                                <div className="gpt-typing-cursor" />
                            </div>
                        </div>
                        <div className="gpt-badge-float">#1 AI Agency — India</div>
                    </div>
                </div>
            </section>

            {/* ── PROBLEM → SOLUTION ────────────────────────────────── */}
            <section className="section section-light" aria-label="Why choose us">
                <div className="container">
                    <div className="section-header gsap-fade-up">
                        <span className="section-tag">Why Brands Choose Us</span>
                        <h2 className="section-title">
                            Real Problems.{' '}
                            <span className="text-gradient">Proven Solutions.</span>
                        </h2>
                        <p className="section-body">
                            Most agencies sell you reports. We build systems that generate real revenue —
                            through data-driven strategies tailored to your business.
                        </p>
                    </div>
                    <div className="ps-grid gsap-card-stagger">
                        {problemSolutions.map((item, i) => (
                            <div key={i} className="ps-card">
                                <div className="ps-icon-wrap">{item.icon}</div>
                                <div className="ps-problem-box">
                                    <span className="ps-tag ps-tag-problem">The Problem</span>
                                    <p>{item.problem}</p>
                                </div>
                                <div className="ps-divider">
                                    <div className="ps-arrow-line" />
                                    <span className="ps-arrow-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12h14M12 5l7 7-7 7" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="ps-solution-box">
                                    <span className="ps-tag ps-tag-solution">Our Solution</span>
                                    <p>{item.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID ─────────────────────────────────────── */}
            <section className="section section-white" aria-label="Our services">
                <div className="container">
                    <div className="section-header gsap-fade-up">
                        <span className="section-tag">Strategic Marketing Services</span>
                        <h2 className="section-title">
                            Solutions That <span className="text-gradient">Drive Results</span>
                        </h2>
                        <p className="section-body">
                            From SEO and Google Ads to AI Agents and CRM integration —
                            every solution we build is focused on one goal: scaling your enterprise.
                        </p>
                    </div>
                    <div className="services-grid gsap-card-stagger">
                        {services.map((service) => (
                            <Link href={`/services/${service.slug}`} key={service.slug} className="service-card glass-card">
                                {service.slug === 'aeo-gpt-ads' && (
                                    <div className="service-future-badge">FUTURE</div>
                                )}
                                <div className="service-icon-wrap">
                                    <span style={{ fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {service.slug === 'seo' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                                <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        ) : service.slug === 'aeo-gpt-ads' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="2" y="4" width="20" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="10" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="16" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M6 8l2-2M18 8l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        ) : service.slug === 'local-seo' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M12 16v4M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        ) : service.slug === 'google-ads' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        ) : service.slug === 'social-media' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M9 10.5l6-3M9 13.5l6 3" stroke="currentColor" strokeWidth="1.5"/>
                                            </svg>
                                        ) : service.slug === 'performance-marketing' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M14 7h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        ) : service.slug === 'lead-generation' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                                <path d="M8 8c-2.2 0-4 1.8-4 4v2h16v-2c0-2.2-1.8-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                                <path d="M2 21h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                                <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M17 7l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        ) : service.slug === 'brand-awareness' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        ) : service.slug === 're-marketing' ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 4v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M20 20v-6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M20 8a9 9 0 0 0-14.2-3.8L4 10M20 14l-1.8 5.8A9 9 0 0 1 4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        ) : (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                <h3 className="service-name">{service.title}</h3>
                                <p className="service-desc">{service.shortDesc}</p>
                                <span className="service-link">Explore Strategy →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── METHODOLOGY ───────────────────────────────────────── */}
            <section className="section section-light" aria-label="How we work">
                <div className="container">
                    <div className="section-header gsap-fade-up">
                        <span className="section-tag">How We Work</span>
                        <h2 className="section-title">
                            Our 4-Step <span className="text-gradient">Growth Framework</span>
                        </h2>
                        <p className="section-body">
                            A clear, repeatable process that takes you from strategy to measurable results —
                            every single time.
                        </p>
                    </div>
                    <div className="method-grid gsap-card-stagger">
                        {methodology.map((m, i) => (
                            <div key={m.step} className="method-card">
                                <div className="method-step-badge">{m.step}</div>
                                <span className="method-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {i === 0 ? (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11" cy="11" r="7" stroke="#2563eb" strokeWidth="1.5"/>
                                            <path d="M21 21l-4.35-4.35" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                    ) : i === 1 ? (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 4h16v16H4V4z" stroke="#2563eb" strokeWidth="1.5"/>
                                            <path d="M4 10h16M10 4v16" stroke="#2563eb" strokeWidth="1.5"/>
                                            <circle cx="7" cy="7" r="1.5" fill="#2563eb"/>
                                            <circle cx="17" cy="17" r="1.5" fill="#2563eb"/>
                                        </svg>
                                    ) : i === 2 ? (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round"/>
                                        </svg>
                                    ) : (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 17l6-6 4 4 8-8" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14 7h7v7" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                </span>
                                <h3>{m.title}</h3>
                                <p>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── AI AUTOMATION SHOWCASE ────────────────────────────── */}
            <section className="section section-gradient-dark" aria-label="AI automation">
                <div className="container ai-grid">
                    <div className="gsap-slide-left ai-content">
                        <span className="section-tag tag-light">AI-Powered Automation</span>
                        <h2 className="section-title white-title">
                            Your Business,{' '}
                            <span className="text-gradient-hero">Running 24/7 on Autopilot</span>
                        </h2>
                        <p className="section-body muted-white">
                            While competitors rely on manual follow-ups, our AI automation captures leads,
                            sends instant responses, scores prospects, and books appointments —
                            even while you sleep.
                        </p>
                        <div className="ai-caps">
                            {aiShowcase.capabilities.map((c, i) => (
                                <div key={i} className="ai-cap">
                                    <div className="ai-cap-icon">
                                        {i === 0 ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 12h8M8 8h4m-4 8h6" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <rect x="2" y="4" width="20" height="16" rx="4" stroke="#60a5fa" strokeWidth="1.5"/>
                                                <circle cx="18" cy="9" r="1.5" fill="#60a5fa"/>
                                                <circle cx="16" cy="14" r="1.5" fill="#60a5fa"/>
                                            </svg>
                                        ) : i === 1 ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 2L4 12h7l-2 8 9-10h-7l2-8z" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3 8c0-2.5 2-4 4.5-4h9c2.5 0 4.5 1.5 4.5 4v8c0 2.5-2 4-4.5 4h-9C5 20 3 18.5 3 16V8z" stroke="#34d399" strokeWidth="1.5"/>
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="4" y="10" width="4" height="10" rx="1" stroke="#a78bfa" strokeWidth="1.5"/>
                                                <rect x="10" y="6" width="4" height="14" rx="1" stroke="#a78bfa" strokeWidth="1.5"/>
                                                <rect x="16" y="14" width="4" height="6" rx="1" stroke="#a78bfa" strokeWidth="1.5"/>
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <strong style={{ color: '#fff', display: 'block', marginBottom: '3px', fontSize: '14.5px' }}>
                                            {c.title}
                                        </strong>
                                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                                            {c.desc}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href={aiShowcase.ctaHref} className="btn-gpt" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                            {aiShowcase.ctaLabel}
                        </Link>
                    </div>

                    <div className="gsap-scale-in">
                        <div className="terminal">
                            <div className="terminal-header">
                                <span className="t-dot" style={{ background: '#ff5f57' }} />
                                <span className="t-dot" style={{ background: '#febc2e' }} />
                                <span className="t-dot" style={{ background: '#28c840' }} />
                                <span className="t-title">AI Lead Engine — Live</span>
                            </div>
                            <div className="terminal-body">
                                {terminalLines.map((line, i) => (
                                    <p key={i}>
                                        {line.color === 'green'
                                            ? <span className="t-green">→ </span>
                                            : <span className="t-blue">→ </span>}
                                        {line.text}
                                    </p>
                                ))}
                                <p className="t-blink" style={{ color: '#60a5fa' }}>█</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQs ──────────────────────────────────────────────── */}
            <section className="section section-white" aria-label="Frequently asked questions">
                <div className="container">
                    <div className="section-header gsap-fade-up">
                        <span className="section-tag">Common Questions</span>
                        <h2 className="section-title">
                            Got Questions? <span className="text-gradient">We Have Answers.</span>
                        </h2>
                        <p className="section-body">
                            Everything you need to know about working with Digital GrowX —
                            and how we drive real results for your business.
                        </p>
                    </div>

                    <div style={{ maxWidth: '780px', margin: '0 auto' }}>
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`faq-item${openFaq === i ? ' open' : ''}`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                    style={{
                                        width: '100%',
                                        padding: '1.35rem 1.5rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        gap: '1rem',
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        margin: 0,
                                        color: openFaq === i ? '#1d4ed8' : '#0f172a',
                                        lineHeight: 1.4,
                                        transition: 'color 0.2s',
                                    }}>
                                        {faq.question}
                                    </h3>
                                    <span style={{
                                        fontSize: '1.25rem',
                                        color: openFaq === i ? '#1d4ed8' : '#94a3b8',
                                        transition: 'transform 0.3s ease, color 0.2s',
                                        transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                                        flexShrink: 0,
                                        lineHeight: 1,
                                    }}>↓</span>
                                </button>
                                <div style={{
                                    maxHeight: openFaq === i ? '400px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.35s ease',
                                }}>
                                    <p style={{
                                        padding: '0 1.5rem 1.35rem',
                                        margin: 0,
                                        fontSize: '0.92rem',
                                        color: '#475569',
                                        lineHeight: 1.75,
                                    }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ──────────────────────────────────────── */}
            <section className="section section-light" aria-label="Client testimonials">
                <div className="container">
                    <div className="section-header gsap-fade-up">
                        <span className="section-tag">Client Love</span>
                        <h2 className="section-title">
                            What Our <span className="text-gradient">Clients Say</span>
                        </h2>
                        <p className="section-body">
                            350+ businesses across Gujarat and India trust Digital GrowX
                            to grow their brand and generate consistent leads.
                        </p>
                    </div>

                    <div className="testimonials-grid gsap-card-stagger">
                        {testimonials.map((t, i) => {
                            const logo = getTestimonialLogo(t.company);
                            return (
                                <div key={i} className="t-card">
                                    {/* Client Logo */}
                                    {logo && (
                                        <div className="t-logo-wrap" aria-hidden="true">
                                            <img src={logo} alt={t.company} width={38} height={38} loading="lazy" decoding="async" />
                                        </div>
                                    )}
                                    {/* Stars */}
                                    <div className="t-stars" aria-label="5 star rating">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <span key={s} className="t-star"></span>
                                        ))}
                                    </div>
                                    <div className="t-quote-mark" aria-hidden="true">&ldquo;</div>
                                    <p className="t-quote">{t.quote}</p>
                                    <div className="t-author">
                                        <div className="t-avatar" aria-hidden="true">
                                            {(t.author || t.company || 'C')[0]}
                                        </div>
                                        <div>
                                            <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>
                                                {t.author || 'Client'}
                                            </strong>
                                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                                                {(t as { role?: string }).role
                                                    ? `${(t as { role?: string }).role}, ${t.company}`
                                                    : t.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ─────────────────────────────────────────── */}
            <section className="final-cta" aria-label="Get started">
                <div className="final-cta-bg" aria-hidden="true" />
                <div className="container final-cta-inner gsap-fade-up">
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 16px',
                        background: 'rgba(245,158,11,0.12)',
                        border: '1px solid rgba(245,158,11,0.25)',
                        borderRadius: '99px',
                        marginBottom: '1.5rem',
                    }}>
                        <span style={{ fontSize: '11px', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Free Consultation Available
                        </span>
                    </div>

                    <h2 className="section-title white-title">
                        Ready to <span className="text-gradient-hero">Grow Your Business</span>?
                    </h2>
                    <p className="section-body muted-white" style={{ maxWidth: '540px', margin: '0 auto 2.5rem' }}>
                        Get a free 30-minute strategy session. No sales pressure —
                        just actionable insights tailored to your business goals.
                    </p>

                    <div className="final-btns">
                        <Link href={heroContent.ctaPrimary.href} className="btn-hero-primary">
                            {heroContent.ctaPrimary.label}
                        </Link>
                        <a href={companyInfo.whatsapp} className="btn-hero-ghost" target="_blank" rel="noopener noreferrer">
                            WhatsApp Us
                        </a>
                    </div>

                    <div className="trust-pills">
                        {heroContent.proofPoints.map((point, i) => (
                            <span key={i}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', flexShrink: 0, verticalAlign: 'middle' }}>
                                    <path d="M5 12l5 5L20 7" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                {point}
                            </span>
                        ))}
                    </div>

                    {/* Contact details */}
                    <div className="final-cta-contact" style={{
                        display: 'flex',
                        marginTop: '2.5rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(255,255,255,0.07)',
                    }}>
                        <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '7px',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {companyInfo.phone}
                        </a>
                        <a href={`mailto:${companyInfo.email}`} style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '7px',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {companyInfo.email}
                        </a>
                        <a
                            href={companyInfo.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'rgba(255,255,255,0.5)',
                                fontSize: '13px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '7px',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/>
                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            {companyInfo.addressShort}
                        </a>
                    </div>
                </div>
            </section>


        </div>
    );
}
