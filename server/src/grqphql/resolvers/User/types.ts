import {Grimoire} from '../../../lib/types'

export interface UserArgs {
  id: string;
}

export interface UserGrimoiresArgs {
  limit: number;
  page: number;
}

export interface UserGrimoiresData {
  total: number;
  result: Grimoire[]
}