import { LOCALES } from '../../constants';

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

export const dices: Messages = {
  [LOCALES.EN]: {
    D4: 'd4',
    D6: 'd6',
    D8: 'd8',
    D10: 'd10',
    D12: 'd12',
    D20: 'd20',
    D100: 'd100',
  },
  [LOCALES.RU]: {
    D4: 'к4',
    D6: 'к6',
    D8: 'к8',
    D10: 'к10',
    D12: 'к12',
    D20: 'к20',
    D100: 'к100',
  },
};
