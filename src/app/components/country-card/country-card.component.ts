import { Component, OnInit, Input } from '@angular/core';
import { CountryItem } from 'src/app/store/models/country-item.model';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() country !: CountryItem;

  constructor() { }

  ngOnInit(): void {
  }

}
