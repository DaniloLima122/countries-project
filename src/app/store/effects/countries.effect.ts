import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryActionsTypes, LoadCountries, LoadCountriesSuccess } from '../actions/countries.actions';

@Injectable()
export class CountriesEffects {


  @Effect() loadCountries = this.actions$
    .pipe(
      ofType<LoadCountries>(CountryActionsTypes.LIST_COUNTRIES),
      mergeMap(
        () => this.countriesService.listCountries()
          .pipe(
            map(data => new LoadCountriesSuccess(data)))
      ),
      catchError(error => { throw new Error(error) })
    )


  constructor(
    private actions$: Actions,
    private countriesService: CountriesService) { }
}
