import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';
import { ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor(private router: Router , private filmservice : FilmService, private activatedRoute: ActivatedRoute)
   { }
   public film
   private id = this.activatedRoute.snapshot.paramMap.get('id') 

  ngOnInit(): void {
    this.filmservice.getMovies()
    .subscribe(data => {
      this.film = data.find(Object => Object.id == this.id)
    })
  }
  // onBack(){
    // this.router.navigate(['/films'])
  // }

}
