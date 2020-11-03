import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const mainHeader: Messages = {
  [LOCALES.ENGLISH]: {
    mainSearchPlaceholder: 'Search "Fireball"',
    headerSpells: 'Spells',
    userMenuSignIn: 'Sign In',
    userMenuGrimoires: 'Grimoires',
    userMenuLogOut: 'Log Out',
  },
  [LOCALES.RUSSIAN]: {
    mainSearchPlaceholder: 'Искать "Огненный шар"',
    headerSpells: 'Заклинания',
    userMenuSignIn: 'Войти',
    userMenuGrimoires: 'Мои гримуары',
    userMenuLogOut: 'Выход',
  },
};
