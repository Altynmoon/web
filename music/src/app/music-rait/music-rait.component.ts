import { Component, OnInit } from '@angular/core';
import{musics}from '../music'
import{MusicService} from '../music.service'
import {Observable, of} from 'rxjs';



@Component({
  selector: 'app-music-rait',
  templateUrl: './music-rait.component.html',
  styleUrls: ['./music-rait.component.css']
})
export class MusicRaitComponent implements OnInit {
  bestmusics = musics;

   //musicRait= [];

  constructor(
    private musicService: MusicService,
  ) { }
  //musicRait = this.musicService.getMusics();

  ngOnInit(): void {
  //this.musicService.getBestMusic();
  }
  getBestMusic(){
    //const observableMusics = this.musicService.getBestMusic();
    //observableMusics.subscribe(bestmusics=> this.bestmusics=musics)
  }

}
