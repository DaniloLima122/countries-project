import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CountryCardComponent } from 'src/app/components/country-card/country-card.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { InputSearchComponent } from 'src/app/components/input-search/input-search.component';
import { HomeComponent } from './home.component';
import { CountriesState } from '../../store/models/app-state.model'
import { NO_ERRORS_SCHEMA } from '@angular/core';


const storeState : any = {
  list: [{
    flag: "flag",
    name: "Brazil",
    population: 200000,
    region: 'Americas',
    capital: 'Brasília',
    nativeName: 'Brazil',
    subregion: 'string',
    currencies: [{
      name: 'string'
    }],
    languages: [{
      name: 'string'
    }],
    topLevelDomain: ['.br'],
    borders: ['AC']
  }],
  loading: false,
  error: undefined
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, InputSearchComponent, DropdownComponent, CountryCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore(storeState)
      ]
    }).compileComponents()
      .then(() => {
        store = TestBed.inject(MockStore);
      })
      .catch(() => {})
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
