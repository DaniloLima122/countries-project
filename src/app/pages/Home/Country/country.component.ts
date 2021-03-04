import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { CompleteCountryData } from 'src/app/store/models/country-item.model';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryData !: CompleteCountryData;
  arrowLeftIcon = faArrowLeft;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.pipe(map(({ country }) => this.countryData = country), take(1)).subscribe();
  }
}
