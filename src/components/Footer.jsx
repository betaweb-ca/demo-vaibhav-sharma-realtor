import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getIcon } from '../utils/icons';
import { business, navigation, contact, buildPath } from '../utils/data';

export default function Footer() {
  const cities = contact.cities.slice(0, contact.footerDisplayCount);

  return (
    <footer className="bg-[var(--color-primaryDark)] text-slate-300">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)]">
              {getIcon(navigation.logoIcon, { className: 'h-5 w-5 text-[var(--color-primary)]' })}
            </span>
            <span className="font-semibold">{business.name}</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {business.tagline}. {business.footerNote}
          </p>
          <div className="flex gap-3 mt-5">
            {business.social.map((item) => (
              <a
                key={item.platform}
                href={item.href}
                aria-label={item.platform}
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors flex items-center justify-center no-underline text-inherit"
              >
                {getIcon(item.icon, { className: 'h-4 w-4' })}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm list-none p-0 m-0">
            {navigation.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={buildPath(link.route, link.hash)}
                  className="hover:text-white transition-colors no-underline text-inherit"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4 font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm list-none p-0 m-0">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0" />
              <a href={business.phoneHref} className="no-underline text-inherit hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0" />
              <a href={`mailto:${business.email}`} className="no-underline text-inherit hover:text-white">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0" />
              <span>
                {business.address}
                <br />
                {business.city}, {business.region}
              </span>
            </li>
          </ul>

          <h4 className="text-white mt-6 mb-3 flex items-center gap-2 font-semibold">
            <Clock className="h-4 w-4 text-[var(--color-accent)]" /> Hours
          </h4>
          <ul className="space-y-1 text-sm list-none p-0 m-0">
            {business.hours.map((hour) => (
              <li key={hour.day} className="flex justify-between gap-4">
                <span className="text-slate-400">{hour.day}</span>
                <span>{hour.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4 font-semibold">Service Areas</h4>
          <ul className="space-y-2 text-sm grid grid-cols-2 gap-x-3 list-none p-0 m-0">
            {cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 text-sm text-slate-400 flex flex-col sm:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </span>
          <span className="flex gap-4">
            {business.legal.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white no-underline text-inherit">
                {item.label}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
