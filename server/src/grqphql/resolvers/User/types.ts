import {Grimoire} from '../../../lib/types'

export interface UserArgs {
  id: string;
  grimoires: Grimoire[]
}

export interface UserGrimoiresData {
  grimoires: Grimoire[]
}