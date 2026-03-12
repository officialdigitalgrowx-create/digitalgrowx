import { Metadata } from 'next';
import { pageMeta } from '@/data/sitedata';

export const metadata: Metadata = {
    title: pageMeta.about.title,
    description: pageMeta.about.description,
};

import AboutUI from './AboutUI';

export default function AboutPage() {
    return <AboutUI />;
}
