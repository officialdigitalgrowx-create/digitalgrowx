export type IconName = 'Search' | 'Globe' | 'Share2' | 'BarChart' | 'Users' | 'Zap' | 'Target' | 'RefreshCw';

export interface Service {
    id: string;
    slug: string;
    title: string;
    description: string;
    iconName: IconName;
    headline: string;
    subheadline: string;
    statBadge: string;
    deliverables: string[];
    relatedServices: string[];
    benefits: {
        title: string;
        description: string;
        icon: string;
    }[];
    features: string[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const services: Service[] = [
    {
        id: 'seo',
        slug: 'seo',
        title: 'Search Engine Optimization (SEO)',
        description: 'Dominate search results with AI-driven strategies that go beyond keywords to capture intent.',
        iconName: 'Search',
        headline: 'We Build Search Engines That Work For You.',
        subheadline: 'Gujarat\'s most advanced AI-powered SEO framework designed to capture 10x more high-intent traffic.',
        statBadge: '10x Average Traffic Growth',
        deliverables: ['Technical SEO Audit', 'AI Content Strategy', 'Authority Backlinks', 'Weekly Performance Reports'],
        relatedServices: ['local-seo', 'performance-marketing', 'aeo-gpt-ads'],
        benefits: [
            { title: 'Global Authority', description: 'Be recognized as the leader in your industry across borders.', icon: '' },
            { title: 'Compound Growth', description: 'SEO value builds over time, creating a massive long-term ROI.', icon: '' },
            { title: 'Intent Capture', description: 'Reach customers at the exact moment they are looking to buy.', icon: '' }
        ],
        features: ['Technical SEO Audit', 'AI Content Optimization', 'Authority Building', 'Conversion Rate Optimization'],
        process: [
            { step: 1, title: 'Deep Audit', description: 'Analyzing 200+ ranking factors using AI-driven crawling.' },
            { step: 2, title: 'Strategy', description: 'Mapping keywords to revenue intent and building a semantic moat.' },
            { step: 3, title: 'Execution', description: 'High-velocity content updates and technical fixes.' },
            { step: 4, title: 'Scale', description: 'Expanding authority into new verticals and long-tail themes.' }
        ],
        faqs: [
            { question: 'How long until I see results?', answer: 'Typical significant impact is seen within 90 days, though some wins happen faster.' },
            { question: 'Do you guarantee rankings?', answer: 'We guarantee strict adherence to Google guidelines and proven, data-backed methodologies.' }
        ]
    },
    {
        id: 'aeo-gpt-ads',
        slug: 'aeo-gpt-ads',
        title: 'GPT Ads & AI Optimization',
        description: 'While others are still catching up, we are already delivering GPT Ads. Optimize your brand for ChatGPT, Gemini, and AI search engines today.',
        iconName: 'RefreshCw',
        headline: 'Be The #1 Recommended Answer. Everywhere.',
        subheadline: 'Generative Engine Optimization (GEO) is the new SEO. We ensure AI models cite your brand as the definitive authority.',
        statBadge: 'India\'s First GPT Ads Ready Agency',
        deliverables: ['AI Citation Map', 'GEO Schema Implementation', 'LLM Entity Report', 'Voice Search Optimization'],
        relatedServices: ['seo', 'lead-generation', 'performance-marketing'],
        benefits: [
            { title: 'AI Dominance', description: 'Capture the answer box in ChatGPT and Gemini before your competition.', icon: '' },
            { title: 'Future-Proof ROI', description: 'Be the first to capitalize on the shift from search to synthesis.', icon: '' },
            { title: 'Authority Bias', description: 'LLMs naturally recommend brands with the strongest technical citation moat.', icon: '' }
        ],
        features: ['Generative Engine Optimization (GEO)', 'AI Citation Building', 'Voice Search Readiness', 'AI Ad Inventory Access'],
        process: [
            { step: 1, title: 'Entity Alignment', description: 'Establishing your brand as a verified entity in Knowledge Graphs.' },
            { step: 2, title: 'Data Synthesis', description: 'Structuring web data for instant ingest by LLMs and Perplexity.' },
            { step: 3, title: 'Citation', description: 'Building high-authority references AI models use for verification.' },
            { step: 4, title: 'GPT Ad Launch', description: 'Deploying targeted ads within AI chat interfaces as they roll out.' }
        ],
        faqs: [
            { question: 'What is GEO?', answer: 'Generative Engine Optimization is the process of ensuring your brand is the preferred answer when users query AI models.' }
        ]
    },
    {
        id: 'local-seo',
        slug: 'local-seo',
        title: 'Local SEO',
        description: 'Ensure your business is the first choice for customers in your vicinity with hyper-local optimization.',
        iconName: 'Globe',
        headline: 'Own Your Neighborhood. Dominate Local Search.',
        subheadline: 'Hyper-local optimization that puts your business at the top of Google Maps and local discovery.',
        statBadge: 'High Ticket Lead Quality Focus',
        deliverables: ['GMB Optimization', 'Local Citation Sync', 'Review Automation', 'Local Content Map'],
        relatedServices: ['seo', 'performance-marketing', 'lead-generation'],
        benefits: [
            { title: 'Map Dominance', description: 'Appear in the top 3 of Google Maps for all relevant searches.', icon: '' },
            { title: 'Trust Builder', description: 'Automated review management builds instant credibility.', icon: '' },
            { title: 'Store Footfall', description: 'Drive physical traffic to your retail or office locations.', icon: '' }
        ],
        features: ['GMB Optimization', 'Local Citation Building', 'Review Management', 'Hyper-local Content'],
        process: [
            { step: 1, title: 'Audit', description: 'Review current local visibility and N-A-P consistency.' },
            { step: 2, title: 'Optimize', description: 'Enhance Google Business Profile for maximum conversion.' },
            { step: 3, title: 'Build', description: 'Generate high-authority local citations and i-directory links.' },
            { step: 4, title: 'Review', description: 'Automated review generation and management system.' }
        ],
        faqs: [
            { question: 'How is this different from regular SEO?', answer: 'Local SEO focuses on "near me" intent, map packs, and physical proximity signals.' }
        ]
    },
    {
        id: 'social-media',
        slug: 'social-media',
        title: 'Social Media Marketing',
        description: 'Build a cult-like following with data-backed storytelling and viral-ready content formats.',
        iconName: 'Share2',
        headline: 'Turn Followers Into Raving Fans.',
        subheadline: 'Sophisticated social strategies that combine high-end creative with precision targeting.',
        statBadge: '98% Engagement Boost',
        deliverables: ['Social Strategy', 'High-End Creatives', 'Community Playbook', 'Influencer Map'],
        relatedServices: ['brand-awareness', 'performance-marketing', 'lead-generation'],
        benefits: [
            { title: 'Viral Reach', description: 'Content engineered to be shared across decision-maker networks.', icon: '' },
            { title: 'Brand Affinity', description: 'Build a deep emotional connection with your target audience.', icon: '' },
            { title: 'Market Authority', description: 'Become the "thought leader" that competitors fear.', icon: '' }
        ],
        features: ['Strategy Development', 'Content Creation', 'Community Management', 'Influencer Collaboration'],
        process: [
            { step: 1, title: 'Persona', description: 'Defining audience archetypes and psychological triggers.' },
            { step: 2, title: 'Create', description: 'Production of high-fidelity visual and video assets.' },
            { step: 3, title: 'Engage', description: 'Active community management and conversation starting.' },
            { step: 4, title: 'Amplify', description: 'Viral mechanics and paid booster integration.' }
        ],
        faqs: [
            { question: 'Which platforms do you cover?', answer: 'We specialize in LinkedIn, Instagram, Facebook, and YouTube.' }
        ]
    },
    {
        id: 'performance-marketing',
        slug: 'performance-marketing',
        title: 'Performance Marketing',
        description: 'Scale revenue aggressively with ROAS-focused campaigns across all major digital channels.',
        iconName: 'BarChart',
        headline: 'Precision Scaling. Guaranteed Results.',
        subheadline: 'Multi-channel performance campaigns engineered for 3x+ ROI and high-ticket customer acquisition.',
        statBadge: '3x-10x ROAS Typical',
        deliverables: ['Campaign Setup', 'Ad Creatives', 'Conversion Landers', 'ROAS Dashboards'],
        relatedServices: ['google-ads', 're-marketing', 'lead-generation'],
        benefits: [
            { title: 'Instant Scale', description: 'Turn on the growth tap and see leads within 48 hours.', icon: '' },
            { title: 'Full ROI Tracking', description: 'Know exactly which rupee brought back which client.', icon: '' },
            { title: 'Infinite Loop', description: 'Re-invest winning ad spend into higher volume automatically.', icon: '' }
        ],
        features: ['Multi-channel Strategy', 'Creative Testing', 'Conversion Optimization', 'Attribution Modeling'],
        process: [
            { step: 1, title: 'Setup', description: 'Pixel perfect tracking and attribution modeling.' },
            { step: 2, title: 'Launch', description: 'Initial campaign deployment across best-performing channels.' },
            { step: 3, title: 'Optimize', description: 'Continuous bid adjustment and creative A/B testing.' },
            { step: 4, title: 'Scale', description: 'Aggressively expanding winning ad sets and audiences.' }
        ],
        faqs: [
            { question: 'What is your minimum ad spend?', answer: 'We typically work with budgets starting from ₹1 Lakh/month for meaningful results.' }
        ]
    },
    {
        id: 'lead-generation',
        slug: 'lead-generation',
        title: 'Lead Generation',
        description: 'Fill your pipeline with high-intent, qualified leads ready to convert.',
        iconName: 'Users',
        headline: 'Leads Are Good. SQLs Are Better.',
        subheadline: 'Filling your calendar with high-ticket sales appointments using automated qualification funnels.',
        statBadge: 'High Ticket Intent Focus',
        deliverables: ['Funnel Architecture', 'Lead Magnets', 'Auto-nurture Emails', 'CRM Integration'],
        relatedServices: ['aeo-gpt-ads', 'performance-marketing', 're-marketing'],
        benefits: [
            { title: 'Quality Over Quantity', description: 'AI-filtered leads that actually want to buy from you.', icon: '' },
            { title: 'Automated Nurture', description: 'Follow up 7+ times automatically without lifting a finger.', icon: '' },
            { title: 'Predictable Pipe', description: 'Know how many sales meetings you will have next month.', icon: '' }
        ],
        features: ['Funnel Design', 'Lead Magnets', 'Qualification Workflows', 'CRM Integration'],
        process: [
            { step: 1, title: 'Target', description: 'Identify ideal customer profile and pain points.' },
            { step: 2, title: 'Attract', description: 'Deploy data-driven lead magnets to capture attention.' },
            { step: 3, title: 'Capture', description: 'High-converting forms with automated qualification.' },
            { step: 4, title: 'Nurture', description: 'Smart follow-ups using AI-driven email and SMS.' }
        ],
        faqs: [
            { question: 'How do you qualify leads?', answer: 'We use behavioral scoring, enrichment data, and interactive qualifying forms.' }
        ]
    },
    {
        id: 'brand-awareness',
        slug: 'brand-awareness',
        title: 'Brand Awareness',
        description: 'Make your brand unforgettable. We craft narratives that resonate and linger in the minds of your audience.',
        iconName: 'Zap',
        headline: 'Command Authority. Settle For Nothing Less.',
        subheadline: 'Crafting premium brand identities and narratives that make competitors irrelevant.',
        statBadge: 'Premium Market Positioning',
        deliverables: ['Brand Guidelines', 'Brand Voice Map', 'Visual Assets', 'Naming Strategy'],
        relatedServices: ['social-media', 'seo', 'lead-generation'],
        benefits: [
            { title: 'Unmatched Presence', description: 'Look 10x larger than your actual size to prospects.', icon: '' },
            { title: 'Price Elasticity', description: 'Charge premium rates because your brand is perceived as elite.', icon: '' },
            { title: 'Talent Magnet', description: 'Attract the best employees who want to work for a winner.', icon: '' }
        ],
        features: ['Brand Identity', 'Narrative Strategy', 'Visual Language', 'Positioning'],
        process: [
            { step: 1, title: 'Discover', description: 'Uncovering the deepest brand DNA and market gap.' },
            { step: 2, title: 'Define', description: 'Establishing a unique visual language and positioning.' },
            { step: 3, title: 'Story', description: 'Crafting the core narrative that connects emotionally.' },
            { step: 4, title: 'Launch', description: 'High-impact go-to-market rollout and PR execution.' }
        ],
        faqs: [
            { question: 'Is this just a logo design?', answer: 'Absolutely not. This is a comprehensive strategic positioning overhaul.' }
        ]
    },
    {
        id: 'google-ads',
        slug: 'google-ads',
        title: 'Google Ads',
        description: 'Capture high-intent traffic at the exact moment of search with precision-engineered PPC campaigns.',
        iconName: 'Target',
        headline: 'Profitability, Not Just Clicks.',
        subheadline: 'Algorithmic CPC management that extracts the highest quality traffic at the lowest possible cost.',
        statBadge: 'Search Intent Mastery',
        deliverables: ['Search Campaign Map', 'Display Creatives', 'Shopping Feeds', 'YouTube Ad Scripts'],
        relatedServices: ['performance-marketing', 're-marketing', 'lead-generation'],
        benefits: [
            { title: 'Day 1 Traffic', description: 'Start getting qualified visits within hours of launch.', icon: '' },
            { title: 'Data Goldmine', description: 'Learn exactly what your market is searching for.', icon: '' },
            { title: 'Search Dominance', description: 'Push competitors out of the top fold for key terms.', icon: '' }
        ],
        features: ['Search Ads', 'Display Network', 'Shopping Campaigns', 'YouTube Ads'],
        process: [
            { step: 1, title: 'Research', description: 'Deep keyword and competitor financial analysis.' },
            { step: 2, title: 'Structure', description: 'Advanced account architecture to maximize Quality Score.' },
            { step: 3, title: 'Bid', description: 'AI-driven algorithmic bid and budget management.' },
            { step: 4, title: 'Refine', description: 'Continuous negative keyword mapping and landing page tests.' }
        ],
        faqs: [
            { question: 'How do you handle click fraud?', answer: 'We implement advanced real-time fraud detection and prevention systems.' }
        ]
    },
    {
        id: 'ai-automation',
        slug: 'ai-automation',
        title: 'AI Automation / AI Agent',
        description: 'Replace entire workflows with intelligent agents that work 24/7 without human intervention.',
        iconName: 'Zap',
        headline: 'Your Business, Automated.',
        subheadline: 'Custom AI agents that handle support, lead nurturing, reporting, and operations — autonomously.',
        statBadge: '80%+ Tasks Automated',
        deliverables: ['Custom AI Agent Build', 'Workflow Automation Map', 'CRM Integration', 'Performance Dashboard'],
        relatedServices: ['lead-generation', 'seo', 'performance-marketing'],
        benefits: [
            { title: 'Always On', description: 'AI agents work 24/7/365 with zero fatigue or errors.', icon: '' },
            { title: 'Cost Slash', description: 'Replace repetitive human tasks and reinvest savings into growth.', icon: '' },
            { title: 'Infinite Scale', description: 'Handle 10x the volume without hiring 10x the staff.', icon: '' }
        ],
        features: ['Custom AI Agent Development', 'n8n / Make Automation', 'LLM API Integration', 'CRM & Slack Sync'],
        process: [
            { step: 1, title: 'Audit', description: 'Map every repetitive task consuming your team\'s time.' },
            { step: 2, title: 'Design', description: 'Architecture the AI agent workflow and data flows.' },
            { step: 3, title: 'Build', description: 'Build, test and deploy the agent into your systems.' },
            { step: 4, title: 'Monitor', description: 'Real-time dashboards and continuous optimisation.' }
        ],
        faqs: [
            { question: 'What tools do you use?', answer: 'We use n8n, Make, OpenAI API, Gemini, and custom Python agents depending on the use case.' }
        ]
    },
    {
        id: 'web-design',
        slug: 'web-design',
        title: 'Web Design',
        description: 'Conversion-first premium web experiences that turn visitors into paying customers.',
        iconName: 'Share2',
        headline: 'Websites That Sell While You Sleep.',
        subheadline: 'Premium, fast-loading, conversion-optimised websites built to dominate your market.',
        statBadge: '3x Avg Conversion Lift',
        deliverables: ['UI/UX Design', 'Next.js Development', 'CRO Audit', 'SEO Foundation'],
        relatedServices: ['seo', 'performance-marketing', 'brand-awareness'],
        benefits: [
            { title: 'Instant Trust', description: 'A premium design forces visitors to take you seriously.', icon: '' },
            { title: 'Conversion Engine', description: 'Every element is engineered to move visitors toward action.', icon: '' },
            { title: 'Speed as a Feature', description: 'Sub-2s load times to reduce bounce and improve SEO.', icon: '' }
        ],
        features: ['Strategy & Wireframing', 'Premium UI/UX Design', 'Next.js / React Build', 'Conversion Rate Optimisation'],
        process: [
            { step: 1, title: 'Discovery', description: 'Deep dive into brand, audience, and conversion goals.' },
            { step: 2, title: 'Design', description: 'High-fidelity Figma mockups with your brand DNA.' },
            { step: 3, title: 'Develop', description: 'Pixel-perfect implementation in Next.js with animations.' },
            { step: 4, title: 'Launch', description: 'Deploy, test across devices, and hand over with full docs.' }
        ],
        faqs: [
            { question: 'How long does a website take?', answer: 'Typically 3–6 weeks from kickoff to launch depending on scope.' }
        ]
    },
    {
        id: 'custom-app',
        slug: 'custom-app',
        title: 'Custom App Development',
        description: 'Scalable web and mobile apps built for the AI era — fast, beautiful, and production-ready.',
        iconName: 'Target',
        headline: 'Apps That Scale With Your Ambition.',
        subheadline: 'From internal tools to customer-facing SaaS — we build software that compounds in value over time.',
        statBadge: 'AI-Native Architecture',
        deliverables: ['Product Scoping', 'Full-Stack Development', 'AI Integration', 'Deployment & Monitoring'],
        relatedServices: ['ai-automation', 'web-design', 'lead-generation'],
        benefits: [
            { title: 'Built for Scale', description: 'Architecture that supports 1 user or 100,000 — same codebase.', icon: '' },
            { title: 'AI-Native', description: 'LLM integrations baked in from day one, not bolted on later.', icon: '' },
            { title: 'Ship Fast', description: 'Agile sprints with weekly demos so you see progress constantly.', icon: '' }
        ],
        features: ['Full-Stack Development', 'AI / LLM Integration', 'Mobile-Responsive PWA', 'API & CRM Integrations'],
        process: [
            { step: 1, title: 'Scoping', description: 'Define MVP features, tech stack, and delivery roadmap.' },
            { step: 2, title: 'Sprint 1', description: 'Core architecture, auth, and primary user flows.' },
            { step: 3, title: 'Iterate', description: 'Weekly releases with user feedback loops.' },
            { step: 4, title: 'Scale', description: 'Performance hardening, monitoring, and feature expansion.' }
        ],
        faqs: [
            { question: 'What tech stack do you use?', answer: 'Next.js, React Native, Node.js, Supabase, and OpenAI APIs are our primary stack.' }
        ]
    },
    {
        id: 're-marketing',
        slug: 're-marketing',
        title: 'Re-Marketing',
        description: 'Win back warm leads who showed interest but did not convert. Re-engage fence-sitters with precision retargeting.',
        iconName: 'RefreshCw',
        headline: 'They Left. Bring Them Back. Close The Deal.',
        subheadline: 'Precision retargeting across Google, Facebook, Instagram, and YouTube — re-engaging warm audiences who already know your brand.',
        statBadge: '2x–5x Higher Conversion Rate',
        deliverables: ['Audience Segmentation', 'Custom Ad Creatives', 'Cross-Platform Pixels', 'Funnel Re-entry Automation'],
        relatedServices: ['performance-marketing', 'google-ads', 'lead-generation'],
        benefits: [
            { title: 'Recover Lost Revenue', description: 'Re-engage up to 70% of visitors who did not convert the first time.', icon: '' },
            { title: 'Lower CPA', description: 'Warm audiences convert at 2–5x the rate of cold traffic, cutting cost per acquisition.', icon: '' },
            { title: 'Omnipresent Brand', description: 'Stay top-of-mind across every platform your prospect visits after leaving your site.', icon: '' }
        ],
        features: ['Google Display Retargeting', 'Meta Custom Audiences', 'YouTube Remarketing', 'Dynamic Product Ads'],
        process: [
            { step: 1, title: 'Pixel Setup', description: 'Install and configure tracking pixels across Google, Meta, and LinkedIn for full audience capture.' },
            { step: 2, title: 'Segment', description: 'Build high-intent audience segments: cart abandoners, page viewers, time-on-site audiences.' },
            { step: 3, title: 'Create', description: 'Design personalised ad creatives and landing pages tailored to where each segment dropped off.' },
            { step: 4, title: 'Re-Engage', description: 'Launch multi-wave retargeting sequences that guide leads back into your conversion funnel.' }
        ],
        faqs: [
            { question: 'How soon will I see results?', answer: 'Most clients see measurable re-engagement within the first 2 weeks.' },
            { question: 'What platforms do you retarget on?', answer: 'We cover Google Display, YouTube, Meta (Facebook & Instagram), and LinkedIn.' },
            { question: 'Do I need a large website audience?', answer: 'We recommend a minimum of 500–1000 monthly visitors. Smaller audiences can be retargeted via email or CRM lists.' }
        ]
    }
];

export function getServiceBySlug(slug: string) {
    return services.find(s => s.slug === slug);
}
