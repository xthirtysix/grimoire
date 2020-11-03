import { Action } from 'redux';

const initialState = {
  isTranslated: false,
};

export const rootReducer = (
  state = initialState,
  action: Action
): { isTranslated: boolean } => {
  if (action.type === 'SWITCH_LOCALE') {
    return { ...state, isTranslated: !state.isTranslated };
  }
  return state;
};
