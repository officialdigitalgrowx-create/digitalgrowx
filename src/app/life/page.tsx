'use client';
import Link from 'next/link';

const perks = [
    { icon: '', title: 'Remote-First Culture', desc: 'Work from anywhere in India. We judge output, not office hours.' },
    { icon: '', title: 'Monthly Learning Budget', desc: 'Every team member gets ₹5,000/month for courses, books, and tools.' },
    { icon: '', title: 'Accelerated Growth', desc: 'Learn more in 6 months here than you would in 3 years at a traditional agency.' },
    { icon: '', title: 'Performance Bonuses', desc: 'Get rewarded directly when clients win. No cap on bonuses.' },
    { icon: '', title: 'AI Tools Access', desc: 'Full access to ChatGPT, Gemini, Midjourney, and 20+ premium AI tools.' },
    { icon: '', title: 'Ownership Mindset', desc: 'We give you real responsibility from day one. No hand-holding.' },
];

const moments = [
    { emoji: '', label: 'Quarterly offsite retreats' },
    { emoji: '', label: 'Gaming & chill sessions' },
    { emoji: '', label: 'Team lunches & celebrations' },
    { emoji: '', label: 'Monthly knowledge-sharing talks' },
    { emoji: '', label: 'Mental wellness support' },
    { emoji: '', label: 'International client exposure' },
];

export default function LifePage() {
    return (
        <main className="life-main">
            <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Hero */}
                <section style={{ textAlign: 'center', paddingBottom: '5rem' }}>
                    <span className="pill">Life @ Digital GrowX</span>
                    <h1 style={{ marginTop: '1.25rem', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
                        We Work Hard.<br /><span className="text-gradient">We Win Harder.</span>
                    </h1>
                    <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '40rem', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
                        This isn&apos;t a place to collect a salary. It&apos;s a place to build a career, sharpen your skills, and be part of something genuinely exciting.
                    </p>
                </section>

                {/* Perks */}
                <section style={{ marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Why People Love Working Here</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.25rem' }}>
                        {perks.map((p) => (
                            <div key={p.title} className="glass-tile">
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{p.icon}</div>
                                <h3 style={{ fontWeight: 800, color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>{p.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.7 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Moments */}
                <section style={{ marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Moments That Matter</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
                        {moments.map((m) => (
                            <div key={m.label} className="glass-tile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.75rem' }}>{m.emoji}</span>
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.9rem' }}>{m.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section style={{ textAlign: 'center' }}>
                    <div className="glass-tile" style={{ maxWidth: '580px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>Sound Like Your Kind of Place?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', lineHeight: 1.7 }}>Check out our open roles and apply today.</p>
                        <Link href="/career" className="cta-btn">View Open Roles →</Link>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .life-main { min-height:100vh; background:linear-gradient(135deg,#080b14,#0c101e,#080d18); padding:8rem 0 6rem; position:relative; overflow:hidden; }
        .blob { position:absolute; border-radius:50%; filter:blur(110px); opacity:0.2; pointer-events:none; }
        .b1 { width:600px;height:600px;background:#ec4899;top:-150px;left:-150px; }
        .b2 { width:500px;height:500px;background:#7c3aed;bottom:0;right:-120px; }
        .b3 { width:400px;height:400px;background:#0ea5e9;top:45%;left:50%;opacity:0.12; }
        .pill { display:inline-block;padding:0.35rem 1.1rem;border-radius:9999px;font-size:0.68rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;background:rgba(236,72,153,0.18);color:#f9a8d4;border:1px solid rgba(236,72,153,0.38);backdrop-filter:blur(6px); }
        .glass-tile { background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:1.25rem;padding:1.75rem;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px); }
        .cta-btn { display:inline-block;padding:0.9rem 2.25rem;border-radius:9999px;background:linear-gradient(135deg,#ec4899,#7c3aed);color:#fff;font-weight:800;font-size:0.95rem;text-decoration:none;transition:transform 0.25s,box-shadow 0.25s; }
        .cta-btn:hover { transform:translateY(-3px);box-shadow:0 12px 32px rgba(236,72,153,0.4); }
      `}</style>
        </main>
    );
}
