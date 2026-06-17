import theme from '../data/theme.json';

export function applyTheme() {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  root.style.setProperty('--font-body', theme.fonts.body);
}

export { theme };
