export type LocalizedText = {
  en: string;
  ar: string;
};

export type LocalizedArray = {
  en: string[];
  ar: string[];
};

export function resolveLang(
  value: string | LocalizedText | undefined | null,
  language: 'en' | 'ar'
): string {
  if (typeof value === 'string') return value;
  if (!value) return '';
  return value[language] ?? value.en ?? '';
}

export function resolveLangArray(
  value: string[] | LocalizedArray | undefined | null,
  language: 'en' | 'ar'
): string[] {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return value[language] ?? value.en ?? [];
}
