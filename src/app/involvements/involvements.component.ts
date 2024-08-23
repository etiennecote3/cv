import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-involvements',
  templateUrl: './involvements.component.html',
  styleUrls: ['./involvements.component.css']
})
export class InvolvementsComponent {
  @Input() resumeData: any;
}
