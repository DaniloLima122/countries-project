import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dropdown-regions',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('dropDownAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)',
        poitnerEvents: 'All'
      })),
      state('hidden', style({
        transform: 'translateY(1rem)',
        poitnerEvents: 'All'
      })),
      transition('*=>*', animate('1500ms')),
    ]),
  ]
})
export class DropdownComponent implements OnInit {

  arrownDownIcon = faChevronDown;

  dropDownState = 'visible';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.dropDownState = this.dropDownState == 'visible' ? 'hidden' : 'visible';
  }
}
