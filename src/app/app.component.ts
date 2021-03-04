import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private themeService: ThemeService){}

  getTheme() : Observable<string>{
    return this.themeService.getTheme();
  }

}
