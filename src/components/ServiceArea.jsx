import { Check, MapPin } from 'lucide-react';
import { contact, fillTemplate, homepage } from '../utils/data';
import SectionHeading from './SectionHeading';

export default function ServiceArea() {
  const section = homepage.serviceArea;

  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={fillTemplate(section.subtitleTemplate, { primary: contact.primary })}
        />
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-slate-500">{section.primaryLabel}</p>
                <p className="text-[var(--color-primary)] font-medium">{contact.primary}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {contact.cities.map((city) => (
                <div key={city} className="flex items-center gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-[var(--color-success)] shrink-0" /> {city}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500">{section.footerNote}</p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradientBlue)]">
            <div className="absolute inset-0 opacity-30 map-grid-bg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="absolute -inset-8 rounded-full bg-[var(--color-accent)]/20 animate-ping" />
                <span className="absolute -inset-4 rounded-full bg-[var(--color-accent)]/30" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] shadow-lg">
                  <MapPin className="h-6 w-6" />
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">{section.radiusLabel}</p>
                <p className="text-[var(--color-primary)] font-medium">
                  {fillTemplate(section.radiusTemplate, {
                    miles: section.radiusMiles,
                    primary: contact.primary,
                  })}
                </p>
              </div>
              <span className="text-2xl text-[var(--color-accent)] font-semibold">
                {section.radiusMiles}mi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
