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
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'work', component: WorkComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
