import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const spellFilter: Messages = {
  [LOCALES.EN]: {
    schoolPlaceholder: 'Search "Conjuration"',
    castingTimePlaceholder: 'Search "1 action"',
    levelPlaceholder: 'Search "Cantrip" or "1st"',
    classPlaceholder: 'Search "Wizard"',
    savePlaceholder: 'Search "Dexterity"',
    tagPlaceholder: 'Search "Charmed"',
    sortBy: 'Sort by',
    CASTING_TIME_ASCENDING: 'Casting time ascending',
    CASTING_TIME_DESCENDING: 'Casting time descending',
    LEVEL_ASCENDING: 'Level 0-9',
    LEVEL_DESCENDING: 'Level 9-0',
    NAME_ASCENDING: 'Name A-Z',
    NAME_DESCENDING: 'Name Z-A',
  },
  [LOCALES.RU]: {
    schoolPlaceholder: 'Ищите "Вызов"',
    castingTimePlaceholder: 'Ищите "1 действие"',
    levelPlaceholder: 'Ищите "Фокус" или "1ый"',
    classPlaceholder: 'Ищите "Волшебник"',
    savePlaceholder: 'Ищите "Ловкость"',
    tagPlaceholder: 'Ищите "Очарование"',
    sortBy: 'Упорядочить по',
    CASTING_TIME_ASCENDING: 'Время произнесения по возрастанию',
    CASTING_TIME_DESCENDING: 'Время произнесения по убыванию',
    LEVEL_ASCENDING: 'Уровень 0-9',
    LEVEL_DESCENDING: 'Уровень 9-0',
    NAME_ASCENDING: 'Название А-Я',
    NAME_DESCENDING: 'Название Я-А',
  },
};
