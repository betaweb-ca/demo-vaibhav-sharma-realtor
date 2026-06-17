import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homepage, services } from '../utils/data';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import Button from './Button';

export default function ServicesPreview() {
  const section = homepage.servicesPreview;
  const previewItems = services.items.slice(0, section.previewCount);

  return (
    <section id="services-preview" className="section bg-[var(--color-surface)]">
      <div className="container">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewItems.map((service) => (
            <ServiceCard key={service.id} service={service} variant="preview" />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button variant="outline-primary">
              {section.viewAllLabel} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
