import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Account } from '../model/account';
import { LoggingService } from './logging.service';
import { AccountComponent } from '../components/account/account.component';
import { Observable } from 'rxjs';
import { TestService } from '../service/test.service';

const ACCOUNT_API_URL = 'http://localhost:8080/api/account';
const HTTP_OPTIONS_LOGIN = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'})
};
const HTTP_OPTIONS_API = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  isUserLoggedIn: boolean;
  loggedUser: Account;

  constructor(private httpClient: HttpClient,
              // private loggingService: LoggingService,
              private test: TestService) { }

  ngOnInit() {
    this.isUserLoggedIn = false;
    this.loggedUser = null;
    // this.loggingService.add('AuthenticationService: initialised');
  }

  login(login: string, password: string) {
    // let body = new URLSearchParams();
    // body.set('login', login);
    // body.set('password', password);

    // this.httpClient.post<Account>(ACCOUNT_API_URL, body)
    //                 .subscribe(retrievedAccount => {this.loggedUser = retrievedAccount;
    //                 console.log('retrieved acc:' + JSON.stringify(retrievedAccount));
    //                 console.log('logged User: ' + JSON.stringify(this.loggedUser));
    //               });
    this.test.login(login, password).subscribe(resp => {
      console.log(JSON.stringify(resp));
      this.loggedUser = resp;
    });
    this.isUserLoggedIn = true;
    // this.loggingService.add('AuthenticationService: logged in, loggedUser: ' + JSON.stringify(this.loggedUser));
  }

  logout() {
    this.isUserLoggedIn = false;
    this.loggedUser = null;
    // this.loggingService.add('AuthenticationService: logged out, loggedUser: ' + JSON.stringify(this.loggedUser));
  }

  addAccount(account: Account): Observable<Account> {
    console.log('AuthService: about to add account ' + JSON.stringify(account));
    return this.httpClient.post<Account>(ACCOUNT_API_URL, account, HTTP_OPTIONS_API);
  }

  updateAccount(account: Account) {
    return this.httpClient.put<Account>(ACCOUNT_API_URL, account, HTTP_OPTIONS_API);
  }

  deleteAccount(account: Account) {
    this.httpClient.request('delete', ACCOUNT_API_URL, {body: account});
  }

}
