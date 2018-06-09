import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { LoggingService } from '../../services/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(private authenticationService: AuthenticationService,
              private logger: LoggingService,
              private router: Router) { }

  ngOnInit() {
  }

  attemptLogin() {
    this.logger.add('LoginComponent: attempting to log in with login: ' + this.login + ', password: ' + this.password);
    this.authenticationService.login(this.login, this.password);
    this.router.navigate(['/home']);
  }

}
