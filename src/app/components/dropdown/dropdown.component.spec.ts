import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FontAwesomeModule, BrowserAnimationsModule],
      providers: [
        provideMockStore(storeState)
      ]
    })
    // .compileComponents()
    // .then(() => {
    // })
    // .catch((e) => console.log(e))
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
