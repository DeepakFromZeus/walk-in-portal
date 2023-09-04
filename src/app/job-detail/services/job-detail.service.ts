import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  private url = 'http://localhost:5185/api/JobDetail/'; // your server local path
  private instructionUrl = 'http://localhost:5185/api/Instruction/'; // your server local path
  private rolesUrl = 'http://localhost:5185/api/RoleDetails/'; // your server local path

  constructor(private http: HttpClient) { }

  GetJobDetail(id: any): Observable<any> {
    return this.http.get(this.url + id);
  }
  GetInstructions(id: any): Observable<any> {
    return this.http.get(this.instructionUrl + id);
  }
  GetRoles(id: any): Observable<any> {
    return this.http.get(this.rolesUrl + id);
  }
}
