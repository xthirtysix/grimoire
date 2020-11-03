import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const grimoiresPage: Messages = {
  [LOCALES.ENGLISH]: {
    myGrimoires: 'My grimoires',
    newGrimoireBtn: 'New grimoire',
    grimoiresCreated: 'Grimoires created',
    grimoireView: 'View',
    grimoireEdit: 'Edit',
    grimoireRemove: 'Remove',
    grimoiresSpinner: 'Blowing off the dust...',
    grimoiresEmpty: 'There are no Grimoires in your library yet',
  },
  [LOCALES.RUSSIAN]: {
    myGrimoires: 'Мои гримуары',
    newGrimoireBtn: 'Новый гримуар',
    grimoiresCreated: 'Гримуаров создано',
    grimoireView: 'Показать',
    grimoireEdit: 'Изменить',
    grimoireRemove: 'Удалить',
    grimoiresSpinner: 'Сдуваем пыль...',
    grimoiresEmpty: 'В вашей библиотеке пока нет Гримуаров',
  },
};
