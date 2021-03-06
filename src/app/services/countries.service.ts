import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompleteCountryData } from '../store/models/country-item.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listCountries() {
    return this.http.get<CompleteCountryData[]>(`${this.apiUrl}/all`);
  }

  filterByRegion(region: string) {
    return this.http.get<CompleteCountryData[]>(`${this.apiUrl}/region/${region}`);
  }

  searchCountry(countrieName: string) {
    return this.http.get<CompleteCountryData[]>(`${this.apiUrl}/name/${countrieName}`);
  }
}
