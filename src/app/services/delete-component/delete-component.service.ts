import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteComponentService {
  BASE_URL = 'https://ap-restapi.onrender.com/api/v1/';
  constructor(private http: HttpClient) {}

  delete(p_url: string) {
    const url = this.BASE_URL + p_url;
    const token = localStorage.getItem('jwt');

    const headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.delete(url, { headers: headers_object });
  }
}
