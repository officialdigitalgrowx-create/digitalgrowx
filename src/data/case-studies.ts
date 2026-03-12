export interface CaseStudy {
    id: number;
    slug: string;
    tag: string;
    tagColor: string;
    tagBg: string;
    company: string;
    headline: string;
    description: string;
    results: {
        metric: string;
        label: string;
    }[];
    service: string;
    duration: string;
    gradient: string;
    logo?: string;
    banner?: string;
    // Extended fields for detail view
    clientOverview?: string;
    challenges?: string[];
    strategy?: { title: string; points: string[] }[];
    conclusion?: string;
    website?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 1,
        slug: 'arke-hitech-machine',
        tag: 'Construction',
        tagColor: '#f97316',
        tagBg: '#fff3e8',
        company: 'Arke Hitech Machine',
        headline: '3× More B2B Leads — Construction Equipment Brand Dominates Google in 6 Months',
        description: 'Arke Hitech Machine was relying entirely on offline referrals. We rebuilt their digital engine with industrial SEO, Google Ads, and targeted content — turning their website into a qualified lead machine.',
        results: [
            { metric: '3×', label: 'Website Traffic Growth' },
            { metric: '2.5×', label: 'Qualified B2B Inquiries' },
            { metric: '40%', label: 'Improvement in Conversion Rate' },
        ],
        service: 'SEO + Google Ads + Content Marketing',
        duration: 'Since 2024',
        gradient: 'linear-gradient(135deg, #fff3e8, #ffe8d0)',
        logo: '/images/clients/Aarke Hitech.png',
        banner: '/images/clients/Aarke Hitech.png',
        clientOverview: 'Arke Hitech Machine is a leading construction equipment manufacturer based in Ahmedabad, Gujarat. They specialize in rope suspended platforms, bar bending machines, and concrete mixers — serving contractors and infrastructure companies across India.',
        challenges: [
            'Zero online visibility — not ranking on Google for any relevant keywords',
            'All leads came from offline references only',
            'No structured digital marketing strategy in place',
            'Heavy competition from established national brands',
            'Limited website inquiries despite quality products',
        ],
        strategy: [
            {
                title: 'SEO & Website Optimization',
                points: [
                    'Full website audit and technical SEO fixes',
                    'Keyword research for construction equipment buyers',
                    'On-page SEO for all product pages',
                    'Google Business Profile optimization for local SEO',
                ],
            },
            {
                title: 'Google Ads (Lead Generation)',
                points: [
                    'High-intent keyword targeting for machinery buyers',
                    'Search campaigns with location targeting across Gujarat & India',
                    'Conversion tracking and performance optimization',
                ],
            },
            {
                title: 'Content Marketing',
                points: [
                    'SEO-optimized product descriptions',
                    'Industry authority blog posts',
                    'Trust-building case content for B2B buyers',
                ],
            },
        ],
        conclusion: 'Arke Hitech Machine now receives consistent digital inquiries from contractors across India. Digital GrowX established them as a credible, discoverable brand in a traditionally offline-dominant industry.',
        website: 'https://arkehitechmachine.com',
    },
    {
        id: 2,
        slug: 'shubham-sky-track',
        tag: 'Real Estate',
        tagColor: '#0070ff',
        tagBg: '#e8f4ff',
        company: 'Shubham Sky Track',
        headline: '4× Qualified Leads & 50% More Site Visits — Real Estate Project Sells Faster',
        description: 'Shreenath Developers needed to break through Ahmedabad\'s crowded real estate market. We deployed high-converting landing pages, hyper-local Facebook & Google Ads, and retargeting funnels that brought serious homebuyers to the door.',
        results: [
            { metric: '4×', label: 'Quality Leads Generated' },
            { metric: '35%', label: 'Reduction in Cost Per Lead' },
            { metric: '50%', label: 'Increase in Site Visit Bookings' },
        ],
        service: 'Performance Marketing + Lead Generation',
        duration: 'Since 2024',
        gradient: 'linear-gradient(135deg, #e8f4ff, #d0e8ff)',
        logo: '/images/clients/Shubham Sky Track.png',
        banner: '/images/clients/Shubham Sky Track.png',
        clientOverview: 'Shubham Sky Track is a premium 3BHK residential and commercial shop project by Shreenath Developers, located in Nava Naroda, Ahmedabad. The RERA-registered project targets families, investors, and business owners looking for modern amenities and city connectivity.',
        challenges: [
            'Highly competitive Ahmedabad real estate market',
            'Low quality leads from generic property portals',
            'High cost per lead with minimal site visit conversions',
            'No dedicated digital presence for the project',
            'Urgency to accelerate the sales cycle',
        ],
        strategy: [
            {
                title: 'High-Converting Landing Page',
                points: [
                    'Dedicated mobile-first landing page for the project',
                    'Lead form optimization with EMI and subsidy details',
                    'Trust signals: RERA number, amenities, location map',
                ],
            },
            {
                title: 'Facebook & Instagram Ads',
                points: [
                    'Interest-based audience targeting (homebuyers & investors)',
                    'Creative ad designs showcasing project visuals',
                    'Retargeting campaigns to re-engage warm audiences',
                ],
            },
            {
                title: 'Google Search Campaign',
                points: [
                    '"3BHK in Nava Naroda" and similar high-intent keywords',
                    'Call-based lead ads for instant site visit bookings',
                    'Daily performance optimization and CRM integration',
                ],
            },
        ],
        conclusion: 'Digital GrowX helped Shubham Sky Track generate a consistent pipeline of qualified homebuyer leads, accelerating project bookings and establishing Shreenath Developers as a trusted name in Ahmedabad real estate.',
    },
    {
        id: 3,
        slug: 'lift-mech-industries',
        tag: 'Industrial B2B',
        tagColor: '#7c3aed',
        tagBg: '#f0e8ff',
        company: 'Lift Mech Industries',
        headline: '5× B2B Inquiries & Pan-India Reach — Industrial Brand Scales Beyond Gujarat',
        description: 'Lift Mech Industries was invisible online despite a strong product catalogue. We executed a full industrial SEO strategy, pan-India Google Ads, and B2B content marketing — generating 5× more serious inquiries within 8 months.',
        results: [
            { metric: '5×', label: 'Serious B2B Inquiries' },
            { metric: '60%', label: 'Increase in Website Engagement' },
            { metric: 'Pan-India', label: 'Reach Across Multiple States' },
        ],
        service: 'Industrial SEO + Google Ads + B2B Content',
        duration: 'Since 2024',
        gradient: 'linear-gradient(135deg, #f0e8ff, #e0d0ff)',
        logo: '/images/clients/Liftmech.png',
        banner: '/images/clients/Liftmech.png',
        clientOverview: 'Lift Mech Industries is a manufacturer and exporter of industrial lifting and material handling equipment based in Ahmedabad, Gujarat. Established since their founding, they specialize in industrial stackers, goods lifts, and hand pallet trucks — serving clients across India.',
        challenges: [
            'No Google ranking for any product or industry keywords',
            'Low volume of B2B online inquiries',
            'Weak digital brand presence against larger competitors',
            'Heavy competition from established national and international brands',
            'No structured content or SEO strategy',
        ],
        strategy: [
            {
                title: 'Industrial SEO Strategy',
                points: [
                    'High-intent industrial keyword research and mapping',
                    'Product page optimization with technical specifications',
                    'Backlink building from industry directories',
                    'Technical website performance improvements',
                ],
            },
            {
                title: 'Google Ads for Pan-India Reach',
                points: [
                    'Targeting industrial buyers by state and product category',
                    'Call-focused ad campaigns for direct inquiries',
                    'Budget optimization to maximize B2B lead volume',
                ],
            },
            {
                title: 'B2B Content Strategy',
                points: [
                    'Informative product specification and application pages',
                    'Industry blog content to build trust with procurement teams',
                    'Inquiry form improvements to increase conversions',
                ],
            },
        ],
        conclusion: 'Lift Mech Industries successfully expanded their market reach beyond Gujarat, receiving consistent high-quality inquiries from across India. Digital GrowX positioned them as a credible authority in the industrial lifting equipment space.',
        website: 'https://www.liftmech.in',
    },
    {
        id: 4,
        slug: 'jn-interior',
        tag: 'Luxury Interiors',
        tagColor: '#d97706',
        tagBg: '#fff8e8',
        company: 'J&N Interior',
        headline: '3× Instagram Engagement & 2× Premium Project Inquiries in 6 Months',
        description: 'J&N Interior needed to elevate their digital presence to match their on-ground luxury. We crafted a premium content strategy, Instagram growth system, and targeted lead campaigns to attract high-net-worth clients.',
        results: [
            { metric: '3×', label: 'Instagram Engagement Growth' },
            { metric: '2×', label: 'Premium Project Inquiries' },
            { metric: '↑ Higher', label: 'Inquiry-to-Project Conversion' },
        ],
        service: 'Brand Building + Social Media + Lead Generation',
        duration: 'Since 2024',
        gradient: 'linear-gradient(135deg, #fff8e8, #ffefd0)',
        logo: '/images/clients/J&N Interior.png',
        banner: '/images/clients/J&N Interior.png',
        clientOverview: 'J&N Interior specializes in luxury interior design, crafting bespoke living and commercial spaces with international expertise and quality craftsmanship. They serve high-net-worth residential and commercial clients who demand premium, timeless design.',
        challenges: [
            'Needed strong premium brand positioning to attract high-budget clients',
            'Low Instagram engagement despite a beautiful portfolio',
            'Limited online visibility for portfolio and completed projects',
            'Difficulty reaching high-income audiences through digital channels',
            'No structured lead generation system for luxury segment',
        ],
        strategy: [
            {
                title: 'Luxury Brand Positioning',
                points: [
                    'Premium website optimization with high-quality portfolio presentation',
                    'Strong visual storytelling that communicates exclusivity',
                    'Google Business Profile enhancement for local luxury searches',
                ],
            },
            {
                title: 'Social Media Growth Strategy',
                points: [
                    'Instagram content calendar with curated luxury visual content',
                    'Reel strategy showing design process and before/after transformations',
                    'Paid promotion targeting premium audience segments',
                ],
            },
            {
                title: 'Lead Generation Campaign',
                points: [
                    'Facebook & Instagram ads targeting high-income audiences',
                    'Retargeting warm audiences who engaged with portfolio content',
                    'Private consultation offers to capture serious inquiries',
                ],
            },
        ],
        conclusion: 'Digital GrowX successfully elevated J&N Interior\'s digital brand to match their real-world luxury positioning — attracting high-value clients and expanding their prestigious project portfolio.',
    },
    {
        id: 5,
        slug: 'yashvi-energy-solution',
        tag: 'Solar Energy',
        tagColor: '#16a34a',
        tagBg: '#e8f8ee',
        company: 'Yashvi Energy Solution',
        headline: '4× Solar Inquiries & Higher Conversion Rate — Solar Brand Built from Ground Up',
        description: 'Yashvi Energy Solution had no website and zero digital presence. We built their online foundation from scratch — SEO-friendly website, Google Ads for rooftop solar, WhatsApp lead nurturing and educational content — resulting in 4× more qualified inquiries.',
        results: [
            { metric: '4×', label: 'Increase in Solar Inquiries' },
            { metric: '↑ Better', label: 'Customer Education & Trust' },
            { metric: '↑ Higher', label: 'Residential & Commercial Bookings' },
        ],
        service: 'Website + SEO + Google Ads + Lead Nurturing',
        duration: 'Since 2024',
        gradient: 'linear-gradient(135deg, #e8f8ee, #d0f0dc)',
        logo: '/images/clients/Yashvi Solar Energy.png',
        banner: '/images/clients/Yashvi Solar Energy.png',
        clientOverview: 'Yashvi Energy Solution provides smart and sustainable solar energy solutions for residential and commercial clients. They help homes and businesses reduce electricity costs through high-quality rooftop solar installations with government subsidy assistance.',
        challenges: [
            'No website — zero digital presence to start with',
            'Limited local awareness about solar energy benefits',
            'High competition from established solar companies',
            'Low conversion rate from inquiries to actual installations',
            'No structured digital marketing system in place',
        ],
        strategy: [
            {
                title: 'Website & Online Foundation',
                points: [
                    'Built a fast, SEO-friendly website from scratch',
                    'Created landing pages with EMI options and subsidy information',
                    'Solar savings calculator and trust-building testimonial sections',
                ],
            },
            {
                title: 'Search Marketing (SEO + Google Ads)',
                points: [
                    'SEO for solar installation keywords in local area',
                    'Google Ads targeting rooftop solar leads with high intent',
                    'Location-specific campaigns for residential and commercial clients',
                ],
            },
            {
                title: 'Lead Nurturing System',
                points: [
                    'WhatsApp automation for instant lead follow-up',
                    'Email sequences educating leads about solar savings',
                    'Educational content about government subsidies and ROI',
                ],
            },
        ],
        conclusion: 'Digital GrowX helped Yashvi Energy Solution build their entire digital presence from zero, making them a trusted solar brand in their region with a consistent stream of qualified residential and commercial inquiries.',
    },
    {
        id: 6,
        slug: 'shree-hari-realty',
        tag: 'Real Estate',
        tagColor: '#0ea5e9',
        tagBg: '#e0f4ff',
        company: 'Shree Hari Realty',
        headline: 'Premium Real Estate Brand — Strong Lead Flow from Digital Channels',
        description: 'Shree Hari Realty wanted a stronger digital presence to match their on-ground reputation. We built an integrated performance marketing and brand system that now drives a steady flow of qualified property enquiries.',
        results: [
            { metric: '↑ Steady', label: 'Qualified Enquiry Pipeline' },
            { metric: '2×', label: 'Brand Visibility in Key Areas' },
            { metric: 'Lower', label: 'Cost Per Qualified Lead' },
        ],
        service: 'Brand Building + Performance Marketing + SEO',
        duration: 'Since 2024',
        gradient: 'linear-gradient(135deg, #e0f4ff, #c8eaff)',
        logo: '/images/clients/Shree Hari Realty Logo.png',
        banner: '/images/clients/Shree Hari Realty Logo.png',
        clientOverview: 'Shree Hari Realty is a growth-focused real estate company committed to delivering high-quality residential and commercial spaces with transparent processes and long-term value for buyers.',
        challenges: [
            'Needed a stronger online identity to back existing word-of-mouth trust',
            'High dependence on offline brokers and walk-ins',
            'Limited digital visibility in competitive local micro-markets',
            'No central system to capture and nurture online enquiries',
        ],
        strategy: [
            {
                title: 'Brand & Website Foundation',
                points: [
                    'Refined brand story and positioning for digital platforms',
                    'High-converting project and enquiry pages for key properties',
                    'Clear trust signals including highlights, testimonials and location advantages',
                ],
            },
            {
                title: 'Performance Lead Generation',
                points: [
                    'Meta and Google campaigns targeting homebuyers and investors in focus locations',
                    'Lead form optimisation for faster response and booking',
                    'Always-on remarketing to re-engage high-intent prospects',
                ],
            },
            {
                title: 'Search & Local Presence',
                points: [
                    'Local SEO to improve visibility for project and brand searches',
                    'Optimised Google Business Profile for enquiries and directions',
                    'Ongoing content and review-building to sustain rankings',
                ],
            },
        ],
        conclusion: 'With a stronger brand foundation and always-on performance campaigns, Shree Hari Realty now enjoys a consistent pipeline of serious property enquiries from digital channels.',
    },
    {
        id: 7,
        slug: 'school-admissions-growth-gujarat',
        tag: 'Social Media & Ads',
        tagColor: '#a78bfa',
        tagBg: '#f5f3ff',
        company: 'Sankalp International School',
        headline: '2× Increase in student admissions enquiries for a leading International School.',
        description: 'Sankalp International School needed to boost their admission numbers. We implemented a multi-channel digital strategy focused on parent intent, local SEO, and hyper-targeted advertising.',
        results: [
            { metric: '200%', label: 'Admissions Lead' },
            { metric: 'Optimised', label: 'Campaign Efficiency' },
            { metric: 'Top 3', label: 'Local Ranking' },
        ],
        service: 'Social Media + Performance Ads + Local SEO',
        duration: 'Since 2024',
        gradient: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
        logo: '/images/clients/Sankalp School.png',
        banner: '/images/clients/Sankalp School.png',
        clientOverview: 'Sankalp International School is a premier educational institution in Nikol, Ahmedabad, known for its focus on holistic development and modern curriculum. They aim to provide a nurturing environment for students to excel in academics and beyond.',
        challenges: [
            'Decreasing organic admission inquiries',
            'High competition from neighboring international schools',
            'Low visibility on local search for school admissions',
            'Ineffective social media presence for parent engagement',
        ],
        strategy: [
            {
                title: 'Performance Marketing',
                points: [
                    'Hyper-targeted Facebook & Instagram Ads for parents in Nikol/Ahmedabad',
                    'Google Search ads for "best schools in Nikol" keywords',
                    'Lead generation forms optimized for quick parent callback',
                ],
            },
            {
                title: 'Local SEO & Content',
                points: [
                    'Google Business Profile optimization for higher local rankings',
                    'Trust-building content showcasing campus facilities and student results',
                    'Positive review management from satisfied parents',
                ],
            },
        ],
        conclusion: 'Digital GrowX\'s targeted digital campaigns doubled the admission inquiries for Sankalp International School within the first season, significantly reducing their acquisition cost per student.',
    },
];
