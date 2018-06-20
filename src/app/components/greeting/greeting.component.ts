import { Component, OnInit, DoCheck } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../model/account';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements DoCheck {

  loggedUser: Account;
  usernameToGreet: string;

  constructor(private accountService: AccountService) { }

  ngDoCheck() {
    this.accountService.getLoggedAccount().subscribe(returnAcc => this.loggedUser = returnAcc);

    if (this.loggedUser !== null && this.loggedUser !== undefined) {
      this.usernameToGreet = this.loggedUser.login;
    } else {
      this.usernameToGreet = 'guest';
    }
  }

  logout() {
    this.accountService.logout();
  }

}
