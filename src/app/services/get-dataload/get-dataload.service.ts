import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetDataloadService {
  BASE_URL: string = 'https://ap-restapi.onrender.com/api/v1/';

  constructor(private http: HttpClient) {}

  get_dataload(p_url: string, obj: Object) {
    // this should be the endpoint to send a get request
    const url: string = this.BASE_URL + p_url;

    // we use obj the copy the interface sended from the component into this request

    return this.http.get<typeof obj>(url);
  }
}
