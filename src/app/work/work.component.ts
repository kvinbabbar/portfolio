import { Component, OnInit, ElementRef } from '@angular/core';
import { Project } from '../project';

import { ProjectsService } from '../services/projects.service';
import { slideToggleAnimation } from '../animations/slideToggle';
import { previewModalAnimation } from '../animations/previewModal';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [slideToggleAnimation, previewModalAnimation]
})
export class WorkComponent implements OnInit {
  totalProjects: Project[] = [];
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

  constructor(private el: ElementRef, private projectService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(data => {
        this.totalProjects = data;
        this.filterProjects('all');
      });
  }

  likedProject(project: Project) {
    project.likes = ++project.likes;
    this.projectService.updateProject(project)
      .subscribe()
  }

  filterProjects(keyword: string) {
    keyword = keyword ? keyword.trim() : '';
    this.selectedMenu = keyword;

    this._projects = this.totalProjects.filter(project => {
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
    project.views = ++project.views;
    this.projectService.updateProject(project).subscribe();
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
