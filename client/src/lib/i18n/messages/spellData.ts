import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const spellData: Messages = {
  [LOCALES.ENGLISH]: {
    spellRequired: 'Required',
    spellConcentration: 'Concentration',
    spellRitual: 'Ritual',
    spellSchool: 'School',
    spellCastingTime: 'Casting time',
    spellClass: 'Class',
    spellClasses: 'Classes',
    spellLevel: 'Level',
    spellAtHigherLevels: 'At higher levels',
    spellAtHigherSlots: 'Using higher spell slots',
    spellTags: 'Tag',
    spellSavingThrow: 'Saving throw',
    spellSaveRequired: 'Saving throw',
    spellDuration: 'Duration',
    spellRange: 'Range',
    spellComponents: 'Components',
    spellBasicDamage: 'Basic damage',
    spellDamageType: 'Damage type',
    spellMaterials: 'Materials',
    spellLearn: 'Learn',
    spellForget: 'Forget',
    nthLevel: 'th level',
    LEVEL_0: 'Cantrip',
    LEVEL_1: '1st',
    LEVEL_2: '2nd',
    LEVEL_3: '3rd',
    LEVEL_4: '4th',
    LEVEL_5: '5th',
    LEVEL_6: '6th',
    LEVEL_7: '7th',
    LEVEL_8: '8th',
    LEVEL_9: '9th',
  },
  [LOCALES.RUSSIAN]: {
    spellRequired: 'Требуется',
    spellConcentration: 'Концентрация',
    spellRitual: 'Ритуал',
    spellSchool: 'Школа',
    spellCastingTime: 'Время произнесения',
    spellClass: 'Класс',
    spellClasses: 'Классы',
    spellLevel: 'Уровень',
    spellAtHigherLevels: 'На более высоких уровнях',
    spellAtHigherSlots: 'Используя ячейки высших уровней',
    spellTags: 'Тэг',
    spellSavingThrow: 'Спасбросок',
    spellSaveRequired: 'Спасбросок',
    spellDuration: 'Длительность',
    spellRange: 'Дальность',
    spellComponents: 'Компоненты',
    spellBasicDamage: 'Базовый урон',
    spellDamageType: 'Тип урона',
    spellMaterials: 'Материалы',
    nthLevel: 'ый уровень',
    spellLearn: 'Выучить',
    spellForget: 'Забыть',
    LEVEL_0: 'Фокус',
    LEVEL_1: '1ый',
    LEVEL_2: '2ой',
    LEVEL_3: '3ий',
    LEVEL_4: '4ый',
    LEVEL_5: '5ый',
    LEVEL_6: '6ой',
    LEVEL_7: '7ой',
    LEVEL_8: '8ой',
    LEVEL_9: '9ый',
  },
};
