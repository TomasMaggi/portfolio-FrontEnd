import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, PACKAGE_ROOT_URL } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditDataService {
  BASE_URL = 'https://ap-restapi.onrender.com/api/v1/';
  constructor(private http: HttpClient) {}

  changeEntity(p_url: string, dataload: any) {
    const url = this.BASE_URL + p_url;
    const token = localStorage.getItem('jwt');

    const headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.put(url, dataload, { headers: headers_object });
  }
}
