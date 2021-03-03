import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchComponent } from './input-search.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { MockStore } from '@ngrx/store/testing';

class StoreMock  {
  // How we did it before
  select = jasmine.createSpy().and.returnValue(of());
  dispatch = jasmine.createSpy();
}

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;
  let store: Store<AppState>

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [InputSearchComponent],
      providers: [
        {
          provide: Store,
          useClass: StoreMock
        }
      ]
    });

    store = TestBed.inject(MockStore);

  });

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
