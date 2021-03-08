import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  theme =  'light';

  constructor(private themeService: ThemeService){}

  ngOnInit(){

    this.themeService.currentTheme.subscribe(theme => this.theme = theme)

  }


}
