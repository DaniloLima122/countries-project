import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  moonIcon = faMoon;
  moonIconSolid = solidMoon;

  actualTheme = 'light'

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void{
    this.actualTheme = this.getCurrentTheme()
  }

  changeTheme() {

    this.themeService.changeTheme();
    this.actualTheme = this.getCurrentTheme()
  }

  getCurrentTheme() : string{

    return this.themeService.currentTheme.value
  }

}
