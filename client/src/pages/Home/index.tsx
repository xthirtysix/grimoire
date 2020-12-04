import React from 'react';
import {
  HomeAllSpells,
  HomeSchools,
  HomeSpells,
  HomeWave,
  HomeWhyRegister,
} from './components';

export const Home = (): JSX.Element => {
  return (
    <>
      <h1 className="visually-hidden">
        Grimoire - a tool to store, sort and track spells in Dungeons & Dragons games
      </h1>
      <HomeSchools />
      <HomeAllSpells />
      <HomeWhyRegister />
      <HomeWave />
      <HomeSpells />
    </>
  );
};
