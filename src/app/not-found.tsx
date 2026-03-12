import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #001a3d 0%, #0a1628 100%)',
            color: 'white',
            textAlign: 'center',
            padding: '2rem',
        }}>
            <div>
                <div style={{
                    fontSize: 'clamp(6rem, 15vw, 12rem)',
                    fontWeight: 900,
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                }}>
                    404
                </div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>Page Not Found</h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '400px', margin: '0 auto 2rem' }}>
                    Looks like this page took a wrong turn. Let&apos;s get you back on track.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="btn btn-primary btn-lg">Back to Home</Link>
                    <Link href="/appointment" className="btn btn-ghost btn-lg">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}
