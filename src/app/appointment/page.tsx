import type { Metadata } from 'next';
import ContactUI from './ContactUI';

export const metadata: Metadata = {
    title: 'Contact Us | Digital GrowX — Get Your Free Strategy Call',
    description: 'Get in touch with the Digital GrowX team for a free 30-minute growth strategy call. pick your preferred date and time and we will confirm your slot within 2 hours.',
    keywords: 'contact Digital GrowX, marketing consultation Ahmedabad, free strategy call, digital marketing agency contact',
};

export default function AppointmentPage() {
    return <ContactUI />;
}
