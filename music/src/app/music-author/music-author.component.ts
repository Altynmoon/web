import { Component, OnInit } from '@angular/core';
import{AuthorServic }from '../authors.service'
import{authors}from '../authors'
import{MusicService}from '../music.service'
import{musics}from '../music'
import { from } from 'rxjs';

@Component({
  selector: 'app-music-author',
  templateUrl: './music-author.component.html',
  styleUrls: ['./music-author.component.css']
})
export class MusicAuthorComponent implements OnInit {

  authors= authors;
  musics = musics;
  

  constructor(
    private musicService: MusicService,
    private authorService:AuthorServic,
  ) { }

  ngOnInit(): void {
  }

}
