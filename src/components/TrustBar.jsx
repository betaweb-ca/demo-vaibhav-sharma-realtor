import { getIcon } from '../utils/icons';
import { homepage } from '../utils/data';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {homepage.trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 justify-center md:justify-start">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                {getIcon(badge.icon, { className: 'h-5 w-5' })}
              </span>
              <span className="text-sm text-[var(--color-primary)]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
