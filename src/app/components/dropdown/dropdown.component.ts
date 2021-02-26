import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dropdown-regions',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('dropDownAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)',
        pointerEvents: 'All'
      })),
      state('hidden', style({
        transform: 'translateY(1rem)',
        pointerEvents: 'none',
        opacity: 0
      })),
      transition('*=>*', animate('.5s ease')),
    ]),
  ]
})
export class DropdownComponent implements OnInit {

  arrownDownIcon = faChevronDown;
  arrownUpIcon = faChevronUp;

  dropDownState = 'hidden';

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.dropDownState = this.dropDownState == 'visible' ? 'hidden' : 'visible';
  }
}
