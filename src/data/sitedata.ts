// ============================================================
//  DIGITAL GROWX — MASTER SITE CONTENT FILE
//  Real data merged from live website + new site structure.
//  Edit this single file to update all content on the website.
//  Every section is clearly labelled. Save → site updates.
// ============================================================


// ─────────────────────────────────────────────────────────────
//  SECTION 1 · COMPANY INFO
//  Used in: header, footer, contact page, schema markup
// ─────────────────────────────────────────────────────────────
export const companyInfo = {
    name: 'Digital GrowX',
    legalName: 'Digital GrowX',
    tagline: 'AI-First Digital Marketing Agency in Ahmedabad',
    description: 'Digital GrowX is a results-driven digital marketing agency in Ahmedabad specializing in SEO, Google Ads, Lead Generation, Social Media Marketing, and AI-powered growth strategies for businesses across India.',
    founded: '2023',
    location: 'Ahmedabad, Gujarat, India',

    // ── Contact Details (real from live site) ──
    address: 'Shop-205, 2nd Floor, Ananta Elysium, Hill Town Circle Road, to Bhakti Circle Road, nr. BAPS Swaminarayan Temple, New India Colony, Nikol, Ahmedabad, Gujarat 382350',
    addressShort: 'Nikol, Ahmedabad, Gujarat 382350',
    phone: '+91 90234 19101',
    phoneSales: '+91 99989 67187',
    email: 'info@digitalgrowx.com',
    whatsapp: 'https://wa.me/919023419101',
    googleMaps: 'https://www.google.com/maps/dir//Digital+GrowX,+Mango+Plus+Cinemas,+Shop-205,+2nd+Floor,+Ananta+Elysium,+Hill+Town+Circle+Road,+to,+Bhakti+Cir+Rd,+nr.+BAPS+Swaminarayan+Temple,+New+India+Colony,+Ahmedabad,+Gujarat+382350/@23.0395302,72.6742452,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x395e877e890ae5ad:0xc7f2351a28633981!2m2!1d72.6781232!2d23.0566891?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D',

    // ── Social Media Links ──
    socials: {
        facebook: 'https://www.facebook.com/official.digitalgrowx/',
        instagram: 'https://www.instagram.com/digital_grow_x/',
        linkedin: 'https://www.linkedin.com/company/digital-growx/',
        twitter: '',    // TODO: add Twitter/X URL
        youtube: '',    // TODO: add YouTube URL
    },

    // ── SEO / Schema Metadata ──
    schema: {
        type: 'LocalBusiness',
        priceRange: '₹₹',
        servesCuisine: null,
        areaServed: ['Ahmedabad', 'Surat', 'Gujarat', 'India'],
        keywords: [
            'digital marketing agency Ahmedabad',
            'SEO agency Ahmedabad',
            'AI automation solutions',
            'lead generation agency Ahmedabad',
            'Google Ads agency Ahmedabad',
            'social media marketing Gujarat',
            'CRM integration Ahmedabad',
            'web development agency Ahmedabad',
            'IT consulting Gujarat',
            'performance marketing Ahmedabad',
            'digital marketing agency Nikol',
        ],
    },
};


// ─────────────────────────────────────────────────────────────
//  SECTION 2 · SEO META TAGS
//  Used in: <head> of every page. Edit per-page below.
// ─────────────────────────────────────────────────────────────
export const pageMeta = {
    home: {
        title: 'Digital GrowX | #1 Marketing Agency in Ahmedabad',
        description: 'Digital GrowX is Ahmedabad\'s top digital marketing agency. We specialize in Lead Gen, SEO, Google Ads, Social Media Marketing, and AI-powered growth. 350+ clients. Book a free audit.',
        keywords: 'digital marketing agency Ahmedabad, SEO Ahmedabad, lead generation, Google Ads, social media marketing',
        ogImage: '/images/og-home.jpg',
    },
    about: {
        title: 'About Us | Digital GrowX — Ahmedabad\'s #1 Marketing Agency',
        description: 'Learn the story of Digital GrowX — providing high-impact digital marketing results. Transparent, results-driven, and 350+ clients strong. Based in Nikol, Ahmedabad.',
        keywords: 'about Digital GrowX, digital marketing agency Ahmedabad, growth strategies',
        ogImage: '/images/og-about.jpg',
    },
    services: {
        title: 'Our Services | Digital Marketing Services — Digital GrowX',
        description: 'Explore our full suite of digital marketing services: SEO, Google Ads, Lead Generation, Social Media Marketing, Performance Marketing, and Brand Awareness. Tailored for growth.',
        keywords: 'digital marketing services Ahmedabad, SEO services Gujarat, lead generation agency, Google Ads',
        ogImage: '/images/og-services.jpg',
    },
    clients: {
        title: 'Our Clients | 350+ Businesses Trust Digital GrowX — Ahmedabad',
        description: 'From real estate developers and schools to restaurants and manufacturers — 350+ businesses across Gujarat trust Digital GrowX to grow their brand and generate quality leads.',
        keywords: 'Digital GrowX clients, digital marketing clients Ahmedabad, Gujarat businesses',
        ogImage: '/images/og-clients.jpg',
    },
    contact: {
        title: 'Contact Us | Digital GrowX — Get a Free Marketing Consultation',
        description: 'Ready to grow? Contact Digital GrowX at +91 90234 19101 or visit us at Shop-205, Ananta Elysium, Nikol, Ahmedabad. Free consultation available.',
        keywords: 'contact Digital GrowX, digital marketing consultation Ahmedabad, free audit',
        ogImage: '/images/og-contact.jpg',
    },
};


