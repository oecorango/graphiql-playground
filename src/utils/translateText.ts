import { KeyText, TRANSLATE_TEXT } from '../language/translationOptions';

export function translateText(key: KeyText) {
  const saveLanguage = localStorage.getItem('lang') === 'en';
  const currentLanguage = saveLanguage ? 'en' : 'ru';

  return TRANSLATE_TEXT[key][currentLanguage];
}
