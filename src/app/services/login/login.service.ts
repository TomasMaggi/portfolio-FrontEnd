import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  auth(p_mail: string, p_password: string) {
    const BASE_URL: string =
      'https://ap-restapi.onrender.com/api/v1/auth/authenticate';

    return this.http.post<any>(BASE_URL, {
      email: p_mail,
      password: p_password,
    });
  }
}
