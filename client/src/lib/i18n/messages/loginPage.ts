import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const loginPage: Messages = {
  [LOCALES.EN]: {
    loginPageHeader: 'Welcome to Grimoire!',
    loginPageSubheader: 'Sign in with Google and create your own Grimoire!',
    loginPageGoogleBtn: 'Sign in with Google',
    loginNote:
      "Note: By signing in, you'll be redirected to the Google consent form to sign in with your Google account.",
  },
  [LOCALES.RU]: {
    loginPageHeader: 'Добро пожаловать в Grimoire!',
    loginPageSubheader: 'Войдите с Google и создайте собственный Гримуар!',
    loginPageGoogleBtn: 'Войти с Google',
    loginNote:
      'Внимание: Нажав на кнопку, вы будете перенаправлены на страницу Google, чтобы войти в Ваш Google аккаунт',
  },
};
