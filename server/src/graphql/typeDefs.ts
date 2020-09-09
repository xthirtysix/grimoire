import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # User

  type User {
    id: ID!
    name: String!
    avatar: String!
    contact: String!
    currentGrimoire: String
    grimoires: Grimoires
  }

  type Viewer {
    id: ID
    token: String
    avatar: String
    didRequest: Boolean!
  }

  # Grimoires

  type Grimoires {
    total: Int!
    result: [Grimoire!]!
  }

  type Grimoire {
    id: ID!
    owner: User!
    name: String!
    characterClasses: [CharacterClass!]!
    spells: [ID!]
    authorized: Boolean
  }

  type CharacterClass {
    class: ClassType!
    level: Int!
  }

  enum ClassType {
    BARBARIAN
    BARD
    CLERIC
    DRUID
    FIGHTER
    MONK
    PALADIN
    RANGER
    ROGUE
    SORCERER
    WARLOCK
    WIZARD
  }

  # Spells

  type Spells {
    total: Int!
    result: [Spell!]
  }

  type Spell {
    id: ID!
    name: String!
    level: Int!
    school: String!
    castingTime: CastingTime!
    range: Scalar!
    duration: Scalar!
    isConcentration: Boolean!
    components: Components
    materials: String
    description: String!
    damage: Damage
    source: String!
  }

  type Scalar {
    value: Int
    unit: String!
  }

  enum CastingTime {
    REACTION
    BONUS_ACTION
    ACTION
    ONE_MINUTE
    TEN_MINUTES
    ONE_HOUR
    EIGHT_HOURS
    TWELVE_HOURS
    TWENTYFOUR_HOURS
    SPECIAL
  }

  type Components {
    verbal: Boolean!
    somatic: Boolean!
    material: Boolean!
  }

  type Damage {
    type: String
    isScaleLevel: Boolean
    isScaleSlot: Boolean
    basic: String
    level2: String
    level3: String
    level4: String
    level5: String
    level6: String
    level7: String
    level8: String
    level9: String
    level10: String
    level11: String
    level12: String
    level13: String
    level14: String
    level15: String
    level16: String
    level17: String
    level18: String
    level19: String
    level20: String
  }

  # Query

  enum SpellsFilter {
    ABJURATION
    CONJURATION
    DIVINATION
    ENCHANTMENT
    EVOCATION
    ILLUSION
    NECROMANCY
    TRANSMUTATION
    REACTION
    BONUS_ACTION
    ACTION
    ONE_MINUTE
    TEN_MINUTES
    ONE_HOUR
    EIGHT_HOURS
    TWELVE_HOURS
    TWENTYFOUR_HOURS
    SPECIAL
  }

  type Query {
    authUrl: String!
    user(id: ID!): User!
    grimoire(id: ID!): Grimoire!
    spell(name: String!): Spell!
    spells(
      grimoireID: String
      filters: [SpellsFilter]
      sort: SpellsSort
      limit: Int
    ): Spells!
  }


  enum SpellsSchool {
    ABJURATION
    CONJURATION
    DIVINATION
    ENCHANTMENT
    EVOCATION
    ILLUSION
    NECROMANCY
    TRANSMUTATION
  }

  enum SpellsSort {
    CASTING_TIME_ASCENDING
    CASTING_TIME_DESCENDING
    NAME_ASCENDING
    NAME_DESCENDING
  }

  # Mutation

  type Mutation {
    logIn(input: LogInInput): Viewer!
    logOut: Viewer!
    createGrimoire(input: CreateGrimoireInput!): Grimoire!
    deleteGrimoire(id: ID!): ID
    addSpellToGrimoire(grimoireID: ID!, spellID: ID!): ID
    removeSpellFromGrimoire(grimoireID: ID!, spellID: ID!): ID
  }

  input LogInInput {
    code: String!
  }

  input CreateGrimoireInput {
    name: String!
    characterClasses: [CharacterClassesInput]!
  }

  input CharacterClassesInput {
    class: String
    level: Int
  }
`;
