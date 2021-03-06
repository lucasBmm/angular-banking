import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

  login(data: Object): Observable<any>{
    console.log("Login started");
    return this.http.post('http://localhost:3001/login', data)
  }
  
}
