import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountryComponent } from './country.component';
import { CountryResolver } from './country.resolver';

@NgModule({
  declarations: [
    CountryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [
    CountryResolver
  ]
})
export class CountryModule { }
