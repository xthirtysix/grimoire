import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const mainPage: Messages = {
  [LOCALES.ENGLISH]: {
    headerMain: `Find a spell you'd like to cast`,
    allSpellsHeader: 'Not sure which spell to choose?',
    allSpellsSubheader: 'Here you go!',
    allSpellsButton: 'See all spells',
    whyRegisterHeader: 'Why becoming a wizard?',
    whyRegisterSubheader: 'and register on grimoire',
    whyRegisterParagraphOne: `Here you can create Spellbooks where you'll store and sort {strong}. No more no less.`,
    whyRegisterParagraphOneStrong: `just the spells you need`,
    whyRegisterParagraphTwo:
      'Lets {link} into the Weave, and see how your own Grimoire may look like...',
    whyRegisterParagraphTwoLink: 'dive deeper',
    spellsHeader: 'Sample grimoire',
  },
  [LOCALES.RUSSIAN]: {
    headerMain: `Найдите нужное заклинание`,
    allSpellsHeader: 'Не уверены какое заклинание выбрать?',
    allSpellsSubheader: 'Вам сюда!',
    allSpellsButton: 'Все заклинания',
    whyRegisterHeader: 'Зачем становиться волшебником?',
    whyRegisterSubheader: 'и регистрироваться на grimoire',
    whyRegisterParagraphOne: `Здесь вы можете создавать книги заклинаний, в которых вы будете хранить {strong}. Не больше не меньше`,
    whyRegisterParagraphOneStrong: `только те заклинания, которые вам нужны`,
    whyRegisterParagraphTwo:
      'Давайте {link} в Плетение, и посмотрим как может выглядеть ваш Гримуар...',
    whyRegisterParagraphTwoLink: 'погузимся',
    spellsHeader: 'Пример гримуара',
  },
};
