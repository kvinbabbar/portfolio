import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { SkillsComponent } from './skills/skills.component'
import { EducationComponent } from './education/education.component'
import { ExperienceComponent } from './experience/experience.component'
import { WorkComponent } from './work/work.component'
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  {path: '', redirectTo: "about", pathMatch: "full"},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'skills', component: SkillsComponent, data: {title: 'Skills'}},
  {path: 'education', component: EducationComponent, data: {title: 'Education'}},
  {path: 'experience', component: ExperienceComponent, data: {title: 'Experience'}},
  {path: 'work', component: WorkComponent, data: {title: 'Work'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
