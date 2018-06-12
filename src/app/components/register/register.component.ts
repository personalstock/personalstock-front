import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentialsToRegister: Account;

  constructor(private accountService: AccountService,
              private loggingService: LoggingService,
              private router: Router) { }

  ngOnInit() {
    this.credentialsToRegister = new Account();
  }

  addAccount() {
    this.accountService.addAccount(this.credentialsToRegister).subscribe();
    setTimeout(() => {
      this.accountService.login(this.credentialsToRegister.login, this.credentialsToRegister.password);
    }, 100);
    this.router.navigate(['/home']);
  }

}
