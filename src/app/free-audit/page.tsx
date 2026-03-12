import { generateMetadata } from '@/components/SEO';
import FreeAuditUI from './FreeAuditUI';

export const metadata = generateMetadata('contact'); // Reusing contact metadata pattern for now

export default function FreeAuditPage() {
    return <FreeAuditUI />;
}
