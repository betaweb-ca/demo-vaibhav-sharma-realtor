import business from '../data/business.json';
import navigation from '../data/navigation.json';
import homepage from '../data/homepage.json';
import services from '../data/services.json';
import testimonials from '../data/testimonials.json';
import faqs from '../data/faqs.json';
import contact from '../data/contact.json';
import theme from '../data/theme.json';
import quoteForm from '../data/quoteForm.json';

export {
  business,
  navigation,
  homepage,
  services,
  testimonials,
  faqs,
  contact,
  theme,
  quoteForm,
};

export function buildPath(route, hash = '') {
  if (!hash) return route;
  return `${route}#${hash}`;
}

export function fillTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}
