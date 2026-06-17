import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ServiceArea from '../components/ServiceArea';
import CTABanner from '../components/CTABanner';
import QuoteForm from '../components/QuoteForm';

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ServiceArea />
      <CTABanner />
      <QuoteForm />
    </main>
  );
}
