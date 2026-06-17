import { useState } from 'react';
import { services } from '../utils/data';
import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState(services.categories[0]);

  const filtered =
    activeCategory === 'All Services'
      ? services.items
      : services.items.filter((item) => item.category === activeCategory);

  const goToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container">
        <div
          className="bg-white border border-slate-200 mx-auto flex flex-wrap gap-1 p-1 rounded-lg w-fit max-w-full"
          role="tablist"
          aria-label="Service categories"
        >
          {services.categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm transition-colors border-0 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-transparent text-slate-700 hover:text-[var(--color-primary)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} variant="detailed" onQuote={goToQuote} />
          ))}
        </div>
      </div>
    </section>
  );
}
