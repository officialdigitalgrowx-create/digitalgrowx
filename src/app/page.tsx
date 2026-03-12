import { generateMetadata } from '@/components/SEO';
import HomeUI from './HomeUI';

export const metadata = generateMetadata('home');

export default function HomePage() {
  return <HomeUI />;
}