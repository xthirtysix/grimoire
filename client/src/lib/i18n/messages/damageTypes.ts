import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const damageTypes: Messages = {
  [LOCALES.EN]: {
    ACID: 'Acid',
    BLUDGEONING: 'Bludgeoning',
    COLD: 'Cold',
    FIRE: 'Fire',
    FORCE: 'Force',
    LIGHTNING: 'Lightning',
    NECROTIC: 'Necrotic',
    PIERCING: 'Piercing',
    POISON: 'Poison',
    PSYCHIC: 'Psychic',
    RADIANT: 'Radiant',
    SLASHING: 'Slashing',
    THUNDER: 'Thunder',
    SHORTBOW: 'Shortbow',
    LONGBOW: 'Longbow',
    ONE_HANDED_MELEE: 'One handed melee',
    UNARMED: 'Unarmed',
    NATURAL: 'Natural',
    MELEE_WEAPON: 'Melee weapon',
  },
  [LOCALES.RU]: {
    ACID: 'Кислота',
    BLUDGEONING: 'Дробящий',
    COLD: 'Холод',
    FIRE: 'Огонь',
    FORCE: 'Сила',
    LIGHTNING: 'Молния',
    NECROTIC: 'Некротический',
    PIERCING: 'Колящий',
    POISON: 'Яд',
    PSYCHIC: 'Психический',
    RADIANT: 'Излучение',
    SLASHING: 'Рубящий',
    THUNDER: 'Гром',
    SHORTBOW: 'Короткий лук',
    LONGBOW: 'Длинный лук',
    ONE_HANDED_MELEE: 'Одноручное оружие',
    UNARMED: 'Безоружный',
    NATURAL: 'Природный',
    MELEE_WEAPON: 'Оружие ближнего боя',
  },
};
