import { gql } from 'apollo-boost'

export const SPELLS = gql`
  query Spells($grimoireID: String, $filters: SpellsFilter, $sort: SpellsSort, $limit: Int) {
    spells(grimoireID: $grimoireID, filters: $filters, sort: $sort, limit: $limit) {
      total
      result {
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
  }
`
