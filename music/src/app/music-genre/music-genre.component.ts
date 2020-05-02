import { Component, OnInit } from '@angular/core';
import{genres,Genre}from'../genre';
import { from } from 'rxjs';

@Component({
  selector: 'app-music-genre',
  templateUrl: './music-genre.component.html',
  styleUrls: ['./music-genre.component.css']
})
export class MusicGenreComponent implements OnInit {

  genres= genres;
  constructor() { }

  ngOnInit(): void {
  }

}
