// import { Action } from '@ngrx/store';
import { CompleteCountryData } from '../models/country-item.model';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum CountryActionsTypes {
  LIST_COUNTRIES = '[COUNTRIES] LIST',
  LIST_COUNTRIES_SUCCESS = '[COUNTRIES] LIST_SUCCESS',
  FILTER_COUNTRIES = '[COUNTRIES] FILTER',
  FILTER_COUNTRIES_SUCCESS = '[COUNTRIES] FILTER_SUCCESS',
  SEARCH_COUNTRIES = '[COUNTRIES] SEARCH',
  SEARCH_COUNTRIES_SUCCESS = '[COUNTRIES] SEARCH_SUCCESS',
  HANDLE_ERROR = '[ERROR] HANDLE_ERROR'
}

export class LoadCountries implements Action {
  readonly type = CountryActionsTypes.LIST_COUNTRIES;

}

export class LoadCountriesSuccess implements Action {

  readonly type = CountryActionsTypes.LIST_COUNTRIES_SUCCESS;

  constructor(public payload: CompleteCountryData[]) { }
}

export class FilterCountries implements Action {
  readonly type = CountryActionsTypes.FILTER_COUNTRIES;
  constructor(public payload: string) { }
}

export class FilterCountriesSuccess implements Action {
  readonly type = CountryActionsTypes.FILTER_COUNTRIES_SUCCESS;
  constructor(public payload: CompleteCountryData[]) { }
}


export class SearchCountries implements Action {
  readonly type = CountryActionsTypes.SEARCH_COUNTRIES;
  constructor(public payload: string) { }
}

export class SearchCountriesSuccess implements Action {
  readonly type = CountryActionsTypes.SEARCH_COUNTRIES_SUCCESS;
  constructor(public payload: CompleteCountryData[]) { }
}

export class HandleError implements Action{

  readonly type = CountryActionsTypes.HANDLE_ERROR;

  constructor(public payload: HttpErrorResponse) { }

}
