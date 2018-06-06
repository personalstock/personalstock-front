import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authenticationService: AuthenticationService,
              private loggingService: LoggingService) {
  }
  
}
