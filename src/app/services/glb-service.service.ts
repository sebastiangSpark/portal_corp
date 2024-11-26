import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlbServiceService {

  constructor(private http: HttpClient) { }

  private getHeader(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${1234}`
    });
  }

  get(path: String, body: any = {}): Observable<any>{
    return this.http.get(`ss${path}`, {
      headers: this.getHeader()
    });
  }

  post(path: String, body: any): Observable<any>{
    return this.http.post(`ss${path}`, body, {
      headers: this.getHeader()
    });
  }
}
