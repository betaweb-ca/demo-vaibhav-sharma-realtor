import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getIcon } from '../utils/icons';
import ImageWithFallback from './ImageWithFallback';
import Button from './Button';
import { theme } from '../utils/data';

export default function ServiceCard({ service, variant = 'preview', onQuote }) {
  const Icon = () => getIcon(service.icon, { className: variant === 'preview' ? 'h-5 w-5' : 'h-6 w-6' });

  if (variant === 'preview') {
    return (
      <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
        <div className="relative aspect-[16/10] overflow-hidden">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[var(--color-primary)] shadow">
            <Icon />
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-[var(--color-primary)] font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>
          <Link
            to="/services"
            className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:gap-2 transition-all"
          >
            {theme.buttons.learnMore} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
          <Icon />
        </span>
        <span className="text-sm text-[var(--color-accent)] font-medium">{service.price}</span>
      </div>
      <h3 className="text-[var(--color-primary)] font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>
      <ul className="mt-4 space-y-2 flex-1">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="h-4 w-4 mt-0.5 text-[var(--color-success)] shrink-0" /> {benefit}
          </li>
        ))}
      </ul>
      <Button variant="dark" className="mt-5 w-full" onClick={onQuote}>
        {theme.buttons.secondary}
      </Button>
    </article>
  );
}
