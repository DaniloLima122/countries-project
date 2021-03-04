import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { LoadCountries, SearchCountries } from 'src/app/store/actions/countries.actions';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit, OnDestroy {

  searchIcon = faSearch;

  eventSubscription !: Subscription;

  formControl = new FormControl("");

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.eventSubscription = this.formControl.valueChanges
        .pipe(
          map((value : string) => value),
          debounceTime(500),
          distinctUntilChanged()
          )
          .subscribe(value =>{

            value.length > 0  ?  this.searchCountries(value) : this.listAllCountries()
        }, (error) => console.log(error))
  }

  listAllCountries() {
    this.store.dispatch(new LoadCountries())
  }

  searchCountries(country: string) {
    this.store.dispatch(new SearchCountries(country))
  }

  ngOnDestroy() {

    this.eventSubscription.unsubscribe()
  }



}
