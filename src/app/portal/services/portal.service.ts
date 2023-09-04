import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private url = 'http://localhost:5185/api/JobOpenings/'; // your server local path

  constructor(private http: HttpClient) { }

  GetJobOpenings(): Observable<any> {
    return this.http.get(this.url);
  }
}
