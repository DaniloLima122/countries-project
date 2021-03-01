// import { Action } from '@ngrx/store';
import { CountryItem } from '../models/country-item.model';
import { Action } from '@ngrx/store';

export enum CountryActionsTypes {
  SEARCH_COUNTRIES = '[COUNTRIES] SEARCH',
  LIST_COUNTRIES = '[COUNTRIES] LIST',
  LIST_COUNTRIES_SUCCESS = '[COUNTRIES] LIST_SUCCESS',
  FILTER_COUNTRIES = '[COUNTRIES] FILTER',
  FILTER_COUNTRIES_SUCCESS = '[COUNTRIES] FILTER_SUCESS'
}

export class LoadCountries implements Action {
  readonly type = CountryActionsTypes.LIST_COUNTRIES;
}

export class LoadCountriesSuccess implements Action {

  readonly type = CountryActionsTypes.LIST_COUNTRIES_SUCCESS;

  constructor(public payload: CountryItem[]) { }
}

export const search = (country: string): Action => {

  return <Action>{ type: CountryActionsTypes.SEARCH_COUNTRIES, payload: country };
}

export class FilterCountries implements Action {
  readonly type = CountryActionsTypes.FILTER_COUNTRIES;
  constructor(public payload: string) { }
}

export class FilterCountriesSuccess implements Action {
  readonly type = CountryActionsTypes.FILTER_COUNTRIES_SUCCESS;
  constructor(public payload: CountryItem[]) { }
}

// export const filterCountries = (continent : string) : Action  => {

//   return <Action>{type: CountryActionsTypes.LIST_COUNTRIES, payload : continent};
// }

