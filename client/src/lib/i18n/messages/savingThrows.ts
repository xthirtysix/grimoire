import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const savingThrows: Messages = {
  [LOCALES.EN]: {
    STRENGTH: 'Strength',
    CONSTITUTION: 'Constitution',
    DEXTERITY: 'Dexterity',
    INTELLIGENCE: 'Intelligence',
    WISDOM: 'Wisdom',
    CHARISMA: 'Charisma',
  },
  [LOCALES.RU]: {
    STRENGTH: 'Сила',
    CONSTITUTION: 'Выносливость',
    DEXTERITY: 'Ловкость',
    INTELLIGENCE: 'Интеллект',
    WISDOM: 'Мудрость',
    CHARISMA: 'Харизма',
  },
};
