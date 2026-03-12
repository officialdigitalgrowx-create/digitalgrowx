import { Metadata } from 'next';
import { pageMeta } from '@/data/sitedata';
import ServicesUI from './ServicesUI';

export const metadata: Metadata = {
    title: pageMeta.services.title,
    description: pageMeta.services.description,
};

export default function ServicesPage() {
    return <ServicesUI />;
}
