import { CountryItem } from './country-item.model';
import { HttpErrorResponse } from '@angular/common/http';


export interface CountriesState{
  list: CountryItem[],
  loading: boolean,
  error?: HttpErrorResponse
}

export interface AppState{
  readonly countries: CountriesState;
}
