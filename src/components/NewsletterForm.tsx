'use client';

export default function NewsletterForm() {
    return (
        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
            <input type="email" placeholder="your@email.com" className="form-input" style={{ flex: 1 }} />
            <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
    );
}
