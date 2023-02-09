import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsLoadingService } from 'src/app/services/is-loading/is-loading.service';
import { LoginService } from 'src/app/services/login/login.service';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private login: LoginService,
    private router: Router,
    private loading_message: IsLoadingService
  ) {
    this.loading_message.sendData(true);
  }

  onSubmit(email: string, password: string) {
    this.login.auth(email, password).subscribe((data) => {
      localStorage.setItem('jwt', data['token']);
      this.router.navigate(['/home']).then(() => window.location.reload());
    });
  }

  ngOnInit(): void {}
}
