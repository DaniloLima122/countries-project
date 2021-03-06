import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountryComponent } from './country.component';

const mockedResolverData =
{
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

}


describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent],
      imports: [RouterTestingModule, FontAwesomeModule, CommonModule, RouterModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                country: mockedResolverData
              }
            }
          }
        },
      ]
    })

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const countryData = component.countryData;

    expect(countryData).toEqual(mockedResolverData);

    expect(component).toBeTruthy();
  });
});
