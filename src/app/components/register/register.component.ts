import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentialsToRegister: Account;

  constructor(private authenticationService: AuthenticationService,
              private loggingService: LoggingService,
              private router: Router) { }

  ngOnInit() {
    this.credentialsToRegister = new Account();
  }

  addAccount() {
    console.log('Register: about to add acc ' + JSON.stringify(this.credentialsToRegister));
    this.authenticationService.addAccount(this.credentialsToRegister).subscribe();
    this.authenticationService.login(this.credentialsToRegister.login, this.credentialsToRegister.password);
    this.router.navigate(['/home']);
  }

}
