import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const grimoirePage: Messages = {
  [LOCALES.EN]: {
    spellsContained: 'Spells contained',
    grimoireEmpty: 'There are no Spells in your Grimoire yet...',
    addSpellsBtn: 'Add Spells',
  },
  [LOCALES.RU]: {
    spellsContained: 'Заклинаний содержится',
    grimoireEmpty: 'В вашем Гримуаре пока нет заклинаний...',
    addSpellsBtn: 'Добавить заклинания',
  },
};
