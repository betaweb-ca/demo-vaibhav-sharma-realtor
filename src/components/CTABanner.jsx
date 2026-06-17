import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { business, homepage } from '../utils/data';
import Button from './Button';

export default function CTABanner() {
  const navigate = useNavigate();
  const section = homepage.ctaBanner;

  const goToQuote = () => {
    navigate('/services#quote');
    setTimeout(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] text-white p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl tracking-tight font-semibold">{section.title}</h2>
              <p className="mt-4 text-slate-300 leading-relaxed max-w-xl">{section.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Button onClick={goToQuote}>
                {section.primaryCta} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline-white" href={business.phoneHref}>
                <Phone className="h-4 w-4" /> {business.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
