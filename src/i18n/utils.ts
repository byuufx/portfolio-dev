import { ui, experienceBullets, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getExperienceBullets(lang: Lang, id: string): string[] {
  return experienceBullets[lang][id] ?? experienceBullets[defaultLang][id] ?? [];
}
