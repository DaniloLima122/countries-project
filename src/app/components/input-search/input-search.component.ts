import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { SearchCountries } from 'src/app/store/actions/countries.actions';
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
          filter((value : string) => value.length > 0),
          debounceTime(1000))
          .subscribe(value =>{
            this.searchCountries(value)
        })
  }

  searchCountries(country: string) {
    this.store.dispatch(new SearchCountries(country))
  }

  ngOnDestroy() {

    this.eventSubscription.unsubscribe()
  }



}
