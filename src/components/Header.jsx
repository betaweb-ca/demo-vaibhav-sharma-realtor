import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { getIcon } from '../utils/icons';
import { business, navigation, buildPath } from '../utils/data';
import Button from './Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link) => {
    setOpen(false);
    const path = buildPath(link.route, link.hash);
    if (link.hash && location.pathname === link.route) {
      document.getElementById(link.hash)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(path);
    if (link.hash) {
      setTimeout(() => {
        document.getElementById(link.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const isActive = (link) => {
    if (link.route === '/services') return location.pathname === '/services';
    if (link.label === 'Home') return location.pathname === '/';
    return false;
  };

  const cta = navigation.cta;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[var(--color-primary)] no-underline">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
              {getIcon(navigation.logoIcon, { className: 'h-5 w-5' })}
            </span>
            <span className="font-semibold tracking-tight">{business.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navigation.links.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link)}
                className={`text-sm transition-colors bg-transparent border-0 cursor-pointer ${
                  isActive(link)
                    ? 'text-[var(--color-primary)] font-medium'
                    : 'text-slate-600 hover:text-[var(--color-primary)]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 text-sm text-slate-700 hover:text-[var(--color-primary)] no-underline"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
            <Button onClick={() => handleNavClick(cta)}>{cta.label}</Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-slate-700 bg-transparent border-0 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open
              ? getIcon('X', { className: 'h-6 w-6' })
              : getIcon('Menu', { className: 'h-6 w-6' })}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-4 flex flex-col gap-3">
            {navigation.links.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link)}
                className="text-left text-slate-700 py-2 bg-transparent border-0 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a href={business.phoneHref} className="flex items-center gap-2 text-slate-700 py-2 no-underline">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <Button className="w-full" onClick={() => handleNavClick(cta)}>
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
