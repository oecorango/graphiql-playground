type KeyLanguage = 'en' | 'ru';
type Text = {
  [key in KeyLanguage]: string;
};

export type KeyText = 'main' | 'welcome' | 'login' | 'signup';
type Translate = {
  [key in KeyText]: Text;
};

export const TRANSLATE_TEXT: Translate = {
  main: {
    en: 'Main',
    ru: 'Главная',
  },
  welcome: {
    en: 'Welcome',
    ru: 'О нас',
  },
  login: {
    en: 'LogIn',
    ru: 'Войти',
  },
  signup: {
    en: 'SignUp',
    ru: 'Регистрация',
  },
};
