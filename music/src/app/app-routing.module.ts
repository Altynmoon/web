import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{MusicListComponent}from '../app/music-list/music-list.component'
import{MusicRaitComponent}from '../app/music-rait/music-rait.component'
import{MusicAuthorComponent}from '../app/music-author/music-author.component'
import{MusicGenreComponent}from '../app/music-genre/music-genre.component'
import{MusicDetailsComponent}from '../app/music-details/music-details.component'
import { from } from 'rxjs';
import {AuthorizationComponent} from "./authorization/authorization.component";


const routes: Routes = [
  {path:'',component:MusicListComponent},
  {path: 'all', component: MusicListComponent},
  {path:'popular', component:MusicRaitComponent},
  {path:'authors', component:MusicAuthorComponent},
  {path:'genre',component:MusicGenreComponent},
  {path:'detail/:id',component:MusicDetailsComponent},
  {path:'authorization',component:AuthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MusicListComponent,MusicRaitComponent,MusicAuthorComponent,MusicGenreComponent,MusicDetailsComponent]
