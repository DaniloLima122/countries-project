import { TestBed, fakeAsync, tick } from '@angular/core/testing'
import { ThemeService } from './theme.service'
import { take } from 'rxjs/operators';

describe('CountriesService', () => {

  let service  : ThemeService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [ThemeService]
    })
    service = TestBed.inject(ThemeService);
  })

  test('should be created', () => {

    service.getTheme().pipe(take(1)).subscribe(theme => {
      expect(theme).toEqual("light")
    })
    expect(service).toBeTruthy();

  });

  test('should switch theme to dark', () => {

    const spyChangeTheme = jest.spyOn(service, 'changeTheme');


  })


})
