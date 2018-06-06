import { Injectable, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit{
  isUserLoggedIn: boolean;

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.isUserLoggedIn = false;
    this.loggingService.add('authentication service initialised');
  }

  login() {
    //call login service here
    this.isUserLoggedIn = true;
    this.loggingService.add('logged in');
  }

  logout() {
    this.isUserLoggedIn = false;
    this.loggingService.add('logged out');
  }

}
