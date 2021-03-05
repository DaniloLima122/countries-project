import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './pages/Home/Country/country.component';
import { HomeComponent } from './pages/Home/home.component';
import { CountryResolver } from './pages/Home/Country/country.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'country/:country',
    component: CountryComponent,
    resolve: {
      country : CountryResolver
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
