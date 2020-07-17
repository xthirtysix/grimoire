import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Spell {
    id: ID!
    name: String!
    level: Int!
    school: String!
    castingTime: Scalar!
    duration: Scalar!
    range: Scalar!
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

  type Query {
    spells: [Spell!]!
  }
`;
