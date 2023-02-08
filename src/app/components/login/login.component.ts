import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginService) {}

  ngOnInit(): void {
    this.login
      .auth('t@mail.com', '1234')
      .subscribe((data) => console.log(data));
  }
}
