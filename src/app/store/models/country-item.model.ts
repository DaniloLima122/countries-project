import { Action } from '@ngrx/store';

export class ActionsModel implements Action{
  type : string = "";
  payload?: string = "";
}

export interface CountryItem{
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}