// ─────────────────────────────────────────────────────────────
//  SECTION 3 · HOMEPAGE HERO
// ─────────────────────────────────────────────────────────────
export const heroContent = {
    badge: 'Ahmedabad\'s AI-First Digital Marketing Agency',
    headline: 'Grow Your Brand.\nAutomate Your Growth.\nDominate Your Market.',
    subheadline: 'Digital GrowX helps businesses across India scale through high-impact digital marketing strategies. From SEO and Google Ads to Lead Generation, Social Media Marketing, and AI-powered campaigns — we build the systems that drive your growth.',
    ctaPrimary: { label: 'Contact Us Now →', href: '/appointment' },
    ctaSecondary: { label: 'See Our Clients', href: '/our-clients' },

    // Proof points shown below the headline
    proofPoints: [
        '350+ Clients Served',
        'ROI-Focused Campaigns',
        'No Lock-in Contracts',
    ],
};


// ─────────────────────────────────────────────────────────────
//  SECTION 4 · STATS BAR  (below hero, builds trust fast)
// ─────────────────────────────────────────────────────────────
export const heroStats = [
    { value: '350+', label: 'Happy Clients' },
    { value: '9+', label: 'Industries Served' },
    { value: '25 Yrs', label: 'Combined Expertise' },
    { value: '100%', label: 'ROI-Focused' },
];

// Marquee ticker — real client logos from live site
export const clientLogos = [
    '/images/clients/Aarke Hitech.webp',
    '/images/clients/Ahmedabad Juniors.webp',
    '/images/clients/Atulya School.webp',
    '/images/clients/Ayodhya Bunglows.webp',
    '/images/clients/Be well.webp',
    '/images/clients/Chandni Fashion.webp',
    '/images/clients/Choclate Room.webp',
    '/images/clients/Core Physio.webp',
    '/images/clients/Delite Chemical.webp',
    '/images/clients/Dockwin International.webp',
    '/images/clients/E - Block.webp',
    '/images/clients/Eastwin Foundry.webp',
    '/images/clients/Gaj Falcon.webp',
    '/images/clients/Genx IAS.webp',
    '/images/clients/Gurukulam Classea.webp',
    '/images/clients/Infra Coaching.webp',
    '/images/clients/J&N Interior.webp',
    '/images/clients/Joyville Kids Pre School.webp',
    '/images/clients/KBC Kathwada.webp',
    '/images/clients/Karmanye Trust.webp',
    '/images/clients/Leela Pictures.webp',
    '/images/clients/Liftmech.webp',
    '/images/clients/M3 The Bridal Studio.webp',
    '/images/clients/Mahalaxmi Furniture.webp',
    '/images/clients/Mapple Valley.webp',
    '/images/clients/Marvel Print.webp',
    '/images/clients/Milas Design.webp',
    '/images/clients/N veer.webp',
    '/images/clients/PSP Educate India.webp',
    '/images/clients/Pratham Hospital.webp',
    '/images/clients/Royal Art.webp',
    '/images/clients/Sai Shakti.webp',
    '/images/clients/Sankalp School.webp',
    '/images/clients/Sheshine Jwels.webp',
    '/images/clients/Shree Hari Realty.webp',
    '/images/clients/Shreem Luxuria.webp',
    '/images/clients/Shubh Enterprise.webp',
    '/images/clients/Shubham Sky Track.webp',
    '/images/clients/Srishti Global.webp',
    '/images/clients/The Jewel House.webp',
    '/images/clients/Vivanta Interior.webp',
    '/images/clients/Women.webp',
    '/images/clients/Yashvi Solar Energy.webp',
];


