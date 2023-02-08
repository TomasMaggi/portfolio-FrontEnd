import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  auth(p_mail: string, p_password: string) {
    const BASE_URL: string = 'http://localhost:8080/api/v1/auth/authenticate';

    return this.http.post<any>(BASE_URL, {
      email: p_mail,
      password: p_password,
    });
  }
}
