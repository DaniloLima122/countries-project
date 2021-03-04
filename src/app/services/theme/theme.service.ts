import { BehaviorSubject, of, Observable } from 'rxjs';

export class ThemeService {

  private curentTheme = new BehaviorSubject<string>('light');

  changeTheme() {
    this.curentTheme.next(this.curentTheme.value == 'light' ? 'dark' : 'light');
    this.setThemeOnLocalStorage()
  }

  getTheme() : Observable<string>{
    return of(localStorage.getItem('theme') || 'light')
  }

  private setThemeOnLocalStorage() {
    localStorage.setItem('theme', this.curentTheme.value);
  }

}
