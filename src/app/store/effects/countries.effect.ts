import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryActionsTypes, LoadCountries, LoadCountriesSuccess, FilterCountries, FilterCountriesSuccess, SearchCountries, SearchCountriesSuccess, HandleError } from '../actions/countries.actions';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class CountriesEffects {


  @Effect() loadCountries = this.actions$
    .pipe(
      ofType<LoadCountries>(CountryActionsTypes.LIST_COUNTRIES),
      mergeMap(
        () => this.countriesService.listCountries()
          .pipe(
            map(countries_list => new LoadCountriesSuccess(countries_list)))
      ),
      catchError((error: HttpErrorResponse) => of(new HandleError(error)))
    )

    @Effect() filterCountriesByRegion = this.actions$
    .pipe(
      ofType<FilterCountries>(CountryActionsTypes.FILTER_COUNTRIES),
      mergeMap(
        (region_name) => this.countriesService.filterByRegion(region_name.payload)
          .pipe(
            map(filtered_list => new FilterCountriesSuccess(filtered_list)))
      ),
      catchError((error: HttpErrorResponse) =>  of(new HandleError(error)))
    )

    @Effect() searchCountries = this.actions$
    .pipe(
      ofType<SearchCountries>(CountryActionsTypes.SEARCH_COUNTRIES),
      mergeMap(
        (country_name) => this.countriesService.searchCountry(country_name.payload)
          .pipe(
            map(country => new SearchCountriesSuccess(country)))
      ),
      catchError((error: HttpErrorResponse) => of(new HandleError(error)))
    )


  constructor(
    private actions$: Actions,
    private countriesService: CountriesService) { }
}
