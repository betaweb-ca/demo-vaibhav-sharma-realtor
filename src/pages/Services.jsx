import ServicesHero from '../components/ServicesHero';
import TrustBar from '../components/TrustBar';
import ServicesGrid from '../components/ServicesGrid';
import FeaturedService from '../components/FeaturedService';
import FAQ from '../components/FAQ';
import QuoteForm from '../components/QuoteForm';

export default function Services() {
  return (
    <main id="services">
      <ServicesHero />
      <TrustBar />
      <ServicesGrid />
      <FeaturedService />
      <FAQ />
      <QuoteForm />
    </main>
  );
}
