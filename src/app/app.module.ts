import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpperMenuComponent } from './components/upper-menu/upper-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './inner-components/banner/banner.component';
import { AboutMeComponent } from './inner-components/about-me/about-me.component';
import { ExperienceComponent } from './inner-components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperMenuComponent,
    MainContentComponent,
    FooterComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
