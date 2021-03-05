import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HomeComponent } from './home.component';
import { AppState, CountriesState } from 'src/app/store/models/app-state.model';
import { By } from '@angular/platform-browser';
import{} from 'rxjs/operators'


const storeState: CountriesState = {
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
  loading: true,
  error: undefined
}

const appState: AppState = {

  countries: storeState
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<AppState>


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({ initialState: appState })
      ]
    })
    store = TestBed.inject(MockStore);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })

  it('should create', () => {

    expect(component.countries$).toBeDefined()

    expect(component).toBeTruthy();
  });

});
