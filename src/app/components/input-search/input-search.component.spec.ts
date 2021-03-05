import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/models/app-state.model';
import { InputSearchComponent } from './input-search.component';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;
  let store: Store<AppState>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore()
      ]
    })

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
