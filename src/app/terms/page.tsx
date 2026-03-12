import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Service', description: 'Digital GrowX terms of service and usage agreement.' };

export default function TermsPage() {
    return (
        <div>
            <section style={{ background: 'var(--color-gray-900)', color: 'white', padding: '10rem 0 4rem' }}>
                <div className="container"><h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Terms of Service</h1><p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Last updated: February 2026</p></div>
            </section>
            <section className="section">
                <div className="container" style={{ maxWidth: '800px', fontSize: '1rem', lineHeight: 1.9 }}>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using the Digital GrowX website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>

                    <h2 style={{ marginTop: '2rem' }}>2. Services</h2>
                    <p>Digital GrowX provides digital marketing services including SEO, performance marketing, social media marketing, Google Ads, lead generation, brand awareness, and re-marketing campaigns. All services are subject to individual service agreements.</p>

                    <h2 style={{ marginTop: '2rem' }}>3. Intellectual Property</h2>
                    <p>All content on this website, including text, graphics, logos, and code, is the property of Digital GrowX and is protected by intellectual property laws. You may not reproduce or redistribute our content without written permission.</p>

                    <h2 style={{ marginTop: '2rem' }}>4. User Responsibilities</h2>
                    <p>You agree to provide accurate information when using our forms and to not use our website for any unlawful purpose.</p>

                    <h2 style={{ marginTop: '2rem' }}>5. Limitation of Liability</h2>
                    <p>Digital GrowX is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for services.</p>

                    <h2 style={{ marginTop: '2rem' }}>6. Governing Law</h2>
                    <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.</p>

                    <h2 style={{ marginTop: '2rem' }}>7. Changes to Terms</h2>
                    <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>

                    <h2 style={{ marginTop: '2rem' }}>8. Contact</h2>
                    <p>For questions about these terms, contact us at legal@digitalgrowx.com or +91 98765 43210.</p>
                </div>
            </section>
        </div>
    );
}
