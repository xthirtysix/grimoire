import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const savingThrows: Messages = {
  [LOCALES.ENGLISH]: {
    STRENGTH: 'Strength',
    CONSTITUTION: 'Constitution',
    DEXTERITY: 'Dexterity',
    INTELLIGENCE: 'Intelligence',
    WISDOM: 'Wisdom',
    CHARISMA: 'Charisma',
  },
  [LOCALES.RUSSIAN]: {
    STRENGTH: 'Сила',
    CONSTITUTION: 'Выносливость',
    DEXTERITY: 'Ловкость',
    INTELLIGENCE: 'Интеллект',
    WISDOM: 'Мудрость',
    CHARISMA: 'Харизма',
  },
};
