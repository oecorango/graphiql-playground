type KeyLanguage = 'en' | 'ru';
type Text = {
  [key in KeyLanguage]: string;
};

export type KeyText = 'main' | 'welcome' | 'login' | 'signup' | 'signout';
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
};

export const TRANSLATE_ABOUT = {
  ru: `Добро пожаловать в "Sleep for weak team"!
  О команде разработчиков:
  Познакомьтесь с нашей командой опытных разработчиков фронтенда на React:
  
  Егор
  Олег
  Елизавета
  О проекте - GraphiQL:
  Наш проект, GraphiQL, направлен на создание мощного инструмента для взаимодействия с конечными точками GraphQL. Помимо стандартных функций, наше приложение также будет включать в себя:
  
  Возможности авторизации и аутентификации для контроля доступа авторизованных пользователей.
  Беспроблемную работу с конечными точками GraphQL, указанными пользователем.
  О курсе:
  Мы учимся на курсе "React 2023Q4", предоставляемом rolling-scopes-school. Этот курс обеспечивает нас последними знаниями и навыками, необходимыми для успешной работы в области разработки на React.`,
  en: `Welcome to "Sleep for weak team"!
  About Developers:
  Meet our team of skilled React frontend developers:
  
  Egor
  Oleg
  Elizaveta
  About Project - GraphiQL:
  Our project, GraphiQL, focuses on providing a powerful tool for interacting with GraphQL endpoints. In addition to standard functionalities, our app will also feature:
  
  Authorization and authentication capabilities to ensure access control for authorized users.
  Seamless interaction with user-specified open GraphQL endpoints.
  About Course:
  We're currently enrolled in the "React 2023Q4" course offered by rolling-scopes-school. This course equips us with the latest knowledge and skills required to excel in React development.`,
};
