import { Action, createStore } from 'redux';
import throttle from 'lodash.throttle';

export enum LANGUAGE {
  EN = 'EN',
  RU = 'RU',
}

interface State {
  language: LANGUAGE;
}

export const loadState = (): State => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return { language: LANGUAGE.RU };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { language: LANGUAGE.RU };
  }
};

const saveState = (state: State): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

export const rootReducer = (state = persistedState, action: Action): State => {
  if (action.type === 'SWITCH_LANGUAGE') {
    const newState = state && state.language === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN;
    return { ...state, language: newState };
  }

  if (action.type === 'SET_RU') {
    return { ...state, language: LANGUAGE.RU };
  }

  if (action.type === 'SET_EN') {
    return { ...state, language: LANGUAGE.EN };
  }

  return state;
};

export const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      language: store.getState().language,
    });
  }, 1000)
);
