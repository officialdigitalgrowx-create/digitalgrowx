'use client';
import Link from 'next/link';
import { footer, companyInfo, industries, companyStats } from '@/data/sitedata';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: 'linear-gradient(145deg, #060d1f 0%, #0a1628 60%, #060d1f 100%)',
            color: 'white',
            borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
            {/* ── Stats Strip ─────────────────────────────────────── */}
            <div style={{
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '2.5rem 0',
            }}>
                <div className="container">
                    {/* footer-stats-grid className lets CSS override grid on mobile */}
                    <div className="footer-stats-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                        gap: '1rem',
                    }}>
                        {companyStats.map((s, i) => (
                            <div key={i} style={{
                                textAlign: 'center',
                                padding: '1.25rem 1rem',
                                borderRadius: '14px',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)',
                            }}>
                                <div style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.75rem',
                                    fontWeight: 800,
                                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    lineHeight: 1,
                                    marginBottom: '4px',
                                }}>
                                    {s.value}
                                </div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Main Footer Body ─────────────────────────────────── */}
            {/* footer-body className lets CSS reduce padding on mobile */}
            <div className="footer-body" style={{ padding: '5rem 0 3rem' }}>
                <div className="container">
                    <div className="footer-main-grid" style={{
                        display: 'grid',
                        gap: '3.5rem',
                        marginBottom: '4rem',
                    }}>

                        {/* ── Brand Column ───────────────────────── */}
                        <div>
                            {/* Logo */}
                            <Link href="/" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                textDecoration: 'none', marginBottom: '1.5rem',
                            }}>
                                <div style={{
                                    width: '36px', height: '36px',
                                    background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
                                    borderRadius: '10px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '18px',
                                    boxShadow: '0 4px 16px rgba(29,78,216,0.4)',
                                    flexShrink: 0,
                                }}>⚡</div>
                                <span style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 800,
                                    fontSize: '19px',
                                    letterSpacing: '-0.5px',
                                    color: '#fff',
                                }}>
                                    Digital<span style={{
                                        background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>GrowX</span>
                                </span>
                            </Link>

                            <p style={{
                                color: 'rgba(255,255,255,0.45)',
                                fontSize: '0.9rem',
                                lineHeight: 1.8,
                                maxWidth: '280px',
                                marginBottom: '2rem',
                            }}>
                                {footer.description}
                            </p>

                            {/* Contact info */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    color: 'rgba(255,255,255,0.55)',
                                    fontSize: '13.5px', textDecoration: 'none',
                                    transition: 'color 0.2s',
                                }}
                                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                                >
                                    <span style={{
                                        width: '28px', height: '28px',
                                        background: 'rgba(255,255,255,0.06)',
                                        borderRadius: '8px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '13px', flexShrink: 0,
                                    }}>📞</span>
                                    {companyInfo.phone}
                                </a>
                                <a href={`mailto:${companyInfo.email}`} style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    color: 'rgba(255,255,255,0.55)',
                                    fontSize: '13.5px', textDecoration: 'none',
                                    transition: 'color 0.2s',
                                }}
                                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                                >
                                    <span style={{
                                        width: '28px', height: '28px',
                                        background: 'rgba(255,255,255,0.06)',
                                        borderRadius: '8px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '13px', flexShrink: 0,
                                    }}>✉️</span>
                                    {companyInfo.email}
                                </a>
                                <div style={{
                                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                                    color: 'rgba(255,255,255,0.45)',
                                    fontSize: '12.5px',
                                }}>
                                    <span style={{
                                        width: '28px', height: '28px',
                                        background: 'rgba(255,255,255,0.06)',
                                        borderRadius: '8px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '13px', flexShrink: 0,
                                        marginTop: '2px',
                                    }}>📍</span>
                                    <address style={{ fontStyle: 'normal', lineHeight: 1.6 }}>
                                        <a
                                            href={companyInfo.googleMaps}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                                            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                                        >
                                            {companyInfo.addressShort}
                                        </a>
                                    </address>
                                </div>
                            </div>

                            {/* Social icons */}
                            <div style={{ display: 'flex', gap: '8px' }}>
                                {companyInfo.socials.facebook && (
                                    <SocialIcon href={companyInfo.socials.facebook} label="Facebook" char="f" />
                                )}
                                {companyInfo.socials.instagram && (
                                    <SocialIcon href={companyInfo.socials.instagram} label="Instagram" char="ig" />
                                )}
                                {companyInfo.socials.linkedin && (
                                    <SocialIcon href={companyInfo.socials.linkedin} label="LinkedIn" char="in" />
                                )}
                                <SocialIcon href={companyInfo.whatsapp} label="WhatsApp" char="wa" isExternal />
                            </div>
                        </div>

                        {/* ── Marketing Column ─────────────────────── */}
                        <div>
                            <FooterHeading>Marketing</FooterHeading>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {footer.marketingLinks.map(link => (
                                    <li key={link.label}>
                                        <FooterLink href={link.href}>{link.label}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ── Company Column ──────────────────────── */}
                        <div>
                            <FooterHeading>Company</FooterHeading>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                                {footer.quickLinks.map(link => (
                                    <li key={link.label}>
                                        <FooterLink href={link.href}>{link.label}</FooterLink>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Card */}
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(29,78,216,0.2), rgba(124,58,237,0.15))',
                                border: '1px solid rgba(59,130,246,0.2)',
                                borderRadius: '14px',
                                padding: '1.25rem',
                            }}>
                                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                                    Free Consultation
                                </div>
                                <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', lineHeight: 1.5 }}>
                                    30-min strategy session. No commitment needed.
                                </div>
                                <a href="/appointment" style={{
                                    display: 'block', textAlign: 'center',
                                    padding: '9px 16px',
                                    background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
                                    borderRadius: '8px',
                                    color: '#fff', fontSize: '12.5px', fontWeight: 700,
                                    textDecoration: 'none',
                                    transition: 'opacity 0.2s',
                                }}
                                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                                >
                                    Book Free Audit →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Bottom Bar ──────────────────────────────── */}
                    {/* CSS handles flex-direction + gap responsively via .footer-bottom-bar */}
                    <div className="footer-bottom-bar" style={{
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        paddingTop: '2rem',
                    }}>
                        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12.5px', margin: 0 }}>
                            © {currentYear} Digital GrowX. All rights reserved. · {companyInfo.addressShort}
                        </p>
                        <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
                            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12.5px', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                            >
                                Privacy Policy
                            </Link>
                            <Link href="/terms" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12.5px', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                            >
                                Terms of Service
                            </Link>
                            <Link href="/sitemap.xml" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12.5px', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                            >
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ─── Helper Components ─────────────────────────────────────────────── */

function FooterHeading({ children }: { children: React.ReactNode }) {
    return (
        <h4 style={{
            fontFamily: 'var(--font-display)',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1.25rem',
        }}>
            {children}
        </h4>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '13.5px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s, transform 0.2s',
            lineHeight: 1.4,
        }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                e.currentTarget.style.transform = 'translateX(0)';
            }}
        >
            {children}
        </Link>
    );
}

function FooterStaticItem({ children }: { children: React.ReactNode }) {
    return (
        <span style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '13.5px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s, transform 0.2s',
            lineHeight: 1.4,
            cursor: 'default',
        }}
            onMouseEnter={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                e.currentTarget.style.transform = 'translateX(0)';
            }}
        >
            {children}
        </span>
    );
}

function SocialIcon({ href, label, char, isExternal }: {
    href: string; label: string; char: string; isExternal?: boolean;
}) {
    if (!href) return null;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
                width: '36px', height: '36px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 700,
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'all 0.22s ease',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {char}
        </a>
    );
}