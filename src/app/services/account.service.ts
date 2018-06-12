import { Injectable, OnInit, DoCheck } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Account } from '../model/account';
import { LoggingService } from './logging.service';
import { AccountComponent } from '../components/account/account.component';
import { Observable, of } from 'rxjs';
import { LoginService } from '../service/login.service';

const ACCOUNT_API_URL = 'http://localhost:8080/api/account';

const HTTP_HEADERS_API = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit, DoCheck {


  isUserLoggedIn: boolean;
  loggedUser: Account;


  ngDoCheck() {
    console.log('auth service: ' + this.loggedUser);
  }

  constructor(private httpClient: HttpClient,
              // private loggingService: LoggingService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.isUserLoggedIn = false;
    this.loggedUser = null;
    // this.loggingService.add('AuthenticationService: initialised');
  }

  login(login: string, password: string) {
    this.loginService.login(login, password).subscribe(responseAccount => {
      this.loggedUser = responseAccount;
    });
    this.isUserLoggedIn = true;
  }

  getLoggedAccount(): Observable<Account> {
    return of(this.loggedUser);
  }

  logout() {
    this.isUserLoggedIn = false;
    this.loggedUser = null;
    // this.loggingService.add('AuthenticationService: logged out, loggedUser: ' + JSON.stringify(this.loggedUser));
  }

  addAccount(account: Account): Observable<Account> {
    console.log('AuthService: about to add account ' + JSON.stringify(account));
    return this.httpClient.post<Account>(ACCOUNT_API_URL, account, HTTP_HEADERS_API);
  }

  updateAccount(account: Account) {
    return this.httpClient.put<Account>(ACCOUNT_API_URL, account, HTTP_HEADERS_API);
  }

  deleteAccount(account: Account) {
    this.httpClient.request('delete', ACCOUNT_API_URL, {body: account});
  }

}
