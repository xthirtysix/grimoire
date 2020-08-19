import { ObjectId, Collection } from "mongodb";

export interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  didRequest: boolean;
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

export interface Damage {
  type?: string;
  isScaleLevel?: boolean;
  isScaleSlot?: boolean;
  basic?: string;
  level2?: string;
  level3?: string;
  level4?: string;
  level5?: string;
  level6?: string;
  level7?: string;
  level8?: string;
  level9?: string;
  level10?: string;
  level11?: string;
  level12?: string;
  level13?: string;
  level14?: string;
  level15?: string;
  level16?: string;
  level17?: string;
  level18?: string;
  level19?: string;
  level20?: string;
}

export interface Spell {
  _id: ObjectId;
  name: string;
  level: number;
  school: string;
  castingTime: Scalar;
  range: Scalar;
  duration: Scalar;
  isConcentration: boolean;
  components: Components;
  materials?: String;
  description: String;
  damage?: Damage;
  source: string;
  authorized?: boolean;
}

export interface CharacterClass {
  class: string;
  level: number;
}

export interface Grimoire {
  _id: ObjectId;
  name: string;
  owner: string;
  characterClasses: CharacterClass[];
  spells: ObjectId[];
  authorized?: boolean;
}

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

export interface Database {
  users: Collection<User>;
  spells: Collection<Spell>;
  grimoires: Collection<Grimoire>;
}
