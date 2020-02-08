import { Component, OnInit } from '@angular/core';
import { progressBarAnimation } from '../animations/progress-bar'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [progressBarAnimation]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
