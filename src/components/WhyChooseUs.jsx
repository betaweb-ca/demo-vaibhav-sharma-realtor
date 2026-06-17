import { getIcon } from '../utils/icons';
import { homepage } from '../utils/data';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs() {
  const section = homepage.whyChooseUs;

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.items.map((item) => (
            <article
              key={item.title}
              className="bg-[var(--color-surface)] rounded-2xl p-6 hover:bg-white hover:shadow-md hover:border-slate-200 border border-transparent transition-all"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)] text-[var(--color-accent)]">
                {getIcon(item.icon, { className: 'h-6 w-6' })}
              </span>
              <h3 className="text-[var(--color-primary)] mt-5 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
