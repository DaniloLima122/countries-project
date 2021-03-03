import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { CompleteCountryData } from 'src/app/store/models/country-item.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryData !: CompleteCountryData;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.data.pipe(map(({ country }) => this.countryData = country), take(1)).subscribe();

    console.log(this.countryData)
  }

  returnHome() {
    this.router.navigate(['home'])
  }
}
