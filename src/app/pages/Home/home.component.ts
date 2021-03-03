import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/models/app-state.model';
import { CompleteCountryData } from 'src/app/store/models/country-item.model';
import { LoadCountries } from '../../store/actions/countries.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries$ !: Observable<CompleteCountryData[]>;
  loading$ !: Observable<Boolean>;
  error$ !: Observable<HttpErrorResponse | undefined>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.countries$ = this.store.select(store => store.countries.list);
    this.loading$ = this.store.select(store => store.countries.loading);
    this.error$ = this.store.select(store => store.countries?.error);

    this.store.dispatch(new LoadCountries())
  }

}
