import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { FilterCountries } from 'src/app/store/actions/countries.actions';


@Component({
  selector: 'dropdown-regions',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('dropDownAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)',
        pointerEvents: 'All'
      })),
      state('hidden', style({
        transform: 'translateY(1rem)',
        pointerEvents: 'none',
        opacity: 0
      })),
      transition('*=>*', animate('.5s ease')),
    ]),
  ]
})
export class DropdownComponent implements OnInit {

  arrownDownIcon = faChevronDown;
  arrownUpIcon = faChevronUp;

  selected_continent = "Filter by Region";

  continents: any = {
    'África': 'Africa',
    'América': 'Americas',
    'Ásia': 'Asia',
    'Europa': 'Europe',
    'Oceania': 'Oceania'
  }

  regionOptions: string[] = Object.keys(this.continents);

  dropDownState = 'hidden';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggle() {
    this.dropDownState = this.dropDownState == 'visible' ? 'hidden' : 'visible';
  }

  filterByRegion(region: string) {

    const continent = this.continents[region];

    this.selected_continent = region

    this.store.dispatch(new FilterCountries(continent))
  }
}
