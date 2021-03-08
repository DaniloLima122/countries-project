import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { routes } from './app-routing.module';
import { HomeModule } from './pages/Home/home.module';
import { ThemeService } from './services/theme/theme.service';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

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
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;


    expect(app).toBeTruthy();
  });

  test('should define current theme', () => {

    const spyInit = jest.spyOn(app, 'ngOnInit');

    app.ngOnInit()

    expect(spyInit).toBeCalled();
    expect(app.theme).toBeDefined();

  })

});
