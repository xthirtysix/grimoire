import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { Spells as SpellsData } from "./__generated__/Spells";

const SPELLS = gql`
  query Spells {
    spells {
      id
      name
      level
      school
      castingTime {
        value
        unit
      }
      range {
        value
        unit
      }
      duration {
        value
        unit
      }
      isConcentration
      components {
        verbal
        somatic
        material
      }
      materials
      description
      damage {
        type
        isScaleLevel
        isScaleSlot
        basic
        level2
        level3
        level4
        level5
        level6
        level7
        level8
        level9
        level10
        level11
        level12
        level13
        level14
        level15
        level16
        level17
        level18
        level19
        level20
      }
      source
    }
  }
`;

export const Spells = () => {
  const { data, loading, error } = useQuery<SpellsData>(SPELLS);

  const spells = data ? data.spells : null;

  const spellList = spells ? (
    <ul>
      {spells.map((spell) => {
        return <li key={spell.id}>{spell.name}</li>;
      })}
    </ul>
  ) : null;

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <>
      <h2>Spells</h2>
      {spellList}
    </>
  );
};
