import { Component, OnInit, Output } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { LoggingService } from '../../services/logging.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  @Output()
  eventEmitter: EventEmitter;

  constructor(private accountService: AccountService,
              private logger: LoggingService,
              private router: Router) { }

  ngOnInit() {
  }

  attemptLogin() {
    this.accountService.login(this.login, this.password);
    this.router.navigate(['/home']);
  }

}
