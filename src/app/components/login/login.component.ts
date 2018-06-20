import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
  }

  attemptLogin() {
    this.accountService.login(this.login, this.password);
    this.router.navigate(['/home']);
  }

}
