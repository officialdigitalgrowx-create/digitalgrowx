'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import {
  navigation,
  services as siteServices,
  industries as siteIndustries,
  companyInfo
} from '@/data/sitedata';


const servicesList = siteServices.map(s => ({
  label: s.title,
  href: `/services/${s.slug}`,
  icon: s.icon,
  desc: s.shortDesc
}));

const marketingServices = servicesList.slice(0, 5);
const solutionServices = servicesList.slice(5);


const industriesLinks = siteIndustries.map(i => ({
  label: i.name,
  href: '/industries',
  icon: i.icon,
  desc: i.desc
}));

const companyLinks = [
  { label: 'About Us', href: '/about', icon: '', desc: 'Our story, mission & values' },
  { label: 'Our Work', href: '/work', icon: '', desc: 'See our latest projects' },
  { label: 'Why Choose Us', href: '/why-choose-us', icon: '', desc: 'What makes us different' },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openDropdown = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(id);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
  };
  const keepDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const isOpen = (id: string) => activeDropdown === id;

  const navTextColor = scrolled ? '#0f172a' : '#ffffff';
  const navHoverBg = scrolled ? 'rgba(15,23,42,0.07)' : 'rgba(255,255,255,0.14)';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 28px rgba(0,0,0,0.09)' : 'none',
      }}>
        <nav className="header-main container">

          {/* ── Logo ─── */}
          <Link href="/" onClick={() => setMobileOpen(false)} style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            textDecoration: 'none', flexShrink: 0,
          }}>
            <span style={{ fontSize: '22px', lineHeight: 1 }}>⚡</span>
            <span style={{
              fontWeight: 800, fontSize: '18px', letterSpacing: '-0.4px',
              transition: 'color 0.35s ease',
              color: navTextColor,
            }}>
              <span style={{ color: '#f97316' }}>Digital</span>GrowX
            </span>
          </Link>

          {/* ── Desktop Nav ─── */}
          <div className="desktop-nav" style={{
            display: 'flex', alignItems: 'center', gap: '2px', height: '100%',
          }}>
            {/* ... rest of desktop nav ... */}
            <ul style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '100%', listStyle: 'none', margin: 0, padding: 0 }}>
              {navigation.links.map(link => {
                if (link.label === 'Services') {
                  return (
                    <li key={link.href}>
                      <DropdownWrapper id="services" openDropdown={openDropdown} closeDropdown={closeDropdown}>
                        <NavItemClickable
                          label="Services"
                          hasArrow
                          isActive={isOpen('services')}
                          navHoverBg={navHoverBg}
                          navTextColor={navTextColor}
                          onClick={() => router.push('/services')}
                        />
                        <Dropdown visible={isOpen('services')} onMouseEnter={keepDropdown} onMouseLeave={closeDropdown} width={500} alignLeft>
                          <div style={{ padding: '16px 18px 10px 18px' }}>
                            <SectionHeading>Marketing</SectionHeading>
                            {marketingServices.map(s => (
                              <DropdownItem key={s.href} href={s.href} icon={s.icon} label={s.label} desc={s.desc.slice(0, 45) + '...'} onClick={() => setActiveDropdown(null)} compact />
                            ))}
                            <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
                              <SectionHeading>More Services</SectionHeading>
                              {solutionServices.map(s => (
                                <DropdownItem key={s.href} href={s.href} icon={s.icon} label={s.label} desc={s.desc.slice(0, 45) + '...'} onClick={() => setActiveDropdown(null)} compact />
                              ))}
                            </div>
                          </div>
                          <div style={{ padding: '8px 14px 12px' }}>
                            <Link href="/free-audit" onClick={() => setActiveDropdown(null)} className="audit-cta-banner" style={{ padding: '10px 14px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '16px' }}>📋</span>
                                <span style={{ fontWeight: 700, fontSize: '12px', color: '#fff' }}>Free Audit Report</span>
                              </div>
                              <span style={{ color: '#f97316', fontWeight: 700, fontSize: '12px' }}>Claim →</span>
                            </Link>
                          </div>
                        </Dropdown>
                      </DropdownWrapper>
                    </li>
                  );
                }

                if (link.label === 'About Us') {
                  return (
                    <li key={link.href}>
                      <DropdownWrapper id="company" openDropdown={openDropdown} closeDropdown={closeDropdown}>
                        <NavItem label="Company" hasArrow isActive={isOpen('company')} navHoverBg={navHoverBg} navTextColor={navTextColor} />
                        <Dropdown visible={isOpen('company')} onMouseEnter={keepDropdown} onMouseLeave={closeDropdown} width={300}>
                          <div style={{ padding: '12px 10px' }}>
                            {companyLinks.map(l => (
                              <DropdownItem key={l.href} href={l.href} icon={l.icon} label={l.label} desc={l.desc} onClick={() => setActiveDropdown(null)} />
                            ))}
                          </div>
                        </Dropdown>
                      </DropdownWrapper>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <NavLink href={link.href} navHoverBg={navHoverBg} navTextColor={navTextColor}>
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}

              <li>
                <Link
                  href="/industries"
                  style={{
                    display: 'flex', alignItems: 'center',
                    height: '40px', padding: '0 14px', borderRadius: '99px',
                    fontSize: '14px', fontWeight: 600, color: navTextColor,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Industries
                </Link>
              </li>
            </ul>

            <Link href={navigation.cta.href} className="lets-connect-btn" style={{ marginLeft: '10px' }}>
              {navigation.cta.label}
            </Link>
          </div>

          {/* ── Hamburger ─── */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px',
              color: navTextColor, transition: 'color 0.35s ease',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              }
            </svg>
          </button>
        </nav>

        {/* ── Mobile Menu ─── */}
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: '#fff', overflowY: 'auto',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
          padding: '84px 24px 48px', zIndex: 999,
          // Ensure all content is visible and accessible
          height: '100vh',
          WebkitOverflowScrolling: 'touch',
        }}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#0f172a',
              fontSize: '24px',
              zIndex: 1000,
              width: '40px', height: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '8px',
              transition: 'background 0.2s ease',
            }}
            aria-label="Close menu"
          >
            ×
          </button>
          <MobileLink href="/industries" icon="" label="Industries" onClick={() => setMobileOpen(false)} />

          <MobileAccordion label="Services" isOpen={mobileAccordion === 'services'} onToggle={() => setMobileAccordion(mobileAccordion === 'services' ? null : 'services')}>
            <p style={{ fontSize: '10.5px', fontWeight: 800, color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', margin: '8px 0 4px 14px' }}>Marketing</p>
            {marketingServices.map(s => <MobileLink key={s.href} href={s.href} icon={s.icon} label={s.label} onClick={() => setMobileOpen(false)} />)}
            <p style={{ fontSize: '10.5px', fontWeight: 800, color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', margin: '12px 0 4px 14px' }}>Solutions</p>
            {solutionServices.map(s => <MobileLink key={s.href} href={s.href} icon={s.icon} label={s.label} onClick={() => setMobileOpen(false)} />)}
          </MobileAccordion>

          <MobileTopLink href="/industries" onClick={() => setMobileOpen(false)}>Industries</MobileTopLink>

          <Link href={navigation.cta.href} onClick={() => setMobileOpen(false)} style={{
            display: 'block', margin: '20px 0 10px', padding: '15px', borderRadius: '12px',
            background: 'linear-gradient(135deg,#f97316,#ea580c)', color: '#fff',
            fontWeight: 700, fontSize: '15px', textAlign: 'center', textDecoration: 'none',
            boxShadow: '0 6px 20px rgba(249,115,22,0.28)',
          }}>
            {navigation.cta.label}
          </Link>
          <Link href="/free-audit" onClick={() => setMobileOpen(false)} style={{
            display: 'block', padding: '15px', borderRadius: '12px',
            background: '#0f172a', color: '#fff',
            fontWeight: 700, fontSize: '15px', textAlign: 'center', textDecoration: 'none',
          }}>
            📋 Claim Free Audit →
          </Link>
        </div>
      </header>

      <style>{`
        .desktop-nav { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }

        .lets-connect-btn {
          padding: 9px 22px;
          border-radius: 99px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: transform 0.22s cubic-bezier(0.165,0.84,0.44,1), box-shadow 0.22s ease;
          display: inline-flex; align-items: center;
        }
        .lets-connect-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 24px rgba(249,115,22,0.42);
        }

        .audit-cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
          border-radius: 12px;
          padding: 13px 18px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .audit-cta-banner:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(30,58,138,0.38);
        }
      `}</style>
    </>
  );
}

/* ─── Sub-components ────────────────────────────────────────────────── */

function DropdownWrapper({
  id, openDropdown, closeDropdown, children,
}: {
  id: string;
  openDropdown: (id: string) => void;
  closeDropdown: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
      onMouseEnter={() => openDropdown(id)}
      onMouseLeave={closeDropdown}
    >
      {children}
    </div>
  );
}

function NavItem({
  label, hasArrow, isActive, navHoverBg, navTextColor,
}: {
  label: string; hasArrow?: boolean; isActive?: boolean; navHoverBg: string; navTextColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  const active = isActive || hovered;
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active ? navHoverBg : 'transparent',
        border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '4px',
        padding: '0 14px', borderRadius: '99px',
        fontSize: '14px', fontWeight: 600,
        color: navTextColor,
        height: '40px', whiteSpace: 'nowrap',
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'background 0.22s ease, color 0.35s ease, transform 0.22s ease',
      }}
    >
      {label}
      {hasArrow && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.28s ease', opacity: 0.75 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      )}
    </button>
  );
}

// Same as NavItem but fires onClick on click (used for Services: click→page, hover→dropdown)
function NavItemClickable({
  label, hasArrow, isActive, navHoverBg, navTextColor, onClick,
}: {
  label: string; hasArrow?: boolean; isActive?: boolean; navHoverBg: string; navTextColor: string; onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const active = isActive || hovered;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active ? navHoverBg : 'transparent',
        border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '4px',
        padding: '0 14px', borderRadius: '99px',
        fontSize: '14px', fontWeight: 600,
        color: navTextColor,
        height: '40px', whiteSpace: 'nowrap',
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'background 0.22s ease, color 0.35s ease, transform 0.22s ease',
      }}
    >
      {label}
      {hasArrow && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.28s ease', opacity: 0.75 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      )}
    </button>
  );
}

function NavLink({
  href, children, navHoverBg, navTextColor,
}: {
  href: string; children: React.ReactNode; navHoverBg: string; navTextColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center',
        height: '40px', padding: '0 14px', borderRadius: '99px',
        fontSize: '14px', fontWeight: 600, color: navTextColor,
        textDecoration: 'none',
        background: hovered ? navHoverBg : 'transparent',
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'background 0.22s ease, color 0.35s ease, transform 0.22s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  visible, children, onMouseEnter, onMouseLeave, width, alignLeft,
}: {
  visible: boolean; children: React.ReactNode; onMouseEnter: () => void; onMouseLeave: () => void;
  width?: number; alignLeft?: boolean;
}) {
  const baseTransform = alignLeft ? '' : 'translateX(-50%)';
  const hiddenY = 'translateY(-10px)';
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: alignLeft ? '0' : '50%',
        width: `${width ?? 280}px`,
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 24px 80px rgba(0,0,0,0.14), 0 4px 20px rgba(0,0,0,0.07)',
        border: '1px solid #f1f5f9',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible
          ? `${baseTransform} translateY(0)`
          : `${baseTransform} ${hiddenY}`,
        pointerEvents: visible ? 'all' : 'none',
        transition: 'opacity 0.28s cubic-bezier(0.165,0.84,0.44,1), transform 0.28s cubic-bezier(0.165,0.84,0.44,1)',
        zIndex: 100,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '10.5px', fontWeight: 800, color: '#94a3b8',
      letterSpacing: '1.2px', textTransform: 'uppercase', margin: '0 0 8px 6px',
    }}>
      {children}
    </p>
  );
}

function DropdownItem({
  href, icon, label, desc, onClick, compact,
}: {
  href: string; icon: string; label: string; desc: string; onClick: () => void; compact?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href} onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: '11px',
        padding: compact ? '7px 10px' : '10px 12px',
        textDecoration: 'none',
        background: hovered ? '#f8fafc' : 'transparent',
        borderRadius: '10px',
        transform: hovered ? 'translateX(3px)' : 'none',
        transition: 'all 0.18s ease',
        margin: '1px 0',
      }}
    >
      <span style={{ fontSize: compact ? '16px' : '18px', flexShrink: 0, marginTop: '2px' }}>{icon}</span>
      <div>
        <div style={{
          fontSize: compact ? '13px' : '13.5px', fontWeight: 600,
          color: hovered ? '#f97316' : '#0f172a',
          transition: 'color 0.18s ease',
        }}>{label}</div>
        <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '1px', lineHeight: 1.4 }}>{desc}</div>
      </div>
    </Link>
  );
}

