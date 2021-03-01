import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CountryItem } from '../store/models/country-item.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl =  environment.apiUrl;

  constructor(private http : HttpClient) { }

  listCountries(){
    return this.http.get<CountryItem[]>(this.apiUrl);
  }

}
