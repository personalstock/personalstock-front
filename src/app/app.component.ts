import { Component, OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { LoggingService } from './services/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  abc = 'abc';

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  aa() {
    this.abc = this.authenticationService.loggedUser.login;
    console.log(this.authenticationService.loggedUser.login);
  }
}
