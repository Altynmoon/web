import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Music} from "../music";


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private ListUrl = 'http://localhost:8000/list/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET heroes from the server */
  getResumes(): Observable<Music[]> {
    return this.http.get<Music[]>(this.ListUrl);
  }

  /** GET heroes whose name contains search term */
  getPinnedResumes(pin: boolean): Observable<Music[]> {
    return this.http.get<Music[]>(`${this.ListUrl}?pin=${pin}`);
  }

  getMylist(userId: number): Observable<Music[]> {
    return this.http.get<Music[]>(`${this.ListUrl}?user=${userId}`);
  }

  /** GET hero by id. Will 404 if id not found */
  getOneResume(id: number): Observable<Music> {
    const url = `${this.ListUrl}${id}`;
    return this.http.get<Music>(url);
  }

  /* GET heroes whose name contains search term */
  searchResumes(term: string): Observable<Music[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Music[]>(`${this.ListUrl}?post=${term}`);
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addResume(resume: Music): Observable<any> {
    return this.http.post(this.ListUrl, resume, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteResume(id: number): Observable<Music> {
    const url = `${this.ListUrl}${id}`;
    return this.http.delete<Music>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  updateVacancy(vacancy: Music): Observable<any> {
    return this.http.put(this.ListUrl, vacancy, this.httpOptions);
  }
}
