import { ArrowRight, Check } from 'lucide-react';
import { services } from '../utils/data';
import ImageWithFallback from './ImageWithFallback';
import Button from './Button';

export default function FeaturedService() {
  const featured = services.featured;

  const goToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="rounded-3xl overflow-hidden border border-slate-200 grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-0">
            <ImageWithFallback
              src={featured.image}
              alt={featured.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute top-5 left-5 bg-[var(--color-accent)] text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              {featured.badge}
            </span>
          </div>
          <div className="bg-[var(--color-primary)] text-white p-10 md:p-14">
            <span className="eyebrow">{featured.eyebrow}</span>
            <h2 className="mt-3 text-3xl md:text-4xl tracking-tight font-semibold text-white">
              {featured.title}
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">{featured.description}</p>
            <ul className="mt-6 space-y-3 list-none p-0 m-0">
              {featured.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 mt-0.5 text-[var(--color-accent)] shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" onClick={goToQuote}>
              {featured.cta} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
