import { Action } from '@ngrx/store';

export class ActionsModel implements Action{
  type : string = "";
  payload?: string = "";
}

export interface CountryCardData{
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export interface CompleteCountryData {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName : string,
  subregion : string,
  currencies: [{
    name: string
  }],
  languages : [{
    name : string
  }],
  topLevelDomain: Array<string>,
  borders: Array<string>
}
