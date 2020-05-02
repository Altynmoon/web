import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {LoggedService} from '../logged.service';
import {MusicService} from "../music.service";
import {CompositionsService} from "../compositions.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})

export class AuthorizationComponent implements OnInit {

  loginMode = true;

  constructor(
    private compositionsService:CompositionsService,
    private loggedService: LoggedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signUp(
    login: string,
    password: string,
    password2: string
  ){
    if(password !== password2 && password.length < 8) {
      return;
    }
    this.compositionsService.addUser(login, password).subscribe(res => {
      this.loginMode = true;
    });
  }

  signIn(
    login: string,
    password: string
  ) {
    this.compositionsService.loginWithToken(login, password).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.loggedService.toggle(true);
      this.router.navigate(['/']);
    });
  }
}
