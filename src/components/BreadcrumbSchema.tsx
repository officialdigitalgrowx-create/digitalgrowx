'use client';
import { usePathname } from 'next/navigation';

export function BreadcrumbSchema() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    const items = [
        { name: 'Home', url: 'https://www.digitalgrowx.com' },
        ...segments.map((segment, index) => ({
            name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
            url: `https://www.digitalgrowx.com/${segments.slice(0, index + 1).join('/')}`,
        })),
    ];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-400 container py-4">
                <ol className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && <span>/</span>}
                            {index === items.length - 1 ? (
                                <span className="text-gray-300 font-medium">{item.name}</span>
                            ) : (
                                <a href={item.url.replace('https://www.digitalgrowx.com', '') || '/'} className="hover:text-primary-300 transition-colors">
                                    {item.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
