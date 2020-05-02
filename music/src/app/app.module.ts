import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicRaitComponent } from './music-rait/music-rait.component';
import { MusicAuthorComponent } from './music-author/music-author.component';
import { MusicGenreComponent } from './music-genre/music-genre.component';
import { AuthorizationComponent } from './authorization/authorization.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MusicListComponent,
    MusicDetailsComponent,
    routingComponents,
    MusicRaitComponent,
    MusicAuthorComponent,
    MusicGenreComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
