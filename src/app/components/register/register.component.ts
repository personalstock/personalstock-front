import { Component, OnInit, DoCheck } from '@angular/core';
import { Account } from '../../model/account';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck {

  credentialsToRegister: Account;
  repeatedPassword: string;

  constructor(private accountService: AccountService,
              private loggingService: LoggingService,
              private router: Router) { }

  ngOnInit() {
    this.credentialsToRegister = new Account();
    this.repeatedPassword = '';
  }

  addAccount() {
    this.accountService.addAccount(this.credentialsToRegister).subscribe();
    setTimeout(() => {
      this.accountService.login(this.credentialsToRegister.login, this.credentialsToRegister.password);
    }, 100);
    this.router.navigate(['/home']);
  }

  ngDoCheck() {
    console.log(this.repeatedPassword);
    console.log(this.credentialsToRegister.password);
  }

}