function MobileAccordion({ label, isOpen, onToggle, children }: {
  label: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <div style={{ borderBottom: '1px solid #f1f5f9' }}>
      <button onClick={onToggle} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '17px 6px', background: 'none', border: 'none', cursor: 'pointer',
        fontSize: '15.5px', fontWeight: 600, color: '#0f172a',
      }}>
        {label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.28s ease' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div style={{ maxHeight: isOpen ? '3000px' : '0', overflow: 'hidden', transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)' }}>
        <div style={{ padding: '0 6px 14px' }}>{children}</div>
      </div>
    </div>
  );
}

function MobileLink({ href, icon, label, onClick }: { href: string; icon: string; label: string; onClick: () => void; }) {
  return (
    <Link href={href} onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: '11px',
      padding: '11px 14px', borderRadius: '10px', textDecoration: 'none',
      fontSize: '14px', fontWeight: 500, color: '#1e293b', margin: '2px 0',
    }}>
      <span style={{ fontSize: '17px' }}>{icon}</span>
      {label}
    </Link>
  );
}

function MobileTopLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode; }) {
  return (
    <Link href={href} onClick={onClick} style={{
      display: 'block', padding: '17px 6px',
      borderBottom: '1px solid #f1f5f9',
      fontSize: '15.5px', fontWeight: 600, color: '#0f172a', textDecoration: 'none',
    }}>
      {children}
    </Link>
  );
}