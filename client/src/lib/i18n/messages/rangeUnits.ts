import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const rangeUnits: Messages = {
  [LOCALES.ENGLISH]: {
    SELF: 'Self',
    TOUCH: 'Touch',
    FEET: 'feet',
    MILE: 'mile',
    MILES: 'miles',
    SIGHT: 'Sight',
    UNLIMITED: 'Unlimited',
    SELF_SHORTHAND: 'Slf',
    TOUCH_SHORTHAND: 'Tch',
    FEET_SHORTHAND: 'ft',
    MILE_SHORTHAND: 'mi',
    MILES_SHORTHAND: 'mi',
    SIGHT_SHORTHAND: 'Sight',
    UNLIMITED_SHORTHAND: 'unlim',
  },
  [LOCALES.RUSSIAN]: {
    SELF: 'На себя',
    TOUCH: 'Касание',
    FEET: 'фт',
    MILE: 'миля',
    MILES: 'миль',
    SIGHT: 'Поле зрения',
    UNLIMITED: 'Неограничено',
    SELF_SHORTHAND: 'На себя',
    TOUCH_SHORTHAND: 'Кас',
    FEET_SHORTHAND: 'фт',
    MILE_SHORTHAND: 'миля',
    MILES_SHORTHAND: 'миль',
    SIGHT_SHORTHAND: 'Поле зр',
    UNLIMITED_SHORTHAND: 'Неогр',
  },
};
