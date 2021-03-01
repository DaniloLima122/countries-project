import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryActionsTypes, LoadCountries, LoadCountriesSuccess, FilterCountries, FilterCountriesSuccess } from '../actions/countries.actions';

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

    @Effect() filterCountriesByRegion = this.actions$
    .pipe(
      ofType<FilterCountries>(CountryActionsTypes.FILTER_COUNTRIES),
      mergeMap(
        (data) => this.countriesService.filterByRegion(data.payload)
          .pipe(
            map(filtered_list => new FilterCountriesSuccess(filtered_list)))
      ),
      catchError(error => { throw new Error(error) })
    )


  constructor(
    private actions$: Actions,
    private countriesService: CountriesService) { }
}