// ─────────────────────────────────────────────────────────────
//  SECTION 5 · PROBLEM / SOLUTION  (homepage)
// ─────────────────────────────────────────────────────────────
export const problemSolutions = [
    {
        icon: '',
        problem: 'Spending on ads but getting low-quality enquiries?',
        solution: 'We run targeted campaigns that attract real buyers — not window shoppers.',
    },
    {
        icon: '',
        problem: 'Your competitors are ranking on Google, but you\'re invisible?',
        solution: 'Our proven SEO strategies put your business on page 1 — and keep it there.',
    },
    {
        icon: '',
        problem: 'No time to manage leads, follow-ups, and social media?',
        solution: 'We deploy AI-powered automation and CRM systems so your business runs 24/7 — even while you sleep.',
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 6 · WHY TRUST US / USPs
// ─────────────────────────────────────────────────────────────
export const whyTrustUs = [
    {
        icon: '',
        title: 'Specialized in Lead Generation',
        desc: 'We focus exclusively on lead generation, giving us a deep understanding of the challenges and opportunities unique to high-intent customer acquisition.',
    },
    {
        icon: '',
        title: 'Data-Driven, Proven Results',
        desc: 'Every campaign is optimized for maximum ROI. We track, test, and iterate — so your marketing budget always works harder.',
    },
    {
        icon: '',
        title: 'Innovative & Ahead of the Curve',
        desc: 'From AI chatbots to GEO optimization, we continuously adopt the latest technologies to keep your brand ahead of the competition.',
    },
    {
        icon: '',
        title: 'Client-Centric Partnership',
        desc: 'Your success is our success. We build long-term relationships built on transparency, trust, and mutual growth — not just monthly reports.',
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 7 · OUR GROWTH METHODOLOGY
// ─────────────────────────────────────────────────────────────
export const methodology = [
    {
        step: '01',
        icon: '',
        title: 'Discovery & Audit',
        desc: 'We start by understanding your business, auditing your current digital presence, and identifying exactly where leads and revenue are being lost.',
    },
    {
        step: '02',
        icon: '',
        title: 'Custom Strategy',
        desc: 'We build a bespoke marketing plan — the right channels, the right message, and the right budget allocation — tailored specifically to your goals.',
    },
    {
        step: '03',
        icon: '',
        title: 'Execution & Campaigns',
        desc: 'We launch and manage your campaigns with precision — SEO, Google Ads, social media, content — with real-time monitoring for maximum performance.',
    },
    {
        step: '04',
        icon: '',
        title: 'Optimize & Scale',
        desc: 'We continuously analyze results, double down on what works, and scale your growth systematically every single month.',
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 8 · SERVICES  (/services page + homepage cards)
// ─────────────────────────────────────────────────────────────
export const services = [
    {
        slug: 'seo',
        icon: '',
        title: 'SEO',
        shortDesc: 'Rank higher on Google and get found by customers who are already searching for what you offer.',
        fullDesc: 'Our SEO service covers full technical audits, on-page optimization, content strategy, and high-authority link building. We focus on keywords that drive real business — not just traffic. From startups to established enterprises in Gujarat, we\'ve helped businesses dominate their category on Google.',
        benefits: ['Higher organic rankings', 'More qualified traffic', 'Long-term sustainable growth', 'Competitor keyword analysis'],
        statBadge: 'Rank #1',
        cta: 'Get an SEO Audit',
    },
    {
        slug: 'aeo-gpt-ads',
        icon: '',
        title: 'GPT Ads & AI Optimization',
        shortDesc: 'Dominate the next era of search. Optimize your brand for ChatGPT, Claude, and Gemini citations.',
        fullDesc: 'The search landscape is shifting from keywords to conversations. We optimize your brand to be the primary citation in AI-generated answers, ensuring you win the first-mover advantage in GPT-driven advertising and LLM-based discovery.',
        benefits: ['Generative Engine Optimization (GEO)', 'AI Training Set Citations', 'Exclusive LLM Ad Formats', 'Brand Authority in AI Chats'],
        statBadge: 'AI-First',
        cta: 'Claim AI Authority',
    },
    {
        slug: 'local-seo',
        icon: '',
        title: 'Local SEO',
        shortDesc: 'Get discovered by customers near you. Dominate Google Maps and local search results in Ahmedabad and beyond.',
        fullDesc: 'Local SEO is essential for any business serving a specific city or region. We optimize your Google Business Profile, build local citations, manage reviews, and ensure you appear in the Local Pack for high-intent searches like "digital marketing agency near me" or "SEO agency Ahmedabad."',
        benefits: ['Google Maps ranking', 'Google Business Profile optimization', 'Local citation building', 'Review management'],
        statBadge: 'Local Leader',
        cta: 'Boost Local Visibility',
    },
    {
        slug: 'google-ads',
        icon: '',
        title: 'Google Ads',
        shortDesc: 'Get instant, targeted traffic from buyers actively searching for your services — with maximum ROI.',
        fullDesc: 'We design, launch, and manage Google Search, Display, and Shopping campaigns built around your conversion goals — not just clicks. Every rupee of your ad budget is tracked, optimized, and accountable.',
        benefits: ['Instant search visibility', 'Hyper-targeted audience', 'Full budget control', 'Transparent reporting'],
        statBadge: '10x ROAS',
        cta: 'Launch Google Ads',
    },
    {
        slug: 'social-media',
        icon: '',
        title: 'Social Media Marketing',
        shortDesc: 'Build a loyal community, increase brand awareness, and drive leads through powerful social media campaigns.',
        fullDesc: 'From Facebook and Instagram to LinkedIn, we create and manage content strategies, paid social campaigns, and community engagement that turns followers into customers. We handle everything — content creation, scheduling, ads, and analytics.',
        benefits: ['Brand awareness & reach', 'Paid social campaigns', 'Content creation & scheduling', 'Community engagement'],
        statBadge: 'Community Focus',
        cta: 'Grow Your Social Presence',
    },
    {
        slug: 'performance-marketing',
        icon: '',
        title: 'Performance Marketing',
        shortDesc: 'Every campaign tied to measurable outcomes — leads, sales, bookings. You pay for results.',
        fullDesc: 'Performance marketing means accountability at every step. We build complete funnels — from ad creative and landing pages to lead capture and follow-up automation — ensuring the highest possible conversion rate across Google, Meta, and display networks.',
        benefits: ['Full-funnel campaign management', 'Landing page optimization', 'A/B testing', 'Cost-per-lead focus'],
        statBadge: 'ROI Obsessed',
        cta: 'Start Performance Marketing',
    },
    {
        slug: 'lead-generation',
        icon: '',
        title: 'Lead Generation',
        shortDesc: 'Stop chasing clients. Build a system that brings qualified buyers to you — consistently, every month.',
        fullDesc: 'Lead generation is the core of everything we do at Digital GrowX. We combine SEO, paid ads, social media, content marketing, and WhatsApp automation to build a continuous pipeline of quality prospects who are ready to buy.',
        benefits: ['Consistent monthly leads', 'Lead qualification & scoring', 'Multi-channel approach', 'WhatsApp & CRM integration'],
        statBadge: 'Quality Leads',
        cta: 'Build My Lead Pipeline',
    },
    {
        slug: 'brand-awareness',
        icon: '',
        title: 'Brand Awareness',
        shortDesc: 'Establish your brand as the authority in your industry — online and offline.',
        fullDesc: 'Brand awareness campaigns build the trust and recognition needed to convert prospects into loyal clients. We use content marketing, PR, social media, and targeted display ads to make your brand unforgettable in your niche.',
        benefits: ['Authority positioning', 'Wider audience reach', 'Consistent brand messaging', 'Content marketing strategy'],
        statBadge: 'Apex Authority',
        cta: 'Elevate My Brand',
    },
    {
        slug: 're-marketing',
        icon: '',
        title: 'Re-Marketing',
        shortDesc: 'Re-engage visitors who showed interest but didn\'t convert — and turn them into paying clients.',
        fullDesc: 'Most visitors don\'t buy on their first visit. Our re-marketing campaigns keep your brand top-of-mind with warm audiences across Google Display, YouTube, and social platforms — dramatically improving conversion rates and reducing your cost per acquisition.',
        benefits: ['Recover lost leads', 'Lower cost per conversion', 'Custom audience segments', 'Cross-platform retargeting'],
        statBadge: '2x Conversion',
        cta: 'Set Up Remarketing',
    },
];



// ─────────────────────────────────────────────────────────────
//  SECTION 9 · GPT ADS SPOTLIGHT
// ─────────────────────────────────────────────────────────────
export const gptSpotlight = {
    tag: 'Market Leadership',
    headline: 'We Are Ready for GPT Ads. Are You?',
    body: 'The next era of search isn’t just links — it’s AI-generated answers. We optimize your brand to be the primary citation in ChatGPT, Claude, and Gemini searches, ensuring you win the first-mover advantage in GPT-driven advertising.',
    features: [
        { icon: '', title: 'GEO Experts', desc: 'Generative Engine Optimization built into every campaign' },
        { icon: '', title: 'AI Training Sets', desc: 'Citations within top-tier LLM datasets' },
        { icon: '', title: 'Early Access', desc: 'Exclusive beta access to new LLM ad formats' },
    ],
    cta: { label: 'Audit My GPT Presence', href: '/services' },
};


// ─────────────────────────────────────────────────────────────
//  SECTION 10 · AI AUTOMATION SHOWCASE  (homepage feature block)
// ─────────────────────────────────────────────────────────────
export const aiShowcase = {
    badge: 'AI-Powered Marketing',
    headline: 'Your Business, Running 24/7 on Autopilot',
    body: 'Manual follow-ups, missed leads, and slow response times cost businesses crores every year. Digital GrowX integrates AI-powered chatbots, WhatsApp automation, and smart lead scoring into your marketing — so you never miss an opportunity, day or night.',
    ctaLabel: 'See How It Works →',
    ctaHref: '/services',

    capabilities: [
        { icon: '', title: 'AI Chatbots', desc: 'Handle enquiries instantly, qualify leads 24/7 without any manual effort' },
        { icon: '', title: 'WhatsApp Automation', desc: 'Auto-send follow-ups, catalogues, and appointment confirmations via WhatsApp' },
        { icon: '', title: 'Lead Scoring', desc: 'AI ranks your leads by quality — so your team only calls serious buyers' },
    ],

    terminalLines: [
        { color: 'green', text: 'New lead captured from Google Ads' },
        { color: 'green', text: 'AI Score: 91/100 — High Intent Buyer' },
        { color: 'green', text: 'WhatsApp sent: "Hi Rajesh, thanks for your enquiry..."' },
        { color: 'green', text: 'CRM updated: Status → Qualified Lead' },
        { color: 'blue', text: 'Scheduling callback with sales team...' },
    ],
};


// ─────────────────────────────────────────────────────────────
//  SECTION 10 · CASE STUDIES (Success Stories)
// ─────────────────────────────────────────────────────────────
export const caseStudies = [
    {
        slug: 'real-estate-lead-gen-ahmedabad',
        tag: 'Lead Generation',
        headline: 'How we generated 150+ HNI leads for a Real Estate developer in 90 days.',
        company: 'Ayodhya Bungalows',
        results: [
            { metric: '150+', label: 'HNI Enquiries' },
            { metric: '₹12Cr', label: 'Sale Pipeline' },
            { metric: '14%', label: 'Conv. Rate' },
        ],
    },
    {
        slug: 'school-admissions-growth-gujarat',
        tag: 'Social Media & Ads',
        headline: '2x Increase in student admissions enquiries for a leading International School.',
        company: 'Sankalp International School',
        results: [
            { metric: '200%', label: 'Admissions Lead' },
            { metric: '₹140', label: 'Cost Per Lead' },
            { metric: 'Top 3', label: 'Local Ranking' },
        ],
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 11 · TESTIMONIALS
// ─────────────────────────────────────────────────────────────
export const testimonials = [
    {
        quote: 'Digital GrowX completely transformed how we generate leads. We used to depend on word-of-mouth and referrals. Now we get consistent, qualified enquiries every week through Google and social media. Best investment we\'ve made.',
        author: 'Hitesh Patel',
        role: 'Director',
        company: 'Ayodhya Bungalows, Ahmedabad',
    },
    {
        quote: 'The team is knowledgeable, transparent, and genuinely invested in our growth. Our admissions enquiries doubled within 4 months of working with Digital GrowX. They understand how to reach the right parents.',
        author: 'Dr. Bipinbhai Adroja',
        role: 'Head of Institution',
        company: 'Sankalp International School, Gujarat',
    },
    {
        quote: 'We tried other agencies before, but none delivered what Digital GrowX has. The SEO results are real, the leads are quality, and the reporting is crystal clear. Highly recommended for any Gujarat business.',
        author: 'Zeel Patel',
        role: 'Managing Director',
        company: 'Khodal Real Estate, Ahmedabad',
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 11 · OUR CLIENTS  (/our-clients page)
//  Real clients from live website — all 30 listed
// ─────────────────────────────────────────────────────────────
export const clients = [
    // Real Estate
    { name: 'Ayodhya Bungalows', industry: 'Real Estate', logo: '/images/clients/Ayodhya Bunglows.webp' },
    { name: 'Mapple Valley', industry: 'Real Estate', logo: '/images/clients/Mapple Valley.webp' },
    { name: 'Shubham Sky Track', industry: 'Real Estate', logo: '/images/clients/Shubham Sky Track.webp' },
    { name: 'Siddhivinayak Property Dealer', industry: 'Real Estate', logo: '/images/clients/Shree Hari Realty.webp' },
    { name: 'Shree Hari Realty', industry: 'Real Estate', logo: '/images/clients/Shree Hari Realty.webp' },
    { name: 'Gaj Falcon', industry: 'Real Estate', logo: '/images/clients/Gaj Falcon.webp' },
    { name: 'Shreem Luxuria', industry: 'Real Estate', logo: '/images/clients/Shreem Luxuria.webp' },
    { name: 'Kathwada Business Center', industry: 'Real Estate', logo: '/images/clients/KBC Kathwada.webp' },
    { name: 'Khodal Real Estate', industry: 'Real Estate', logo: '/images/clients/Shree Hari Realty.webp' },

    // Education
    { name: 'Sankalp International School', industry: 'Education', logo: '/images/clients/Sankalp School.webp' },
    { name: 'Gurukul Group Tuition', industry: 'Education', logo: '/images/clients/Gurukulam Classea.webp' },
    { name: 'Infra Coaching', industry: 'Education', logo: '/images/clients/Infra Coaching.webp' },
    { name: 'Atulya International School', industry: 'Education', logo: '/images/clients/Atulya School.webp' },
    { name: 'Ahmedabad Juniors', industry: 'Education', logo: '/images/clients/Ahmedabad Juniors.webp' },
    { name: 'Joyville Kids', industry: 'Education', logo: '/images/clients/Joyville Kids Pre School.webp' },
    { name: 'PSP Educate India', industry: 'Education', logo: '/images/clients/PSP Educate India.webp' },
    { name: 'GenX IAS', industry: 'Education', logo: '/images/clients/Genx IAS.webp' },
    { name: 'Gurukulum Classes', industry: 'Education', logo: '/images/clients/Gurukulam Classea.webp' },

    // Food & Hospitality
    { name: 'Oms Indian Cuisine', industry: 'Food & Hospitality', logo: '/images/clients/Oms Indian Cuisine.webp' },
    { name: 'Fish Bazaar', industry: 'Food & Hospitality', logo: '/images/clients/Fish Bazaar.webp' },
    { name: 'The Chocolate Room', industry: 'Food & Hospitality', logo: '/images/clients/Choclate Room.webp' },

    // Beauty & Wellness
    { name: 'Enhance Hair & Beauty Salon', industry: 'Beauty & Wellness', logo: '/images/clients/Enhance Hair Beauty Salon.webp' },
    { name: 'Scissor Point', industry: 'Beauty & Wellness', logo: '/images/clients/Scissor Point.webp' },
    { name: 'M3 The Makeup Studio', industry: 'Beauty & Wellness', logo: '/images/clients/M3 The Bridal Studio.webp' },
    { name: 'Chandni Fashion', industry: 'Beauty & Wellness', logo: '/images/clients/Chandni Fashion.webp' },
    { name: 'The Jewel House', industry: 'Beauty & Wellness', logo: '/images/clients/The Jewel House.webp' },
    { name: 'Sheshine Jwels', industry: 'Beauty & Wellness', logo: '/images/clients/Sheshine Jwels.webp' },
    { name: 'Womink', industry: 'Beauty & Wellness', logo: '/images/clients/Women.webp' },

    // Healthcare
    { name: 'Be Well Physiotherapy', industry: 'Healthcare', logo: '/images/clients/Be well.webp' },
    { name: 'Pratham ICU & Multispecialist Hospital', industry: 'Healthcare', logo: '/images/clients/Pratham Hospital.webp' },
    { name: 'Core Physio', industry: 'Healthcare', logo: '/images/clients/Core Physio.webp' },

    // Manufacturing
    { name: 'Aarke Hitech Machine', industry: 'Manufacturing', logo: '/images/clients/Aarke Hitech.webp' },
    { name: 'LiftMech Industries', industry: 'Manufacturing', logo: '/images/clients/Liftmech.webp' },
    { name: 'N Veer Industries', industry: 'Manufacturing', logo: '/images/clients/N veer.webp' },
    { name: 'Yashvi Solar Energy', industry: 'Manufacturing', logo: '/images/clients/Yashvi Solar Energy.webp' },
    { name: 'Shree Sai Shakti', industry: 'Manufacturing', logo: '/images/clients/Sai Shakti.webp' },
    { name: 'Eastwin Foundry', industry: 'Manufacturing', logo: '/images/clients/Eastwin Foundry.webp' },
    { name: 'Dockwin International', industry: 'Manufacturing', logo: '/images/clients/Dockwin International.webp' },
    { name: 'Delite Chemical', industry: 'Manufacturing', logo: '/images/clients/Delite Chemical.webp' },
    { name: 'Shubh Enterprise', industry: 'Manufacturing', logo: '/images/clients/Shubh Enterprise.webp' },

    // Media & Entertainment
    { name: 'Leela Pictures', industry: 'Media & Entertainment', logo: '/images/clients/Leela Pictures.webp' },
    { name: 'Namaskar News', industry: 'Media & Entertainment', logo: '/images/clients/Aarke Hitech.webp' }, // or whatever it was
    { name: 'Marvel Print', industry: 'Media & Entertainment', logo: '/images/clients/Marvel Print.webp' },

    // Events
    { name: 'Women Fun Fest', industry: 'Events', logo: '/images/clients/Women.webp' },
    { name: 'Karmanye Foundation', industry: 'Events', logo: '/images/clients/Karmanye Trust.webp' },

    // Interior & Furniture
    { name: 'Mahalaxmi Furniture', industry: 'Interior & Furniture', logo: '/images/clients/Mahalaxmi Furniture.webp' },
    { name: 'J&N Interior', industry: 'Interior & Furniture', logo: '/images/clients/J&N Interior.webp' },
    { name: 'Vivanta Interior', industry: 'Interior & Furniture', logo: '/images/clients/Vivanta Interior.webp' },
    { name: 'Milas Design', industry: 'Interior & Furniture', logo: '/images/clients/Milas Design.webp' },
    { name: 'Royal Art', industry: 'Interior & Furniture', logo: '/images/clients/Royal Art.webp' },
    { name: 'E Block', industry: 'Real Estate', logo: '/images/clients/E - Block.webp' },
    { name: 'Srishti Global', industry: 'Retail', logo: '/images/clients/Srishti Global.webp' },
];

// Grouped by industry — used for the industry filter on /our-clients
export const clientIndustries = [
    'All',
    'Real Estate',
    'Education',
    'Food & Hospitality',
    'Beauty & Wellness',
    'Healthcare',
    'Manufacturing',
    'Media & Entertainment',
    'Events',
    'Interior & Furniture',
];


// ─────────────────────────────────────────────────────────────
//  SECTION 12 · TEAM MEMBERS  (/about page)
//  Real team from live website
// ─────────────────────────────────────────────────────────────
export const teamMembers = [
    {
        name: 'Dr. Daxesh Patel',
        role: 'Director',
        experience: '(Doctorate in Business Strategy)',
        bio: 'With 25 years of hands-on experience across traditional and digital marketing, Daxesh brings an unparalleled depth of industry knowledge to Digital GrowX. He has helped hundreds of businesses in Gujarat craft winning growth strategies — from brand positioning to large-scale lead generation campaigns.',
        specialties: ['Business Strategy', 'Brand Development', 'B2B Marketing', 'Client Relations'],
        photo: '/images/team/daxesh.webp',
    },
    {
        name: 'Shailesh Panchal',
        role: 'Digital Marketing Expert',
        experience: '9+ Years in Digital Marketing',
        bio: 'Shailesh is the technical force behind Digital GrowX\'s digital campaigns. With over 9 years of expertise in SEO, Google Ads, social media, and performance marketing, he has managed campaigns for clients across real estate, education, healthcare, and manufacturing — consistently delivering measurable results.',
        specialties: ['SEO & SEM', 'Google Ads', 'Social Media Campaigns', 'Performance Marketing', 'Analytics'],
        photo: '/images/team/sailsh.webp',
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 13 · ABOUT PAGE CONTENT
// ─────────────────────────────────────────────────────────────
export const aboutContent = {
    story: {
        heading: 'Our Story',
        body: 'Every great agency has a story. Ours began right here in Nikol, Ahmedabad — where a passion for innovation and a drive to transform how businesses scale sparked the creation of Digital GrowX. With decades of combined experience in digital marketing and business strategy, our founders recognized a clear gap: businesses deserved a partner that could deliver real, measurable results through data-driven marketing. That realization became Digital GrowX — an agency built not just to run campaigns, but to engineer genuine growth engines for every client we work with.',
    },
    mission: {
        heading: 'Our Mission',
        body: 'To empower businesses across Gujarat and India with high-impact digital marketing strategies that drive real growth, enhance brand authority, and generate consistent leads. We are committed to delivering tailored, transparent, and measurable results — ensuring every client stands out in their market.',
    },
    teamIntro: {
        heading: 'The People Behind Digital GrowX',
        body: 'Our team is a blend of experienced marketers, creative strategists, and digital specialists who share one common goal: your success. We believe in honest collaboration — with each other, and with every client. When you work with Digital GrowX, you\'re not just getting a vendor. You\'re getting a dedicated team that cares about your growth as much as you do.',
    },
};


// ─────────────────────────────────────────────────────────────
//  SECTION 14 · COMPANY VALUES  (/about page)
// ─────────────────────────────────────────────────────────────
export const companyValues = [
    {
        icon: '',
        title: 'Integrity',
        description: 'We operate with complete honesty and transparency. Our clients always know exactly what we\'re doing, why we\'re doing it, and what results to expect.',
    },
    {
        icon: '',
        title: 'Excellence',
        description: 'We set a high bar for everything we deliver — from the strategy we design to the campaigns we execute. Good enough is never good enough.',
    },
    {
        icon: '',
        title: 'Innovation',
        description: 'We embrace the latest digital tools and AI technologies to keep our clients ahead of the market — not catching up to it.',
    },
    {
        icon: '',
        title: 'Collaboration',
        description: 'We work as a true extension of your team — listening, adapting, and aligning our strategies with your real-world business goals.',
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 15 · COMPANY STATS  (about + homepage)
// ─────────────────────────────────────────────────────────────
export const companyStats = [
    { value: '350+', label: 'Clients Served', icon: '', detail: 'Across 8+ industries in Gujarat & India' },
    { value: '25 Yrs', label: 'Combined Expertise', icon: '', detail: 'Across traditional and digital marketing' },
    { value: '9+', label: 'Industries Covered', icon: '', detail: 'Real estate, education, manufacturing & more' },
    { value: '100%', label: 'Transparent Reporting', icon: '', detail: 'No hidden fees, no vanity metrics' },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 16 · INDUSTRIES SERVED  (services / about page)
// ─────────────────────────────────────────────────────────────
export const industries = [
    { icon: '', name: 'Real Estate', desc: 'HNI lead generation, property campaigns, virtual tour funnels, and automated follow-ups for developers and agents.' },
    { icon: '', name: 'Education & Schools', desc: 'Student and parent acquisition campaigns, admissions funnels, and school brand building for institutions across Gujarat.' },
    { icon: '', name: 'Manufacturing & Export', desc: 'B2B lead generation, global digital presence, and technical SEO for manufacturers and industrial suppliers.' },
    { icon: '', name: 'Healthcare & Clinics', desc: 'Patient acquisition, local SEO, Google Maps optimization, and reputation management for clinics and wellness centres.' },
    { icon: '', name: 'Food & Hospitality', desc: 'Social media growth, Google presence, and local campaigns for restaurants, cafés, and hospitality businesses.' },
    { icon: '', name: 'Beauty & Wellness', desc: 'Appointment-driven campaigns, Instagram marketing, and local SEO for salons, spas, and beauty brands.' },
    { icon: '', name: 'Media & Entertainment', desc: 'Digital presence and visibility strategies for news outlets, film studios, and creative agencies.' },
    { icon: '', name: 'Events', desc: 'High-impact promotion and digital ticket sales for festivals, foundation events, and corporate meetups.' },
    { icon: '', name: 'Interior & Furniture', desc: 'Visual storytelling and catalog-driven lead generation for premium interior designers and furniture brands.' },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 17 · FREE AUDIT / CONTACT PAGE
// ─────────────────────────────────────────────────────────────
export const contactPage = {
    badge: 'Inquiry Hub',
    title: 'Let\'s Build Your',
    titleAccent: 'Scaling Engine.',
    subtitle: 'Ready to take your enterprise to the next level? Reach out for a specialized Marketing audit tailored to your business goals.',
    headline: 'Ready to Scale?',
    subheadline: 'Talk to our experts today. Whether you need high-ticket Lead Gen, advanced AI Automation, or a custom Web/App solution — we start with an honest strategy session.',
    formNote: 'No commitment. No spam. Just a genuine conversation about how we can help your business grow.',
    benefits: [
        'Free 30-minute consultation call',
        'Website & SEO audit',
        'Competitor analysis',
        'Custom growth recommendations',
        'Clear, transparent pricing',
    ],
    appointmentCta: {
        label: 'Contact Us',
        phone: '+91 90234 19101',
        whatsapp: 'https://wa.me/919023419101',
    },
};


// ─────────────────────────────────────────────────────────────
//  SECTION 18 · FAQ  (for SEO rich snippets)
//  Paste these on your homepage or services page for FAQ schema
// ─────────────────────────────────────────────────────────────
export const faqs = [
    {
        question: 'What services does Digital GrowX offer?',
        answer: 'Digital GrowX is a full-service digital marketing agency. Our services include SEO, Google Ads, Social Media Marketing, Performance Marketing, Lead Generation, Brand Awareness, and WhatsApp Automation for businesses across India.',
    },
    {
        question: 'How much does digital marketing cost in Ahmedabad?',
        answer: 'Digital marketing costs very based on your goals, industry, and the scope of services required. Digital GrowX offers flexible, transparent pricing with packages suited for startups, SMEs, and established businesses. Contact us for a custom quote.',
    },
    {
        question: 'How long does SEO take to show results?',
        answer: 'SEO typically takes 3 to 6 months to show measurable organic ranking improvements. However, local SEO and Google Business Profile optimization can show results in as little as 4 to 8 weeks. We provide monthly performance reports throughout.',
    },
    {
        question: 'Do you work with businesses outside Ahmedabad?',
        answer: 'Yes. While we are based in Nikol, Ahmedabad, we serve clients across Gujarat and throughout India. We have successfully delivered campaigns for businesses in multiple cities and industries.',
    },
    {
        question: 'What makes Digital GrowX different from other agencies?',
        answer: 'We specialize in lead generation with a data-driven, results-first approach. Our team combines 25+ years of marketing experience with the latest AI and digital tools. We are fully transparent with every client — no hidden fees, no vanity metrics, only real results.',
    },
    {
        question: 'How do I get started with Digital GrowX?',
        answer: 'Simply call us at +91 90234 19101, send a WhatsApp message, or fill in the contact form on our website. We\'ll set up a free consultation to understand your business and recommend the right strategy.',
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 19 · BLOG POSTS  (/blog page)
// ─────────────────────────────────────────────────────────────
export const blogPosts = [
    {
        slug: 'digital-marketing-for-real-estate-ahmedabad',
        title: 'Digital Marketing for Real Estate in Ahmedabad: A Complete Guide',
        excerpt: 'How Ahmedabad\'s real estate developers are using Google Ads, SEO, and WhatsApp automation to attract high-net-worth buyers and close deals faster.',
        category: 'Real Estate Marketing',
        date: 'Feb 14, 2026',
        readTime: '8 min read',
        author: 'Shailesh Panchal',
    },
    {
        slug: 'seo-trends-2026-gujarat-businesses',
        title: 'SEO Trends 2026: What Every Gujarat Business Needs to Know',
        excerpt: 'Google\'s algorithm is evolving faster than ever. Here are the proven SEO strategies that will dominate in 2026 — and how to future-proof your rankings.',
        category: 'SEO & Performance',
        date: 'Feb 7, 2026',
        readTime: '6 min read',
        author: 'Shailesh Panchal',
    },
    {
        slug: 'choosing-digital-marketing-agency-ahmedabad',
        title: 'How to Choose the Right Digital Marketing Agency in Ahmedabad',
        excerpt: 'Not all agencies are built the same. This guide shows you exactly what to look for — and what red flags to avoid — when hiring a digital marketing partner.',
        category: 'Business Growth',
        date: 'Feb 3, 2026',
        readTime: '10 min read',
        author: 'Daxesh Patel',
    },
    {
        slug: 'google-ads-for-small-businesses-gujarat',
        title: 'Google Ads for Small Businesses in Gujarat: A Step-by-Step Guide',
        excerpt: 'Stop burning money on untargeted ads. Learn the data-driven framework Gujarat SMEs use to run profitable Google Ads campaigns with any budget.',
        category: 'Google Ads',
        date: 'Jan 28, 2026',
        readTime: '7 min read',
        author: 'Shailesh Panchal',
    },
    {
        slug: 'whatsapp-marketing-for-local-business',
        title: 'WhatsApp Marketing for Local Businesses: The Complete Playbook',
        excerpt: 'How Ahmedabad businesses are using WhatsApp Business automation to respond to leads instantly, send follow-ups automatically, and close more deals.',
        category: 'Marketing Automation',
        date: 'Jan 22, 2026',
        readTime: '9 min read',
        author: 'Shailesh Panchal',
    },
];


// ─────────────────────────────────────────────────────────────
//  SECTION 20 · NAVIGATION  (header links)
// ─────────────────────────────────────────────────────────────
export const navigation = {
    links: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Our Clients', href: '/our-clients' },
    ],
    cta: { label: 'Contact Us', href: '/appointment' },
};


// ─────────────────────────────────────────────────────────────
//  SECTION 21 · FOOTER CONTENT
// ─────────────────────────────────────────────────────────────
export const footer = {
    tagline: 'Scaling Brands with Digital GrowX',
    description: 'Ahmedabad\'s trusted digital marketing partner. We help businesses generate high-quality leads, grow their online presence, and dominate their market with proven marketing strategies.',
    quickLinks: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Our Clients', href: '/our-clients' },
    ],
    marketingLinks: [
        { label: 'SEO & Search', href: '/services' },
        { label: 'Google Ads (PPC)', href: '/services' },
        { label: 'Social Media', href: '/services' },
        { label: 'Lead Generation', href: '/services' },
        { label: 'Performance Ads', href: '/services' },
    ],

    copyright: `© ${new Date().getFullYear()} Digital GrowX. All rights reserved. | Nikol, Ahmedabad, Gujarat`,
};


// ─────────────────────────────────────────────────────────────
//  SECTION 22 · STRUCTURED DATA (JSON-LD Schema for SEO)
//  Paste this inside a <script type="application/ld+json"> tag
//  in your site's <head> section for rich results on Google.
// ─────────────────────────────────────────────────────────────
export const jsonLdSchema = {
    localBusiness: {
        '@context': 'https://schema.org',
        '@type': 'MarketingAgency',
        name: 'Digital GrowX',
        description: 'Digital GrowX is Ahmedabad\'s leading digital marketing agency specializing in Lead Generation, SEO, Google Ads, Social Media Marketing, and Performance Marketing for businesses across India.',
        url: 'https://www.global.digitalgrowx.com',  // TODO: update with real domain
        logo: 'https://www.global.digitalgrowx.com/images/logo.png',
        image: 'https://www.global.digitalgrowx.com/images/og-home.jpg',
        telephone: '+919023419101',
        email: 'info@digitalgrowx.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Shop-205, 2nd Floor, Ananta Elysium, Hill Town Circle Road, to Bhakti Circle Road, nr. BAPS Swaminarayan Temple, New India Colony',
            addressLocality: 'Nikol, Ahmedabad',
            addressRegion: 'Gujarat',
            postalCode: '382350',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '23.0550',   // TODO: update with exact coordinates
            longitude: '72.6369',  // TODO: update with exact coordinates
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '10:00',
                closes: '19:00',
            },
        ],
        sameAs: [
            'https://www.facebook.com/official.digitalgrowx/',
            'https://www.instagram.com/digital_grow_x/',
            'https://www.linkedin.com/company/digital-growx/',
        ],
        areaServed: ['Ahmedabad', 'Gujarat', 'India'],
        serviceType: ['SEO', 'Local SEO', 'Google Ads', 'Social Media Marketing', 'Lead Generation', 'Performance Marketing', 'Brand Awareness', 'Remarketing'],
        numberOfEmployees: { '@type': 'QuantitativeValue', value: '5' },
        foundingDate: '2023',
    },
};
