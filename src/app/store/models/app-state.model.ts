import { HttpErrorResponse } from '@angular/common/http';
import { CompleteCountryData } from './country-item.model';


export interface CountriesState{
  list: CompleteCountryData[],
  loading: boolean,
  error: HttpErrorResponse | undefined
}

export interface AppState{
  readonly countries: CountriesState;
}
