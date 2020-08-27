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
    spells: Spells!
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

  type GrimoireSpells {
    total: Int!
    result: [Spell]!
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
    castingTime: Scalar!
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

  type Query {
    authUrl: String!
    user(id: ID!): User!
    grimoire(id: ID!): Grimoire!
    spell(name: String!): Spell!
    spells(filter: SpellsFilter, limit: Int): Spells!
  }

  enum SpellsFilter {
    LEVEL_LOW_TO_HIGH
    LEVEL_HIGH_TO_LOW
    ABJURATION
    CONJURATION
    DIVINATION
    ENCHANTMENT
    EVOCATION
    ILLUSION
    NECROMANCY
    TRANSMUTATION
  }

  # Mutation

  type Mutation {
    logIn(input: LogInInput): Viewer!
    logOut: Viewer!
    setCurrentGrimoire(id: ID!): User!
    createGrimoire(input: CreateGrimoireInput!): Grimoire!
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
