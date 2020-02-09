import { Component, OnInit, ElementRef } from '@angular/core';
import { PROJECTS } from '../projects';
import { Project } from '../project';

import { slideToggleAnimation } from '../animations/slideToggle';
import { previewModalAnimation } from '../animations/previewModal';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [slideToggleAnimation, previewModalAnimation]
})
export class WorkComponent implements OnInit {
  _projects = [];
  selectedMenu: string;
  projectTotal: number = -1;
  workMenu = ['all', 'graphic design', 'web design', 'app design'];
  openPreview: boolean = false;
  currentProject: Project;
  slideNo: number;

  get projects() {
    return this._projects;
  }

  constructor(private el: ElementRef) { }

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

  previewBig(project: Project, i: number) {
    this.currentProject = project;
    this.slideNo = ++i;
    this.el.nativeElement.closest('body').style.overflow = "hidden";
    this.openPreview = true;

  }
  closePreview() {
    this.currentProject = null;
    this.slideNo = null;
    this.el.nativeElement.closest('body').style.overflow = "initial";
    this.openPreview = false;
  }
}
