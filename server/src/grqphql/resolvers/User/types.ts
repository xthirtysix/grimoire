import {Grimoire, Spell} from '../../../lib/types'

export interface UserArgs {
  id: string;
  currentGrimoire: string;
  grimoires: Grimoire[]
}

export interface UserGrimoiresData {
  total: number;
  result: Grimoire[]
}