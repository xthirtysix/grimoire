import { gql } from 'apollo-boost'

export const SPELL = gql`
  query Spell($name: String!) {
    spell(name: $name) {
      id
      name
      level
      school
      castingTime
      range {
        value
        unit
      }
      duration {
        value
        unit
      }
      isConcentration
      isRitual
      components {
        verbal
        somatic
        material
      }
      materials
      description
      source
      tags
      classes
      conditions
      atHigherLevels
      atHigherSlots
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
`
