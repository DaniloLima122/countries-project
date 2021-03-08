import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        ThemeService
      ]
    })

    service = TestBed.inject(ThemeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeDefined();
  });

  test('should switch theme to dark when clicking on button', () => {

    service.currentTheme.next('light')
    component.actualTheme = 'light';

    const spyGetCurrentTheme = jest.spyOn(component, 'changeTheme');

    const button: ElementRef<HTMLButtonElement> = fixture.debugElement.query(By.css('.themebuttonContainer'))

    button.nativeElement.click();

    expect(spyGetCurrentTheme).toBeCalledTimes(1);

    expect(component.actualTheme).toBe('dark')
  })

  test('should switch theme to light when clicking on button', () => {

    service.currentTheme.next('dark')

    component.actualTheme = 'dark';

    const spyGetChangeTheme = jest.spyOn(component, 'changeTheme');

    const button: ElementRef<HTMLButtonElement> = fixture.debugElement.query(By.css('.themebuttonContainer'))

    button.nativeElement.click();

    expect(spyGetChangeTheme).toBeCalledTimes(1);

    expect(component.actualTheme).toBe('light')
  })
});
