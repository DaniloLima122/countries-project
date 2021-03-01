import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HeaderComponent } from './components/header/header.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { HomeComponent } from './pages/Home/home.component';
import { CountriesReducer } from './store/reducers/countries.reducer';
import { CountryItem } from './store/models/country-item.model';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from './store/effects/countries.effect';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputSearchComponent,
    DropdownComponent,
    CountryCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<ActionReducer<CountryItem[], Action>>({
      countries : CountriesReducer
    }),
    EffectsModule.forRoot([CountriesEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
