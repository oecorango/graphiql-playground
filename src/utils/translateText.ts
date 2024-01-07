import {
  KeyLanguage,
  KeyText,
  TRANSLATE_TEXT,
} from '../language/translationOptions';

export function translateText(key: KeyText) {
  const saveLanguage =
    localStorage.getItem('lang') === 'en' ||
    localStorage.getItem('lang') === null;
  const currentLanguage = saveLanguage ? 'en' : 'ru';

  return TRANSLATE_TEXT[key][currentLanguage];
}

export function translate(key: KeyText, lang: KeyLanguage) {
  return TRANSLATE_TEXT[key][lang];
}
