import { ObjectId, Collection } from "mongodb";

// DB
export interface Database {
  users: Collection<User>;
  spells: Collection<Spell>;
  grimoires: Collection<Grimoire>;
}

// User
export interface User {
  _id: string;
  token: string;
  name: string;
  avatar: string;
  contact: string;
  currentGrimoire: string;
  grimoires: ObjectId[];
  authorized?: boolean;
}

export interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  didRequest: boolean;
}

// Grimoire
export interface Grimoire {
  _id: ObjectId;
  name: string;
  owner: string;
  characterClasses: CharacterClass[];
  spells: ObjectId[];
  authorized?: boolean;
}

export interface CharacterClass {
  class: string;
  level: number;
}

// Spell
export interface Spell {
  _id: ObjectId;
  name: string;
  level: string;
  school: string;
  castingTime: string;
  duration: Scalar;
  range: Scalar;
  isConcentration: boolean;
  isRitual: boolean;
  components: Components;
  materials?: String;
  description: String;
  source: string;
  tags: string[];
  classes: string[];
  conditions?: [string];
  atHigherLevels?: string;
  atHigherSlots?: string;
  damageDice?: Dice;
  damageScale?: DamageScale[];
  damageType?: string;
  attackType?: string;
  saveRequired?: string;
  authorized?: boolean;
}

export interface Dice {
  quantity: number;
  dice: string;
}

export interface DamageScale {
  level: number;
  dice: Dice;
}

export interface Scalar {
  value?: number;
  unit: string;
}

export interface Components {
  verbal: boolean;
  somatic: boolean;
  material: boolean;
}
