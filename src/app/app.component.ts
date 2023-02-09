import { Component, OnInit } from '@angular/core';
import { IsLoadingService } from './services/is-loading/is-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean = true;
  constructor(private loginMessage: IsLoadingService) {
    this.loginMessage.data.subscribe((data) => {
      this.loading = !this.loading;
    });
  }
}
