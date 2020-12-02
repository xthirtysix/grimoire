import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const castingTimes: Messages = {
  [LOCALES.EN]: {
    ACTION: 'Action',
    BONUS_ACTION: 'Bonus Action',
    EIGHT_HOURS: '8 Hours',
    ONE_HOUR: '1 Hour',
    ONE_MINUTE: '1 Minute',
    REACTION: 'Reaction',
    SPECIAL: 'Special',
    TEN_MINUTES: '10 Minutes',
    TWELVE_HOURS: '12 Hours',
    TWENTYFOUR_HOURS: '24 Hours',
    ACTION_SHORTHAND: '1A',
    BONUS_ACTION_SHORTHAND: 'BA',
    EIGHT_HOURS_SHORTHAND: '8h',
    ONE_HOUR_SHORTHAND: '1h',
    ONE_MINUTE_SHORTHAND: '1m',
    REACTION_SHORTHAND: 'React',
    SPECIAL_SHORTHAND: 'Spcl',
    TEN_MINUTES_SHORTHAND: '10m',
    TWELVE_HOURS_SHORTHAND: '12h',
    TWENTYFOUR_HOURS_SHORTHAND: '24h',
  },
  [LOCALES.RU]: {
    ACTION: 'Действие',
    BONUS_ACTION: 'Бонусное действие',
    EIGHT_HOURS: '8 Часов',
    ONE_HOUR: '1 Час',
    ONE_MINUTE: '1 Минута',
    REACTION: 'Реакция',
    SPECIAL: 'Особое',
    TEN_MINUTES: '10 Минут',
    TWELVE_HOURS: '12 Часов',
    TWENTYFOUR_HOURS: '24 Часа',
    ACTION_SHORTHAND: '1Д',
    BONUS_ACTION_SHORTHAND: 'БД',
    EIGHT_HOURS_SHORTHAND: '8ч',
    ONE_HOUR_SHORTHAND: '1ч',
    ONE_MINUTE_SHORTHAND: '1м',
    REACTION_SHORTHAND: 'Реак',
    SPECIAL_SHORTHAND: 'Спец',
    TEN_MINUTES_SHORTHAND: '10м',
    TWELVE_HOURS_SHORTHAND: '12ч',
    TWENTYFOUR_HOURS_SHORTHAND: '24ч',
  },
};
