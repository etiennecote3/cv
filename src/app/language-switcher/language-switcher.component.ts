import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  @Output() languageChanged = new EventEmitter<string>();

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    if (browserLang && browserLang.match(/en|fr/)) {
      this.setLanguage(browserLang);
    } else {
      this.setLanguage('en');
    }
  }

  switchLang(lang: string) {
    this.setLanguage(lang);
  }

  private setLanguage(lang: string) {
    this.translate.use(lang);
    this.languageChanged.emit(lang);
  }
}
