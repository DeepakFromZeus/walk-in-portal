import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:5185/api/UserLogin/'; // your server local path

  constructor(private http: HttpClient) { }

  private getHeader(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  Login(data: any): Observable<any> {
    return this.http.get(this.url + `${data.email}/${data.password}?password=${data.password}`);
  }

}
