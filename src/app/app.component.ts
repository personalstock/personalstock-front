import { Component, OnChanges, DoCheck } from '@angular/core';
import { OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { LoggingService } from './services/logging.service';
import { Router } from '@angular/router';
import { Account } from './model/account';

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
    console.log('AppComponent doCheck: ' + JSON.stringify(this.appCompLoggedUser));
  }

}
