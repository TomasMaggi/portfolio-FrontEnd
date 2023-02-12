import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ComponentGeneratorService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'https://ap-restapi.onrender.com/api/v1/';

  add(p_url: string, dataload: any) {
    const url = this.BASE_URL + p_url;
    const token = localStorage.getItem('jwt');

    const headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.post(url, dataload, { headers: headers_object });
  }
}
