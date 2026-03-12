import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Digital GrowX',
    description: 'Digital GrowX privacy policy — how we collect, use, and protect your personal data. Compliant with Meta Ads, Google Ads, GDPR and CCPA policies.'
};

export default function PrivacyPage() {
    return (
        <div style={{ minHeight: '100vh', background: '#080b14', color: '#fff' }}>

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #0c0f1e, #12152a)', padding: '9rem 0 4rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="container" style={{ maxWidth: '860px' }}>
                    <span style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'rgba(124,58,237,0.18)', color: '#c4b5fd', border: '1px solid rgba(124,58,237,0.35)', marginBottom: '1.25rem' }}>Legal</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '0.75rem' }}>Privacy Policy</h1>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem' }}>Last Updated: March 2026</p>
                </div>
            </section>

            {/* Content */}
            <section style={{ padding: '4rem 0 6rem' }}>
                <div className="container" style={{ maxWidth: '860px', fontSize: '1rem', lineHeight: 1.9 }}>

                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: 1.85 }}>
                        This Privacy Policy explains how <strong style={{ color: '#fff' }}>Digital GrowX</strong> collects, uses, shares, and protects your information when you interact with our website or services. By using our website, you agree to the terms of this policy.
                    </p>

                    {/* Section template */}
                    {[
                        {
                            num: '01',
                            title: 'Information We Collect',
                            intro: 'We May Collect Personal Details When You:',
                            items: ['Fill Out a Form', 'Contact Us', 'Request Information', 'Make a Purchase', 'Subscribe to Newsletters']
                        },
                        {
                            num: '02',
                            title: 'Use of Cookies & Tracking Technologies',
                            intro: 'Our Website Uses Cookies and Third-Party Tracking Tools, Including:',
                            items: ['Meta Pixel', 'Google Analytics', 'Google Ads Conversion Tracking', 'Google Tag Manager']
                        },
                        {
                            num: '03',
                            title: 'How We Use Your Information',
                            intro: 'We Use Personal and Behavioral Data to:',
                            items: [
                                'Provide and Improve our Services',
                                'Respond to Your Inquiries',
                                'Process Your Requests',
                                'Send Updates, Newsletters, or Offers (only if you opt-in)',
                                'Optimize Our Website Performance',
                                'Run Remarketing and Retargeting Ads',
                                'Improve Ad Relevance and Campaign Performance'
                            ]
                        },
                        {
                            num: '04',
                            title: 'Remarketing & Advertising Policy',
                            intro: 'We Use Third-Party Tools Such As:',
                            items: ['Meta (Facebook) Custom Audiences', 'Google Ads Remarketing', 'Google Display Network (GDN)', 'YouTube Ads Remarketing']
                        },
                        {
                            num: '05',
                            title: 'Information Sharing',
                            intro: 'We Do NOT Sell or Rent Your Personal Information. We May Share Your Information Only with:',
                            items: [
                                'Trusted Service Providers',
                                'Advertising Partners (Meta, Google, etc.)',
                                'Analytics Partners',
                                'Cloud Hosting Providers',
                                'Legal Authorities (If Required)'
                            ],
                            note: 'All Partners Follow Strict Confidentiality and Data Protection Standards.'
                        },
                        {
                            num: '06',
                            title: 'Your Rights',
                            intro: 'You Have Full Control Over Your Personal Data. You Can Request to:',
                            items: [
                                'Access Your Data',
                                'Update Your Information',
                                'Delete Your Data',
                                'Opt-out of Marketing Communication',
                                'Opt-out of Personalized Ads'
                            ]
                        },
                        {
                            num: '07',
                            title: 'Data Security',
                            intro: 'We Implement Modern Security Measures to Protect Your Data From:',
                            items: ['Unauthorized Access', 'Data Loss', 'Misuse', 'Alteration'],
                            note: 'Despite Our Efforts, no Online System is 100% Secure.'
                        },
                        {
                            num: '08',
                            title: 'Data Retention',
                            intro: 'We Retain Your Data Only For as Long as Necessary to:',
                            items: ['Provide Services', 'Fulfill Legal Obligations', 'Improve Marketing Performance'],
                            note: 'You May Request Deletion at Any Time.'
                        },
                        {
                            num: '09',
                            title: 'Compliance',
                            intro: 'This Privacy Policy is Fully Aligned with:',
                            items: ['Meta Ads Policies', 'Google Ads Policies', 'Google Analytics Data Protection Terms', 'GDPR (if applicable)', 'CCPA (if applicable)']
                        },
                    ].map((section) => (
                        <div key={section.num} style={{ marginBottom: '2.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', padding: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#a78bfa', background: 'rgba(124,58,237,0.15)', padding: '0.25rem 0.7rem', borderRadius: '6px', letterSpacing: '0.08em', flexShrink: 0 }}>{section.num}</span>
                                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.3 }}>{section.title}</h2>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1rem', fontSize: '0.95rem' }}>{section.intro}</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {section.items.map((item) => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem' }}>
                                        <span style={{ color: '#7c3aed', fontWeight: 900, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {section.note && (
                                <p style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(124,58,237,0.1)', borderLeft: '3px solid #7c3aed', borderRadius: '0 6px 6px 0', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', margin: '1rem 0 0' }}>{section.note}</p>
                            )}
                        </div>
                    ))}

                    {/* Opt-Out Section */}
                    <div style={{ marginBottom: '2.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#a78bfa', background: 'rgba(124,58,237,0.15)', padding: '0.25rem 0.7rem', borderRadius: '6px', letterSpacing: '0.08em', flexShrink: 0 }}>10</span>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.3 }}>Opt-Out Options (Required by Google & Meta)</h2>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>You Can Opt Out of Interest-Based Ads Here:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem', fontWeight: 600 }}>Google:</span>
                                <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', fontSize: '0.9rem', textDecoration: 'underline', wordBreak: 'break-all' }}>https://adssettings.google.com/</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.93rem', fontWeight: 600 }}>Meta (Facebook):</span>
                                <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', fontSize: '0.9rem', textDecoration: 'underline', wordBreak: 'break-all' }}>https://www.facebook.com/help/568137493302217</a>
                            </div>
                        </div>
                    </div>

                    {/* Changes notice */}
                    <div style={{ marginBottom: '2.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#a78bfa', background: 'rgba(124,58,237,0.15)', padding: '0.25rem 0.7rem', borderRadius: '6px', letterSpacing: '0.08em', flexShrink: 0 }}>11</span>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.3 }}>Changes to This Policy</h2>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.93rem' }}>We May Update this Policy From Time to Time. The Updated Version will be Posted with a Revised &quot;Last Updated&quot; Date.</p>
                    </div>

                    {/* Contact Section */}
                    <div style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '1rem', padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.25rem' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#a78bfa', background: 'rgba(124,58,237,0.15)', padding: '0.25rem 0.7rem', borderRadius: '6px', letterSpacing: '0.08em', flexShrink: 0 }}>12</span>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.3 }}>Contact Us</h2>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>If You Have Any Questions or Requests Related to Your Privacy, You May Contact Us At:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '0.9rem', minWidth: '80px' }}>📧 Email:</span>
                                <a href="mailto:info@digitalgrowx.com" style={{ color: '#818cf8', fontSize: '0.93rem', textDecoration: 'underline' }}>info@digitalgrowx.com</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '0.9rem', minWidth: '80px' }}>📞 Phone:</span>
                                <a href="tel:+919023419101" style={{ color: '#818cf8', fontSize: '0.93rem', textDecoration: 'underline' }}>+91 90234 19101</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '0.9rem', minWidth: '80px' }}>💬 WhatsApp:</span>
                                <a href="https://wa.me/919023419101" target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', fontSize: '0.93rem', textDecoration: 'underline' }}>Chat on WhatsApp</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '0.9rem', minWidth: '80px' }}>📍 Address:</span>
                                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.93rem', lineHeight: 1.6 }}>205, Ananta Elysium, Hill Town Circle Road, Bhakti Circle to Mango Plus Cinemas Road, Nikol, Ahmedabad, Gujarat 382345.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
