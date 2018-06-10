import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { Account } from '../../model/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements AfterViewInit, OnInit {

  userAccount: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.userAccount = this.accountService.loggedUser;
  }

  ngAfterViewInit() {
      this.userAccount = this.accountService.loggedUser;
  }

  saveChanges() {
    this.accountService.updateAccount(this.userAccount).subscribe(returnedAccount => this.userAccount = returnedAccount);
  }

}
