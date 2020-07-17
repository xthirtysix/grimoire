import { ObjectId, Collection } from "mongodb";

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
  duration: Scalar;
  range: Scalar;
  components: Components;
  materials?: String;
  description: String;
  damage?: Damage;
  source: string;
}

export interface Database {
  spells: Collection<Spell>
}