import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CompleteCountryData } from 'src/app/store/models/country-item.model';

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

    this.countryData = this.route.snapshot.data.country
  }
}
