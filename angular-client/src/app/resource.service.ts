import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  // private baseUrl = '/api/v1/resources';
  private baseUrl = 'http://localhost:4444/api/v1/resources';

  constructor(private http: HttpClient) { }

  getResource(role: string): Observable<any> {
    console.log("getResource(): " + role);
    return this.http.get(`${this.baseUrl}/${role}`);
  }

  createResource(resource: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, resource);
  }

  updateResource(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, value);
  }

  deleteResource(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getResourcesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}