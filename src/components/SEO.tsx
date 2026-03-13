import { Metadata } from 'next';

type PageKey = 'home' | 'about' | 'services' | 'contact' | 'clients';

interface PageMetaData {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogImage: string;
}

const pageMeta: Record<PageKey, PageMetaData> = {
    home: {
        title: 'Digital GrowX | #1 Digital Marketing & Lead Generation Agency in Ahmedabad',
        description: 'Digital GrowX is Ahmedabad\'s top-rated digital marketing agency specializing in Lead Generation, SEO, Google Ads, and Performance Marketing.',
        keywords: 'digital marketing agency Ahmedabad, SEO Gujarat, lead generation',
        canonical: 'https://www.global.digitalgrowx.com',
        ogImage: '/images/og-home.jpg'
    },
    about: {
        title: 'About Digital GrowX | Leading Marketing Agency in Nikol, Ahmedabad',
        description: 'Learn about Digital GrowX, the most aggressive AI-first growth agency in India. Our mission is to make your brand dominate its market.',
        keywords: 'about digital growx, marketing agency ahmedabad, marketing team',
        canonical: 'https://www.global.digitalgrowx.com/about',
        ogImage: '/images/og-about.jpg'
    },
    services: {
        title: 'Digital Marketing Services Ahmedabad | SEO, Google Ads & Lead Gen',
        description: 'Explore our future-ready digital marketing services engineered to dominate search engines and AI platforms in Ahmedabad, Gujarat.',
        keywords: 'digital marketing services, seo services, lead generation agency',
        canonical: 'https://www.global.digitalgrowx.com/services',
        ogImage: '/images/og-services.jpg'
    },
    contact: {
        title: 'Contact Digital GrowX | Get Your Free AI Audit in Ahmedabad',
        description: 'Get in touch with Digital GrowX, Ahmedabad\'s elite marketing agency. Claim your free audit and start your success story today.',
        keywords: 'contact digital growx, marketing audit ahmedabad, hire agency',
        canonical: 'https://www.global.digitalgrowx.com/appointment',
        ogImage: '/images/og-contact.jpg'
    },
    clients: {
        title: 'Our Clients | Trusted by 350+ Businesses in Ahmedabad & Gujarat',
        description: 'See why 350+ businesses trust Digital GrowX for their digital growth. Our track record spans real estate, education, and global industries.',
        keywords: 'digital growx clients, portfolio, success stories',
        canonical: 'https://www.global.digitalgrowx.com/our-clients',
        ogImage: '/images/og-clients.jpg'
    }
};

export function generateMetadata(page: PageKey): Metadata {
    const meta = pageMeta[page];
    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: { canonical: meta.canonical },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: meta.canonical,
            images: [{ url: meta.ogImage, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: [meta.ogImage],
        },
    };
}
