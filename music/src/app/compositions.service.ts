import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompositionsService {

  private baseUrl = 'http://localhost:8000/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  addUser(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'users/', {username, password}, this.httpOptions);
  }

  loginWithToken(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'login/', {username, password}, this.httpOptions);
  }

  getUserInfoByToken(token: string): Observable<any> {
    return this.http.post(this.baseUrl + 'userInfoByToken/', {token}, this.httpOptions);
  }
}
