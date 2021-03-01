import { CountryItem } from './country-item.model';


export interface CountriesState{
  list: CountryItem[],
  loading: boolean
}

export interface AppState{
  readonly countries: CountriesState;
}
