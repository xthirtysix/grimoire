import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const schools: Messages = {
  [LOCALES.EN]: {
    ABJURATION: 'Abjuration',
    CONJURATION: 'Conjuration',
    DIVINATION: 'Divination',
    EVOCATION: 'Evocation',
    ENCHANTMENT: 'Enchantment',
    ILLUSION: 'Illusion',
    NECROMANCY: 'Necromancy',
    TRANSMUTATION: 'Transmutation',
    ABJURATION_SHORTHAND: 'Abj',
    CONJURATION_SHORTHAND: 'Conj',
    DIVINATION_SHORTHAND: 'Div',
    EVOCATION_SHORTHAND: 'Evoc',
    ENCHANTMENT_SHORTHAND: 'Ench',
    ILLUSION_SHORTHAND: 'Illu',
    NECROMANCY_SHORTHAND: 'Necr',
    TRANSMUTATION_SHORTHAND: 'Trans',
  },
  [LOCALES.RU]: {
    ABJURATION: 'Ограждение',
    CONJURATION: 'Вызов',
    DIVINATION: 'Прорицание',
    EVOCATION: 'Воплощение',
    ENCHANTMENT: 'Очарование',
    ILLUSION: 'Иллюзия',
    NECROMANCY: 'Некромантия',
    TRANSMUTATION: 'Преобразование',
    ABJURATION_SHORTHAND: 'Огр',
    CONJURATION_SHORTHAND: 'Выз',
    DIVINATION_SHORTHAND: 'Прор',
    EVOCATION_SHORTHAND: 'Вопл',
    ENCHANTMENT_SHORTHAND: 'Очар',
    ILLUSION_SHORTHAND: 'Иллю',
    NECROMANCY_SHORTHAND: 'Некр',
    TRANSMUTATION_SHORTHAND: 'Преоб',
  },
};
