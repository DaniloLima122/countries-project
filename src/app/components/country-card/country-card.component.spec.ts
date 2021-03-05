import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardComponent } from './country-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('CountryCardComponent', () => {
  let component: CountryCardComponent;
  let fixture: ComponentFixture<CountryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CommonModule]
    })

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
