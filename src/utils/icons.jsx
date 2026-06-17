import {
  AlarmClock,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Clock,
  Facebook,
  Hammer,
  HandCoins,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

const iconMap = {
  AlarmClock,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Clock,
  Facebook,
  Hammer,
  HandCoins,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users,
  Wrench,
  X,
  Zap,
};

export function getIcon(name, props = {}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

export { iconMap };
