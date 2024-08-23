import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() languageChanged = new EventEmitter<string>();

  onLanguageChanged(lang: string) {
    this.languageChanged.emit(lang);
  }
}
