import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { schemaLocalBusiness, schemaOrganization } from '@/lib/schema';

import { generateMetadata as getBaseMetadata } from '@/components/SEO';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

const baseMetadata = getBaseMetadata('home');

export const metadata: Metadata = {
    ...baseMetadata,
    title: {
        default: 'Digital GrowX | #1 Marketing Agency Ahmedabad',
        template: '%s | Digital GrowX'
    },
    metadataBase: new URL('https://www.digitalgrowx.com'),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="geo.region" content="IN-GJ" />
                <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
                <meta name="geo.position" content="23.0550;72.6369" />
                <meta name="ICBM" content="23.0550, 72.6369" />
                <meta name="revisit-after" content="7 days" />
            </head>
            <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
                <script
                    id="schema-local-business"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
                />
                <script
                    id="schema-organization"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
                />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
