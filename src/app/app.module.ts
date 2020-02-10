import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
    SidebarComponent,
    PageNotfoundComponent,
    TabsComponent,
    TabComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
