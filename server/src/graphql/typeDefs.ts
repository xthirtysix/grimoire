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

  enum Stat {
    STRENGTH
    CONSTITUTION
    DEXTERITY
    INTELLIGENCE
    WISDOM
    CHARISMA
  }

  enum SpellTag {
    BANISHMENT
    BUFF
    CHARMED
    COMBAT
    COMMUNICATION
    COMPULTION
    CONTROL
    CREATION
    DAMAGE
    DEBUFF
    DECEPTION
    DETECTION
    DUNAMANCY
    ENVIRONMENT
    EXPLORATION
    FOREKNOWLEDGE
    HEALING
    MOVEMENT
    NEGATION
    PSIONIC
    SCRYING
    SHAPECHANGING
    SOCIAL
    SUMMONING
    TELEPORTATION
    UTILITY
    WARDING
  }

  enum Conditions {
    BLINDED
    CHARMED
    DEAFEND
    EXHAUSTION
    FRIGHTENED
    GRAPPLED
    INCAPACITATED
    INVISIBLE
    PARALYZED
    PETRIFIED
    POISONED
    PRONE
    RESTRAINED
    STUNNED
    UNCONSCIOUS
  }

  enum DamageType {
    ACID
    BLUDGEONING
    COLD
    FIRE
    FORCE
    LIGHTNING
    NECROTIC
    PIERCING
    POISON
    PSYCHIC
    RADIANT
    SLASHING
    THUNDER
    SHORTBOW
    LONGBOW
    ONE_HANDED_MELEE
    UNARMED
    NATURAL
    MELEE_WEAPON
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
    LEVEL_ASCENDING
    LEVEL_DESCENDING
    NAME_ASCENDING
    NAME_DESCENDING
  }

  # Spells

  type Spells {
    total: Int!
    result: [Spell!]
  }
  
  type Bilingual {
    en: String!
    ru: String!
  }

  type Spell {
    id: ID!
    name: Bilingual!
    level: Level!
    school: String!
    castingTime: CastingTime!
    #duration: Scalar!
    duration: Duration!
    range: Scalar!
    #range: Range!
    components: Components
    isConcentration: Boolean!
    isRitual: Boolean!
    materials: Bilingual
    description: Bilingual!
    conditions: [Conditions]
    damageDice: Dice
    damageScale: [DamageScale!]
    damageType: DamageType
    attackType: AttackType
    effectType: Conditions
    saveRequired: Stat
    atHigherLevels: Bilingual
    atHigherSlots: Bilingual
    tags: [SpellTag!]!
    classes: [ClassType!]!
    source: String!
  }

  enum DiceType {
    D4
    D6
    D8
    D10
    D12
    D20
    D100
  }

  type Dice {
    quantity: Int!
    dice: DiceType!
  }

  type DamageScale {
    level: Int!
    dice: Dice!
  }

  type Scalar {
    value: Int
    unit: String!
  }
  
  type Range {
    value: Int
    unit: RangeUnit!
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
  
  enum Duration {
    INSTANTANEOUS
    ONE_ROUND
    SIX_ROUNDS
    ONE_MINUTE
    TEN_MINUTES
    ONE_HOUR
    TWO_HOURS
    EIGHT_HOURS
    TWENTYFOUR_HOURS
    ONE_DAY
    SEVEN_DAYS
    TEN_DAYS
    THIRTY_DAYS
    SPECIAL
    UNTIL_DISPELLED
    UNTIL_DISPELLED_OR_TRIGGERED
  }
  
  enum RangeUnit {
    SELF
    TOUCH
    FEET
    MILE
    MILES
    SIGHT
    UNLIMITED
  }
  
  enum AttackType {
    MELEE
    RANGED
  }

  enum Level {
    LEVEL_0
    LEVEL_1
    LEVEL_2
    LEVEL_3
    LEVEL_4
    LEVEL_5
    LEVEL_6
    LEVEL_7
    LEVEL_8
    LEVEL_9
  }

  type Components {
    verbal: Boolean!
    somatic: Boolean!
    material: Boolean!
  }

  # Query

  type Query {
    authUrl: String!
    user(id: ID!): User!
    grimoire(id: ID!): Grimoire!
    spell(name: String!): Spell!
    spells(
      grimoireID: String
      filters: SpellsFilter
      sort: SpellsSort
      limit: Int
    ): Spells!
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

  input SpellsFilter {
    school: [SpellsSchool!]
    castingTime: [CastingTime!]
    level: [Level!]
    classes: [ClassType!]
    saveRequired: [Stat!]
    tags: [SpellTag!]
  }
`;
