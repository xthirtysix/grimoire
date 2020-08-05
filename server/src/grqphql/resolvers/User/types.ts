import {Grimoire, Spell} from '../../../lib/types'

export interface UserArgs {
  id: string;
}

export interface UserGrimoiresData {
  total: number;
  result: Grimoire[]
}