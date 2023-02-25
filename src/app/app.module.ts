import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { UpperMenuComponent } from './components/upper-menu/upper-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './inner-components/banner/banner.component';
import { AboutMeComponent } from './inner-components/about-me/about-me.component';
import { ExperienceComponent } from './inner-components/experience/experience.component';
import { EducationComponent } from './inner-components/education/education.component';
import { SkillsComponent } from './inner-components/skills/skills.component';
import { ProjectsComponent } from './inner-components/projects/projects.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ExperienceComponentComponent } from './content-components/experience-component/experience-component.component';
import { EducationComponentComponent } from './content-components/education-component/education-component.component';
import { SkillComponentComponent } from './content-components/skill-component/skill-component.component';
import { ProjectComponentComponent } from './content-components/project-component/project-component.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TimelimitCheckerInterceptor } from './timelimit-checker.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UpperMenuComponent,
    MainContentComponent,
    FooterComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    ExperienceComponentComponent,
    EducationComponentComponent,
    SkillComponentComponent,
    ProjectComponentComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimelimitCheckerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
