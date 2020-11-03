import { gql } from 'apollo-boost';

export const SPELL = gql`
  query Spell($name: String!) {
    spell(name: $name) {
      id
      name {
        en
        ru
      }
      level
      school
      castingTime
      range {
        value
        unit
      }
      duration
      isConcentration
      isRitual
      components {
        verbal
        somatic
        material
      }
      materials {
        en
        ru
      }
      description {
        en
        ru
      }
      source
      tags
      classes
      conditions
      atHigherLevels {
        en
        ru
      }
      atHigherSlots {
        en
        ru
      }
      damageDice {
        dice
        quantity
      }
      damageScale {
        level
        dice {
          dice
          quantity
        }
      }
      damageType
      saveRequired
    }
  }
`;
