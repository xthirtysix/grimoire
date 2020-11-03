import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const displayMessages: Messages = {
  [LOCALES.ENGLISH]: {
    onLogout: 'Please come back again soon!',
    onLogoutError: 'Sorry! We were not able to log you out. Please try again later',
    grimoireDeleteMsg: 'Grimoire successfully removed',
    createGrimoireSubmitError: `Grimoire was not created. Check your internet connection or try again later`,
    createGrimoireSubmitSuccess: `Grimoire {name} successfully created`,
    loginError: 'Sorry! We were not able to log you in. Please try again later',
    loginSuccess: "You've successfully logged in",
  },
  [LOCALES.RUSSIAN]: {
    onLogout: 'Пожалуйста, возвращайтесь скорее!',
    onLogoutError: 'Извините! Выход оказался закрыт. Попробуйте позже',
    grimoireDeleteMsg: 'Гримуар удален',
    createGrimoireSubmitError: `Гримуар не был создан. Проверьте соединение с интернет или попробуйте позже`,
    createGrimoireSubmitSuccess: `Гримуар {name} создан`,
    loginError: 'Простите! Попытка входа не удалась. Пожалуйста, повторите позднее',
    loginSuccess: 'Вы успешно вошли на сайт',
  },
};
