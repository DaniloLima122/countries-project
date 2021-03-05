import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HomeComponent } from './home.component';


const storeState: any = {
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
      declarations: [HomeComponent],
      imports: [ BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore(storeState)
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
