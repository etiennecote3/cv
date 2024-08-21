import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getResumeData(language: string): Observable<any> {
    const dataUrl = `assets/i18n/${language}.json`;
    return this.http.get(dataUrl);
  }
}
