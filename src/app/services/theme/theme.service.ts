import { BehaviorSubject } from 'rxjs';

export class ThemeService {

  private localStorageTheme = localStorage.getItem('theme') || 'light';

  currentTheme = new BehaviorSubject<string>(this.localStorageTheme);

  changeTheme() {

    this.currentTheme.next(this.currentTheme.value == 'light' ? 'dark' : 'light');

    this.setThemeOnLocalStorage();
  }

  private setThemeOnLocalStorage() {
    localStorage.setItem('theme', this.currentTheme.value);
  }

}
