import { Injectable } from '@angular/core';
import { IFilm } from './IFilm'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private _url : string = '/assets/data/films.json' 

  constructor(private http : HttpClient) { }

  getMovies(): Observable<IFilm[]>{
    return this.http.get<IFilm[]>(this._url)
  }
}
