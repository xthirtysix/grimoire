import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const classes: Messages = {
  [LOCALES.ENGLISH]: {
    BARD: 'Bard',
    BARBARIAN: 'Barbarian',
    CLERIC: 'Cleric',
    DRUID: 'Druid',
    FIGHTER: 'Fighter',
    MONK: 'Monk',
    PALADIN: 'Paladin',
    RANGER: 'Ranger',
    ROGUE: 'Rogue',
    SORCERER: 'Sorcerer',
    WARLOCK: 'Warlock',
    WIZARD: 'Wizard',
  },
  [LOCALES.RUSSIAN]: {
    BARD: 'Бард',
    BARBARIAN: 'Варвар',
    CLERIC: 'Жрец',
    DRUID: 'Друид',
    FIGHTER: 'Воин',
    MONK: 'Монах',
    PALADIN: 'Паладин',
    RANGER: 'Следопыт',
    ROGUE: 'Плут',
    SORCERER: 'Колдун',
    WARLOCK: 'Чернокнижник',
    WIZARD: 'Волшебник',
  },
};
