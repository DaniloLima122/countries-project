import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/models/app-state.model';
import { CompleteCountryData } from 'src/app/store/models/country-item.model';
import { LoadCountries } from '../../store/actions/countries.actions';
import { trigger, query, style, stagger, animate, transition } from '@angular/animations';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listCountriesAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(15px)' }),
            stagger(
              '.02s',
              animate(
                '.5s ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewChecked {

  countries$ !: Observable<CompleteCountryData[]>;
  loading$ !: Observable<Boolean>;
  error$ !: Observable<HttpErrorResponse | undefined>;

  countryListSize: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.countries$ = this.store.select(store => store.countries.list)
    this.loading$ = this.store.select(store => store.countries.loading);
    this.error$ = this.store.select(store => store.countries?.error);

    this.LoadCountries();
  }


  LoadCountries(){

    this.store.dispatch(new LoadCountries())
  }

  ngAfterViewChecked() {
    this.countries$.pipe(
      map(list => {
        this.countryListSize = list.length;
      }));

  }

}
