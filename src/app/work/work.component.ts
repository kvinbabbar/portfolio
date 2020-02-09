import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../projects';

import { slideToggleAnimation } from '../animations/slideToggle';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [slideToggleAnimation]
})
export class WorkComponent implements OnInit {
  _projects = [];
  selectedMenu: string;
  projectTotal: number = -1;
  workMenu = ['all', 'graphic design', 'web design', 'app design'];

  get projects() {
    return this._projects;
  }

  constructor() { }

  ngOnInit() {
    this.filterProjects('all');
  }

  filterProjects(keyword: string) {
    keyword = keyword ? keyword.trim() : '';
    this.selectedMenu = keyword;

    this._projects = PROJECTS.filter(project => {
      return project.keywords.toLowerCase().includes(keyword.toLowerCase());
    })
    const newTotal = this._projects.length;

    if(this.projectTotal !== newTotal) {
      this.projectTotal = newTotal;
    } 
  }

}
