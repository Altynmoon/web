import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  public films = []


  constructor(private router: Router, private filmservice: FilmService) { }

  ngOnInit(): void {
    this.filmservice.getMovies().subscribe(data => this.films = data )
  }
  onSelect(film){
    this.router.navigate(['/films', film.id])
  }

}
