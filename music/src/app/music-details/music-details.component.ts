import { Component, OnInit ,Input } from '@angular/core';
import{musics ,Music}from '../music';
import { Location } from '@angular/common';
import{MusicService } from '../music.service'
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {

  @Input() music: Music;


  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic():void{
    //const id = +this.route.snapshot.paramMap.get('id');
    //this.musicService.getMusic(id)
      //.subscribe(value => this.music = value);
  }


}
