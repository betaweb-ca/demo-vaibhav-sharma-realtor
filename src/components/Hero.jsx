import { ArrowRight, Phone, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { business, homepage } from '../utils/data';
import ImageWithFallback from './ImageWithFallback';
import Button from './Button';

export default function Hero() {
  const navigate = useNavigate();
  const { hero } = homepage;

  const goToQuote = () => {
    navigate('/services#quote');
    setTimeout(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const headlineLines = hero.headline.split('\n');

  return (
    <section className="relative bg-gradient-to-b from-white to-[var(--color-surface)] overflow-hidden">
      <div className="container py-16 md:py-24 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/5 px-3 py-1 text-xs text-[var(--color-primary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-success)]" />
            {hero.badge}
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--color-primary)] leading-[1.05] font-semibold">
            {headlineLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
            {business.name} is your trusted neighborhood team for fast, professional service.{' '}
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button onClick={goToQuote}>
              {hero.primaryCta} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline-primary" href={business.phoneHref}>
              <Phone className="h-4 w-4" /> {hero.secondaryCtaPrefix} {business.phone}
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              ))}
            </div>
            <p className="text-sm text-slate-600">
              <span className="text-[var(--color-primary)] font-medium">{hero.rating}</span> from{' '}
              {hero.reviewCount}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={hero.image}
              alt={hero.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          {hero.floatingBadges.map((badge, index) => {
            if (badge.variant === 'dark') {
              return (
                <div
                  key={badge.title}
                  className="hidden md:flex absolute -top-4 -right-4 bg-[var(--color-primary)] text-white rounded-2xl shadow-lg px-5 py-4"
                >
                  <div>
                    <p className="text-2xl font-semibold">{badge.title}</p>
                    <p className="text-xs text-slate-300">{badge.subtitle}</p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={badge.title}
                className={`hidden md:flex absolute ${
                  index === 0 ? '-bottom-6 -left-6' : ''
                } bg-white rounded-2xl shadow-lg p-4 gap-3 items-center border border-slate-100`}
              >
                <div className="h-12 w-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-lg">
                  ✓
                </div>
                <div>
                  <p className="text-sm text-[var(--color-primary)] font-medium">{badge.title}</p>
                  <p className="text-xs text-slate-500">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
