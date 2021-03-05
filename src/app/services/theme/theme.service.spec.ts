import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('CountriesService', () => {

  let service  : ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService]
    })
    service = TestBed.inject(ThemeService);
  })

  test('should be created', () => {

    const currentTheme = service.currentTheme.value

    const currentThemeLocalStorage = localStorage.getItem('theme');

    expect(currentTheme).toBe('light');

    expect(currentThemeLocalStorage).toBeNull();

    expect(service).toBeTruthy();

  });

  test('should switch theme from dark to light', () => {

    service.currentTheme.next('dark');

    const spyChangeTheme = jest.spyOn(service, 'changeTheme');

    service.changeTheme();

    const currentTheme = service.currentTheme.value

    const currentThemeLocalStorage = localStorage.getItem('theme');

    expect(spyChangeTheme).toBeCalledTimes(1);

    expect(currentTheme).toBe('light')

    expect(currentThemeLocalStorage).toBe('light')

  })

  test('should switch theme light to dark', () => {

    service.currentTheme.next('light');

    const spyChangeTheme = jest.spyOn(service, 'changeTheme');

    service.changeTheme();

    const currentTheme = service.currentTheme.value

    const currentThemeLocalStorage = localStorage.getItem('theme');

    expect(spyChangeTheme).toBeCalledTimes(1);

    expect(currentTheme).toBe('dark')

    expect(currentThemeLocalStorage).toBe('dark')

  })


})
