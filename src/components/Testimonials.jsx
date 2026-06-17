import { Star } from 'lucide-react';
import { getIcon } from '../utils/icons';
import { testimonials } from '../utils/data';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const section = testimonials.section;

  return (
    <section id="reviews" className="section bg-white">
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <blockquote
              key={item.name}
              className="bg-[var(--color-surface)] rounded-2xl p-7 border border-slate-200/60 relative m-0"
            >
              {getIcon('Quote', {
                className: 'absolute top-5 right-5 h-8 w-8 text-[var(--color-primary)]/10',
              })}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-5 flex items-center gap-3 not-italic">
                <div className="h-10 w-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-medium">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-[var(--color-primary)] font-medium">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
