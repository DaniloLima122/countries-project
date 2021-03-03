import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { CountriesService } from './countries.service';
import { CountryCardData } from '../store/models/country-item.model';

const countriesList: CountryCardData[] = [{
  flag: 'flag',
  name: 'Brazil',
  population: 20000,
  region: 'Americas',
  capital: 'Brasília'
},
{

  flag: 'flag',
  name: 'France',
  population: 150000,
  region: 'Europe',
  capital: 'Paris'
},
]

describe('CountriesService', () => {
  let service: CountriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService]
    })

    service = TestBed.get(CountriesService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  test('should return countries list', fakeAsync(() => {

    const spylistCountries = jest.spyOn(service, 'listCountries');

    const subscription = service.listCountries().subscribe(list => {
      expect(list).toEqual(countriesList);
    })

    const req = httpMock.expectOne(`${service.apiUrl}/All`)

    expect(req.request.method).toBe('GET');
    expect(spylistCountries).toHaveBeenCalledTimes(1)

    req.flush(countriesList);

    httpMock.verify();

    subscription.unsubscribe();

    tick();

  }));

  test('should return filtered list by region', fakeAsync(() => {

    const spyfilterByRegion = jest.spyOn(service, 'filterByRegion');

    const subscription = service.filterByRegion('Europe').subscribe(list => {
      expect(list).toEqual(countriesList[1]);
    })

    const req = httpMock.expectOne(`${service.apiUrl}/region/Europe`);

    expect(req.request.method).toBe('GET');
    expect(spyfilterByRegion).toHaveBeenCalledTimes(1)

    req.flush(countriesList);

    httpMock.verify();

    subscription.unsubscribe();

    tick();

  }));

  test('should return searched country', fakeAsync(() => {

    const spyfilterByRegion = jest.spyOn(service, 'filterByRegion');

    const subscription = service.searchCountry('Brazil').subscribe(list => {
      expect(list).toEqual(countriesList[0]);
    })

    const req = httpMock.expectOne(`${service.apiUrl}/name/Brazil`)

    expect(req.request.method).toBe('GET');
    expect(spyfilterByRegion).toHaveBeenCalledTimes(1)

    req.flush(countriesList);

    httpMock.verify();

    subscription.unsubscribe();

    tick();

  }));
});
