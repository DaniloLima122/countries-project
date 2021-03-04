import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchComponent } from './input-search.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;
  let store: Store<AppState>

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [InputSearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(store).toBeDefined();
    expect(component).toBeTruthy();
  });

  test('should list all countries when input value size is 0' ,() => {

    const spyGetAllCountries = jest.spyOn(component, 'listAllCountries');

    component.listAllCountries();

    component.formControl.setValue("");

    const searchText = component.formControl.value;

    expect(spyGetAllCountries).toBeCalledTimes(1)
    expect(searchText).toHaveLength(0)

  })

  test('should search countrie when input value size is greater than 0' ,() => {

    const spySearchCountries = jest.spyOn(component, 'searchCountries');

    component.formControl.setValue("Brazil");

    const searchText = component.formControl.value;

    component.searchCountries(searchText);

    expect(spySearchCountries).toBeCalledTimes(1)
    expect(searchText.length).toBeGreaterThan(0)

  })


});
