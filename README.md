# Service Business Website Template

A deployment-ready React + Vite website template for local service businesses. All business-specific content lives in JSON files under `src/data/`, so you can rebrand the site without editing React components.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI sections (Header, Hero, ServiceCard, etc.)
  pages/          Home and Services routes
  data/           JSON content files — edit these to customize the site
  styles/         Global CSS and theme variables
  utils/          Theme loader, icon mapping, shared helpers
public/
  images/         Image assets referenced from JSON
```

## JSON content files

| File | Controls |
|------|----------|
| `business.json` | Business name, tagline, phone, email, address, hours, social links, legal links |
| `navigation.json` | Navbar labels, routes, CTA button |
| `homepage.json` | Hero, trust badges, section headings, process steps, service area copy, CTA banner |
| `services.json` | Services page hero, categories, service cards, featured package |
| `testimonials.json` | Customer reviews section |
| `faqs.json` | FAQ questions and answers |
| `contact.json` | Service area cities and map radius settings |
| `quoteForm.json` | Quote form labels, fields, placeholders, success message |
| `theme.json` | Brand colors, fonts, button labels, site meta title/description |

## Customize for a new business

1. Update `business.json` with the new company name, contact details, hours, and social links.
2. Update `theme.json` colors and button text to match the brand.
3. Edit `homepage.json` and `services.json` for new headlines, section copy, and offerings.
4. Replace items in `testimonials.json` and `faqs.json`.
5. Adjust `navigation.json` if you need different menu labels or routes.
6. Swap images in `public/images/` and update image paths in JSON.

After editing JSON, restart the dev server if it is already running.

## Replace images

Images are referenced from JSON using paths like `/images/hero.jpg`.

Default image locations:

- `/public/images/hero.jpg`
- `/public/images/featured-package.jpg`
- `/public/images/services/*.jpg`

Replace these files with your own photos using the same filenames, or change the paths in:

- `homepage.json` → `hero.image`
- `services.json` → `featured.image` and each service `image`

Recommended size: at least 1200px wide for hero and featured images; 900px wide for service cards.

## Deploy on Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Use these defaults:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

This project includes a `vercel.json` rewrite rule so client-side routes like `/services` work correctly.

## Notes

- The quote form is front-end only. Connect it to your email service, CRM, or form provider when you go live.
- Icon names in JSON (for example `"ShieldCheck"`, `"Wrench"`) map to Lucide icons in `src/utils/icons.jsx`.
- Colors from `theme.json` are applied as CSS variables at runtime, so components stay theme-driven.

## Tech stack

- React 18
- Vite 6
- React Router
- Tailwind CSS 4
- Lucide React icons
