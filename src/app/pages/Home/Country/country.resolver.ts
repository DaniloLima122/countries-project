import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/countries.service';
import { CompleteCountryData } from 'src/app/store/models/country-item.model';


@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<CompleteCountryData>{

  constructor(private countryService : CountriesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<CompleteCountryData> {

    let countryName = route.params.country;

    return this.countryService.searchCountry(countryName).pipe(switchMap(data => data));
  }
}
