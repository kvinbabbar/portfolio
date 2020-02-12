import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Project } from '../project';

const api_url = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    const url = api_url + '/projects';
    return this.http.get<Project[]>(url);
  }

  updateProject(project: Project): Observable<Project> {
    const url = api_url + '/projects/'+project.id;
    return this.http.put<Project>(url, project, httpOptions)
  }
}
