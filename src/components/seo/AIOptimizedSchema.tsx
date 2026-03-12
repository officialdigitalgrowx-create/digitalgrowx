

export function ArticleSchemaAI({
    title,
    description,
    author,
    publishedDate,
    modifiedDate,
    image,
    content,
}: {
    title: string;
    description: string;
    author: string;
    publishedDate: string;
    modifiedDate?: string;
    image: string;
    content: string;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: {
            '@type': 'ImageObject',
            url: image,
        },
        author: {
            '@type': 'Person',
            name: author,
            url: 'https://www.digitalgrowx.com/about',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Digital GrowX',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.digitalgrowx.com/images/logo.png',
            },
        },
        datePublished: publishedDate,
        dateModified: modifiedDate || publishedDate,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': typeof window !== 'undefined' ? window.location.href : '',
        },
        about: description,
        articleBody: content,
        wordCount: content.split(' ').length,
        isAccessibleForFree: true,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
