import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, PACKAGE_ROOT_URL } from '@angular/core';
import { IEducation } from 'src/app/interfaces/education_interface';
import { IExperience } from 'src/app/interfaces/experience_interface';
import { IPersona } from 'src/app/interfaces/persona_interface';
import { IProject } from 'src/app/interfaces/project_interface';
import { ISkill } from 'src/app/interfaces/skill_interface';

@Injectable({
  providedIn: 'root',
})
export class EditDataService {
  BASE_URL = 'http://localhost:8080/api/v1/';
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
