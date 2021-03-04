import { Component, OnInit } from '@angular/core';
import {faMoon} from '@fortawesome/free-regular-svg-icons';
import {faMoon as solidMoon} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  moonIcon = faMoon;
  moonIconSolid = solidMoon;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  changeTheme() :  void{
    this.themeService.changeTheme()
  }

  getCurrentTheme() : Observable<string>{
    return this.themeService.getTheme()
  }

}
