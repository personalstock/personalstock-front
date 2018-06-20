import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from './model/account';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  appCompLoggedUser: Account;

  constructor(private accountService: AccountService,
              private router: Router) {
  }

  ngDoCheck() {
    this.accountService.getLoggedAccount().subscribe(returnAcc => this.appCompLoggedUser = returnAcc);
  }

}
