import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type CharacterClass {
    class: String!
    level: Int!
  }

  type Grimoires {
    total: Int!
    result: [Grimoire!]!
  }

  type Spells {
    toal: Int!
    result: [Spell!]!
  }

  type Grimoire {
    id: ID!
    owner: User!
    name: String!
    owner: User! 
    characterClasses: [CharacterClass!]!
    spells: Spells
    authorized: Boolean
  }

  type User {
    id: ID!
    name: String!
    avatar: String!
    contact: String!
    currentGrimoire: String
    grimoires: Grimoires
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

  type Viewer {
    id: ID
    token: String
    avatar: String
    didRequest: Boolean!
  }

  type Query {
    authUrl: String!
    user(id: ID!): User!
    grimoire(id: ID!): Grimoire!
    spell(id: ID!): Spell!
    spells: [Spell!]!
  }

  input LogInInput {
    code: String!
  }

  type Mutation {
    logIn(input: LogInInput): Viewer!
    logOut: Viewer!
    setCurrentGrimoire(id: ID!): User!
  }
`;
