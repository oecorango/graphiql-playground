export type KeyLanguage = 'en' | 'ru';
type Text = {
  [key in KeyLanguage]: string;
};

export type KeyText =
  | 'main'
  | 'welcome'
  | 'login'
  | 'signup'
  | 'signout'
  | 'errorPassword'
  | 'errorEmail'
  | 'errorConfirmPassword'
  | 'required'
  | 'toRegistration'
  | 'toLogin'
  | 'emailPlaceholder'
  | 'passwordPlaceholder'
  | 'confirmPlaceholder'
  | 'headerRegistration';
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
  signout: {
    en: 'Sign Out',
    ru: 'Выйти',
  },
  errorPassword: {
    en: 'Password should contain at least 8 characters with at least one number, one uppercase letter, one lowercase letter, and one special character',
    ru: 'Пароль должен содержать не менее 8 символов, включая хотя бы одну цифру, одну прописную букву, одну строчную букву и один специальный символ.',
  },
  errorEmail: {
    en: 'Must be a valid email',
    ru: 'Адрес почты указан неверно',
  },
  errorConfirmPassword: {
    en: 'Password mismatch',
    ru: 'Пароли не совпадают',
  },
  required: {
    en: 'This is a required field',
    ru: 'Это поле обязательно к заполнению',
  },
  toRegistration: {
    en: 'Don’t have account? Sign up',
    ru: 'Вы не зарегистрированы? Регистрация',
  },
  toLogin: {
    en: 'Already have an account? Log in',
    ru: 'Вы зарегистрованы? Войти!',
  },
  emailPlaceholder: {
    en: 'E-mail',
    ru: 'Электронная почта',
  },
  passwordPlaceholder: {
    en: 'Password',
    ru: 'Пароль',
  },
  confirmPlaceholder: {
    en: 'Confirm password',
    ru: 'Подтвердите пароль',
  },
  headerRegistration: {
    en: 'You are ready?',
    ru: 'Вы готовы?',
  },
};
