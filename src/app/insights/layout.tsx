import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Growth Insights | Digital GrowX',
    description: 'Marketing intelligence, AI automation guides, and technical growth strategies for the modern enterprise.'
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
