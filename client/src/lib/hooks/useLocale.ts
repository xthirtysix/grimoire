import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadState } from '../../redux/store';

export const useLocale = (): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    const value = loadState();

    dispatch({ type: value?.language ?? `SET_${value?.language}` });
  }, []);
};
