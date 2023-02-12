import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from '../components/main-content/main-content.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
