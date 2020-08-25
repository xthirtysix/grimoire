import { gql } from 'apollo-boost'

export const SPELL = gql`
  query Spell($name: String!) {
    spell(name: $name) {
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
`
