import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { FilterCountries } from 'src/app/store/actions/countries.actions';


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
        provideMockStore({initialState: storeState})
      ]
    })

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

  test('should filter countries by region', () => {

    const spyDispatch = jest.spyOn(store, 'dispatch');

    const spyfilterByRegion = jest.spyOn(component, 'filterByRegion');

    const expectedAction = new FilterCountries('Asia');

    component.filterByRegion('Ásia');

    expect(spyfilterByRegion).toBeCalledTimes(1);
    expect(spyDispatch).toBeCalledTimes(1);
    expect(spyDispatch).toBeCalledWith(expectedAction);

  })

  test('should toggle continents container dropdown to visible', () => {

      component.dropDownState = 'hidden';

      const spyToggle = jest.spyOn(component , 'toggle');

      const spanItem :  ElementRef<HTMLSpanElement> = fixture.debugElement.query(By.css('.dropdownContainer > span'))

      spanItem.nativeElement.click();

      expect(spyToggle).toBeCalledTimes(1);

      expect(component.dropDownState).toBe('visible')
  })

  test('should toggle continents container dropdown to hidden', () => {

      component.dropDownState = 'visible';

      const spyToggle = jest.spyOn(component , 'toggle');

      const spanItem :  ElementRef<HTMLSpanElement> = fixture.debugElement.query(By.css('.dropdownContainer > span'))

      spanItem.nativeElement.click();

      expect(spyToggle).toBeCalledTimes(1);

      expect(component.dropDownState).toBe('hidden')
  })

});
