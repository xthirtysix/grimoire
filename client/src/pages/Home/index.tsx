import React from 'react';
import {
  HomeAllSpells,
  HomeSchools,
  HomeSpells,
  HomeWave,
  HomeWhyRegister,
} from './components';
import { displayErrorMessage } from '../../lib/utils';
import { RouteComponentProps } from 'react-router-dom';

export const Home = ({ history }: RouteComponentProps): JSX.Element => {
  const onSearch = (value: string) => {
    const trimmedValue = value
      .trim()
      .split(' ')
      .map((substr) => {
        return substr.toLowerCase() !== 'the'
          ? substr.charAt(0).toUpperCase() + substr.slice(1).toLowerCase()
          : substr.toLowerCase();
      })
      .join(' ');

    if (trimmedValue) {
      history.push(`/spell/${trimmedValue}`);
    } else {
      displayErrorMessage('Please enter a valid search');
    }
  };

  return (
    <>
      <h1 className="visually-hidden">
        Grimoire - a tool to store, sort and track spells in Dungeons & Dragons games
      </h1>
      <HomeSchools onSearch={onSearch} />
      <HomeAllSpells />
      <HomeWhyRegister />
      <HomeWave />
      <HomeSpells />
    </>
  );
};
