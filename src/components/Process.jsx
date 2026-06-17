import { homepage } from '../utils/data';

export default function Process() {
  const section = homepage.process;

  return (
    <section className="section bg-[var(--color-primary)] text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white">
            {section.title}
          </h2>
          <p className="mt-4 text-slate-300">{section.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 relative">
          {section.steps.map((step, index) => (
            <article
              key={step.step}
              className="relative bg-white/5 backdrop-blur rounded-2xl p-7 border border-white/10"
            >
              <div className="text-[var(--color-accent)] text-5xl tracking-tight font-semibold">
                {step.step}
              </div>
              <h3 className="mt-3 text-white font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{step.description}</p>
              {index < section.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-px bg-white/20" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
