import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.css']
})
export class CvSectionComponent {
  @Input() title!: string;
}
