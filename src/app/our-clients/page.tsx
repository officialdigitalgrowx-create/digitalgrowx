import { generateMetadata } from '@/components/SEO';
import ClientsUI from './ClientsUI';

export const metadata = generateMetadata('clients');

export default function OurClientsPage() {
    return <ClientsUI />;
}
