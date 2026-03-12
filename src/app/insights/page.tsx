'use client';
import Link from 'next/link';
import { blogPosts } from '@/data/content';
import NewsletterForm from '@/components/NewsletterForm';

export default function InsightsPage() {
    return (
        <div>
            {/* Hero */}
            <section style={{
                background: 'linear-gradient(to bottom, #001a3d, #000814)',
                color: 'white',
                padding: '12rem 0 6rem',
                position: 'relative'
            }}>
                <div className="container text-center">
                    <span className="section-tag" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>The Knowledge Hub</span>
                    <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, margin: '1.5rem 0' }}>Growth <br /><span className="text-gradient">Insights</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                        Actionable marketing intelligence, AI automation guides, and technical growth strategies for the modern enterprise.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            <section className="section" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
                <div className="container">
                    <Link href={`/insights/${blogPosts[0].slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{
                            background: 'white',
                            borderRadius: '2.5rem',
                            overflow: 'hidden',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            boxShadow: 'var(--shadow-2xl)',
                            border: '1px solid var(--color-gray-100)'
                        }}>
                            <div style={{ background: 'var(--gradient-hero)', padding: '4rem', color: 'white' }}>
                                <span style={{ padding: '0.35rem 1rem', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '2rem', display: 'inline-block' }}>Featured Article</span>
                                <h2 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '1.5rem' }}>{blogPosts[0].title}</h2>
                                <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '2rem' }}>{blogPosts[0].excerpt}</p>
                                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>
                                    <span>By {blogPosts[0].author}</span>
                                    <span>{blogPosts[0].readTime}</span>
                                </div>
                            </div>
                            <div style={{ padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-gray-50)' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '1.5rem', margin: '0 auto 1.5rem', boxShadow: 'var(--shadow-lg)' }}>→</div>
                                    <span style={{ fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Read Full Insight</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Grid */}
            <section className="section" style={{ paddingBottom: '10rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {blogPosts.slice(1).map(post => {
                            const categoryColors: any = {
                                'AI Automation': '#4f46e5',
                                'SEO & Performance': '#0ea5e9',
                                'Performance Marketing': '#f43f5e',
                                'Brand Strategy': '#8b5cf6'
                            };
                            const catColor = categoryColors[post.category] || 'var(--color-primary)';

                            return (
                                <Link key={post.slug} href={`/insights/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="card-hover" style={{
                                        padding: '0',
                                        borderRadius: '2rem',
                                        overflow: 'hidden',
                                        background: 'white',
                                        border: '1px solid var(--color-gray-200)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <div style={{ height: '10px', background: catColor }} />
                                        <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: catColor, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>{post.category}</span>
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: 'var(--color-gray-900)' }}>{post.title}</h3>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-500)', lineHeight: 1.6, marginBottom: '2rem' }}>{post.excerpt}</p>
                                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--color-gray-400)' }}>
                                                <span>{post.date}</span>
                                                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Read More &rarr;</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section style={{ padding: '8rem 0', background: '#000814', color: 'white' }}>
                <div className="container">
                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '5rem 4rem',
                        borderRadius: '3rem',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>The <span className="text-gradient">Growth</span> Signal</h2>
                        <p style={{ maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1.15rem', opacity: 0.6 }}>Join 5,000+ executives receiving high-signal marketing intelligence every Tuesday.</p>
                        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <NewsletterForm />
                        </div>
                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.4 }}>Zero spam. Unsubscribe at any time.</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .card-hover {
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .card-hover:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-2xl);
                    border-color: var(--color-primary) !important;
                }
            `}</style>
        </div>
    );
}
