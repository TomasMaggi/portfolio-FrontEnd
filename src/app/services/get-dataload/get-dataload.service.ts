import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataloadService {
  BASE_URL: string = 'https://ap-api-y2nq.onrender.com/api/v1/';

  constructor(private http: HttpClient) {}

  get_dataload(p_url: string = 'Persona/1', obj: Object) {
    // this should be the endpoint to send a get request
    const url: string = this.BASE_URL + p_url;

    // we use obj the copy the interface sended from the component into this request
    return this.http.get<typeof obj>(url);
  }
}
