export const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MarketingAgency", "ProfessionalService"],
    "name": "Digital GrowX",
    "url": "https://www.global.digitalgrowx.com",
    "logo": "https://www.global.digitalgrowx.com/images/logo.png",
    "image": "https://www.global.digitalgrowx.com/images/og-home.jpg",
    "description": "Digital GrowX is Ahmedabad's top-rated digital marketing agency specializing in Lead Generation, SEO, Google Ads, and Performance Marketing.",
    "telephone": "+91 90234 19101",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop-205, 2nd Floor, Ananta Elysium, Hill Town Circle Road, Bhakti Circle To Mango Plus Cinemas Road, New India Colony",
        "addressLocality": "Nikol, Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382345",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.0550",
        "longitude": "72.6369"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
    },
    "sameAs": [
        "https://facebook.com/digitalgrowx",
        "https://instagram.com/digitalgrowx"
    ]
};

export const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital GrowX",
    "url": "https://www.global.digitalgrowx.com",
    "logo": "https://www.global.digitalgrowx.com/images/logo.png"
};

export const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What services does Digital GrowX offer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Digital GrowX offers a wide range of services including SEO, Lead Generation, Google Ads, and Performance Marketing tailored for businesses in Ahmedabad."
            }
        }
    ]
};

export const schemaReviews = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Digital GrowX"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
    },
    "author": {
        "@type": "Person",
        "name": "Client Name"
    }
};

export function schemaBreadcrumb(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

export const schemaServicesList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "SEO Services" },
        { "@type": "ListItem", "position": 2, "name": "Lead Generation" },
        { "@type": "ListItem", "position": 3, "name": "Google Ads" }
    ]
};
