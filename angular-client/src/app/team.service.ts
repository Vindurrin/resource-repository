import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = '/api/v1/teams';

  constructor(private http: HttpClient) { }

  getTeam(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTeam(team: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, team);
  }

  updateTeam(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, value);
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text'});
  }

  getTeamsList(): Observable<any>
  {
    return this.http.get(`${this.baseUrl}`);
  }
  
}
