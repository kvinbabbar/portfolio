import { Component, OnInit, Input } from '@angular/core';
import { progressBarAnimation } from '../../animations/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  animations: [progressBarAnimation]
})
export class ProgressBarComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;
  @Input() progress: number;

  constructor() { }

  ngOnInit() {
  }

}
