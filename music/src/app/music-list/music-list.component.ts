import { Component, OnInit, Input } from '@angular/core';
import{MusicService} from '../music.service'
import{musics ,Music}from '../music'
import { from } from 'rxjs';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  musics = musics;


  constructor(
    private musicService: MusicService,
  ) {
  }

  ngOnInit() {
    this.musicService.getMusic().subscribe(musics => this.musics = musics);
  }

  
}


