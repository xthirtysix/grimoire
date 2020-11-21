import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const createGrimoirePage: Messages = {
  [LOCALES.EN]: {
    createGrimoireHeader: "Welcome, spellcaster! Let's create your own Grimoire!",
    createGrimoireFormDescription:
      "In this form we'll collect some information, to fill title page of the Grimoire.",
    createGrimoireFormName: 'Name',
    createGrimoireFormNameExtra: 'Max length of 30 characters',
    createGrimoireFormNameError: 'Please enter valid name under 30 characters',
    createGrimoireFormNamePlaceholder: 'e.g. character name',
    createGrimoireFormClassError: 'Missing class',
    createGrimoireFormLevelError: 'Missing level',
    createGrimoireSpinner: 'Creating grimoire...',
    addClassError: 'Please add at least one class',
    addClassBtn: 'Add class',
    submit: 'Submit',
    levelTooHigh:
      'Your characters total level is {totalLevel}, which may not be allowed for a general game',
  },
  [LOCALES.RU]: {
    createGrimoireHeader:
      'Приветствую, заклинатель! Самое время создать собственный Гримуар!',
    createGrimoireFormDescription:
      'В этой форме мы соберем информацию, необходимую для титульной страницы Вашего Гримуара',
    createGrimoireFormName: 'Название',
    createGrimoireFormNameExtra: 'Не боллее 30 символов',
    createGrimoireFormNameError: 'Пожалуйста, введите название не длиннее 30 символов',
    createGrimoireFormNamePlaceholder: 'Например имя персонажа',
    createGrimoireFormClassError: 'Не выбран класс',
    createGrimoireFormLevelError: 'Не выбран уровень',
    createGrimoireSpinner: 'Создаем гримуар...',
    addClassError: 'Пожалуйста, добавьте как миниумум один класс',
    addClassBtn: 'Добавить класс',
    submit: 'Подтвердить',
    levelTooHigh:
      'Суммарный уровень вашего персонажа равен {totalLevel}, и может не подходить для обычной игры',
  },
};
