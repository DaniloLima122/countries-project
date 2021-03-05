import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeModule } from './pages/Home/home.module';
import { ThemeService } from './services/theme/theme.service';
import { CountriesEffects } from './store/effects/countries.effect';
import { CountryCardData } from './store/models/country-item.model';
import { CountriesReducer } from './store/reducers/countries.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<ActionReducer<CountryCardData[], Action>>({
      countries : CountriesReducer
    }),
    EffectsModule.forRoot([CountriesEffects]),
    HttpClientModule,
    HomeModule,
    FontAwesomeModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
