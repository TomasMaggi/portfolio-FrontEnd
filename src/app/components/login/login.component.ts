import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginService) {}

  onSubmit(email: string, password: string) {
    console.log(email, password);

    this.login.auth(email, password).subscribe((data) => {
      localStorage.setItem('jwt', data['token']);
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('jwt'));
  }
}
