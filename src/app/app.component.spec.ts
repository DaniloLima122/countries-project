import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { routes } from './app-routing.module';
import { HomeModule } from './pages/Home/home.module';
import { ThemeService } from './services/theme/theme.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HomeModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [ThemeService],
      schemas: [NO_ERRORS_SCHEMA]
    })
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



});
