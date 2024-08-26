import {Component, OnInit} from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resumeData: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadResumeData('fr');
  }

  onLanguageChanged(lang: string) {
    this.loadResumeData(lang);
  }

  loadResumeData(language: string) {
    this.dataService.getResumeData(language).subscribe(data => {
      this.resumeData = data;
    });
  }
}
