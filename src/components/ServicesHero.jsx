import { ArrowRight } from 'lucide-react';
import { services } from '../utils/data';
import Button from './Button';

export default function ServicesHero() {
  const hero = services.hero;

  const goToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineLines = hero.headline.split('\n');

  return (
    <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 grid-bg" />
      <div className="relative container py-20 md:py-28 text-center">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-semibold text-white">
          {headlineLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < headlineLines.length - 1 && <br className="hidden md:block" />}
            </span>
          ))}
        </h1>
        <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">{hero.description}</p>
        <div className="mt-8 flex justify-center">
          <Button onClick={goToQuote}>
            {hero.cta} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
