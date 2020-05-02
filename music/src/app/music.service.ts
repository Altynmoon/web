import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Music} from "./music";
import {Author} from "./model/author";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private resumeUrl = 'http://localhost:8000/music/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET heroes from the server */
  getMusic(): Observable<Music[]> {
    return this.http.get<Music[]>(this.resumeUrl);
  }

  /* GET heroes whose name contains search term */
  getPinnedResumes(pin: boolean): Observable<Music[]> {
    return this.http.get<Music[]>(`${this.resumeUrl}?pin=${pin}`);
  }

  getMyResumes(AuthorId: number): Observable<Music[]> {
    return this.http.get<Music[]>(`${this.resumeUrl}?author=${AuthorId}`);
  }

  /** GET hero by id. Will 404 if id not found */
  getOneResume(id: number): Observable<Music> {
    const url = `${this.resumeUrl}${id}`;
    return this.http.get<Music>(url);
  }

  /* GET heroes whose name contains search term */
  searchResumes(term: string): Observable<Music[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Music[]>(`${this.resumeUrl}?post=${term}`);
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addmusic(music: Music): Observable<any> {
    return this.http.post(this.resumeUrl, music, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteResume(id: number): Observable<Music> {
    const url = `${this.resumeUrl}${id}`;
    return this.http.delete<Music>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  updateVacancy(vacancy: Music): Observable<any> {
    return this.http.put(this.resumeUrl, vacancy, this.httpOptions);
  }
}

