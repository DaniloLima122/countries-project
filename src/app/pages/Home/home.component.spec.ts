import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { } from 'rxjs/operators';
import { LoadCountries } from 'src/app/store/actions/countries.actions';
import { AppState, CountriesState } from 'src/app/store/models/app-state.model';
import { HomeComponent } from './home.component';


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

    const spyLoadCountries = jest.spyOn(component, 'LoadCountries');

    component.ngOnInit();

    expect(spyLoadCountries).toBeCalledTimes(1);
    expect(component.countries$).toBeDefined();

    expect(component).toBeTruthy();
  });

  test('should Load countries dispatch actin Load Countries', () => {

    const spyDispatch = jest.spyOn(store, 'dispatch');

    const expectedAction = new LoadCountries();

    component.LoadCountries();

    expect(spyDispatch).toBeCalledTimes(1);
    expect(spyDispatch).toBeCalledWith(expectedAction);
  })
});
