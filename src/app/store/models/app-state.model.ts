import { CountryCardData } from './country-item.model';
import { HttpErrorResponse } from '@angular/common/http';


export interface CountriesState{
  list: CountryCardData[],
  loading: boolean,
  error: HttpErrorResponse | undefined
}

export interface AppState{
  readonly countries: CountriesState;
}
