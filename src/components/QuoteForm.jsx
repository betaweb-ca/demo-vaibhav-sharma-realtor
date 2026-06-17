import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { business, quoteForm, services, theme } from '../utils/data';
import Button from './Button';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setMessage(quoteForm.successMessage);
  };

  const section = quoteForm.section;
  const labels = quoteForm.contactLabels;

  return (
    <section id="quote" className="section bg-white scroll-mt-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14 items-start">
          <div className="lg:col-span-2">
            <span className="eyebrow">{section.eyebrow}</span>
            <h2 className="section-title">{section.title}</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{section.description}</p>

            <ul className="mt-8 space-y-4 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] shrink-0">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-500">{labels.phone}</p>
                  <a href={business.phoneHref} className="text-[var(--color-primary)] no-underline">
                    {business.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] shrink-0">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-500">{labels.email}</p>
                  <a href={`mailto:${business.email}`} className="text-[var(--color-primary)] no-underline">
                    {business.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] shrink-0">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-500">{labels.visit}</p>
                  <p className="text-[var(--color-primary)]">
                    {business.address}, {business.city}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] shrink-0">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-500">{labels.hours}</p>
                  <p className="text-[var(--color-primary)]">{business.hoursSummary}</p>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[var(--color-surface)] rounded-3xl p-6 md:p-8 border border-slate-200 grid gap-5 sm:grid-cols-2"
          >
            {quoteForm.fields.map((field) => {
              const colClass = field.colSpan === 2 ? 'sm:col-span-2' : 'sm:col-span-1';

              if (field.type === 'select') {
                return (
                  <div key={field.id} className={colClass}>
                    <label htmlFor={field.id} className="form-label">
                      {field.label}
                    </label>
                    <select id={field.id} className="form-select" defaultValue="">
                      <option value="" disabled>
                        {field.placeholder}
                      </option>
                      {services.items.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                      {field.includeOtherOption && (
                        <option value="other">{field.otherLabel}</option>
                      )}
                    </select>
                  </div>
                );
              }

              if (field.type === 'textarea') {
                return (
                  <div key={field.id} className={colClass}>
                    <label htmlFor={field.id} className="form-label">
                      {field.label}
                    </label>
                    <textarea
                      id={field.id}
                      rows={field.rows}
                      placeholder={field.placeholder}
                      className="form-textarea"
                    />
                  </div>
                );
              }

              return (
                <div key={field.id} className={colClass}>
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="form-input"
                  />
                </div>
              );
            })}

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500 m-0">{quoteForm.disclaimer}</p>
              <Button type="submit" disabled={submitted}>
                <Send className="h-4 w-4" />
                {submitted ? theme.buttons.submitSent : theme.buttons.submit}
              </Button>
            </div>

            {message && (
              <p className="sm:col-span-2 text-sm text-[var(--color-success)] m-0" role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
