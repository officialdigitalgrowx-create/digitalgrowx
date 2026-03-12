import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, type Service } from '@/data/services';
import type { Metadata } from 'next';
import ServicePageClient from './ServicePageClient';

export function generateStaticParams() {
    return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return { title: service.title, description: service.subheadline };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const relatedServicesData = (service.relatedServices || [])
        .map(rsSlug => services.find(s => s.slug === rsSlug))
        .filter((s): s is Service => s !== undefined);

    return <ServicePageClient service={service} relatedServices={relatedServicesData} />;
}
