import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountryCardComponent } from 'src/app/components/country-card/country-card.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { InputSearchComponent } from 'src/app/components/input-search/input-search.component';
import { CountryComponent } from './Country/country.component';
import { HomeComponent } from './home.component';
import { CountryResolver } from './Country/country.resolver';

@NgModule({
  declarations: [
    HomeComponent,
    CountryComponent,
    CountryCardComponent,
    InputSearchComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    CountryResolver
  ]
})
export class HomeModule { }
