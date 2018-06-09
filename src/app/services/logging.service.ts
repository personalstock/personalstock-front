import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  
  logs: string[] = [];

  add(message: string) {
    this.logs.push(message);
  }
  
  clear() {
    //this.logs = [];
    this.logs.push(JSON.stringify(this.authService.loggedUser));
  }

  constructor(private authService: AuthenticationService) { }
}
