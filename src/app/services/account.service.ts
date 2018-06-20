import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit, DoCheck } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Account } from '../model/account';

const LOGIN_URL = 'http://localhost:8080/api/account/login';
const ACCOUNT_API_URL = 'http://localhost:8080/api/account';

const HTTP_HEADERS_API = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};
const HTTP_HEADERS_LOGIN = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loggedUser: Account = null;

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string) {
    const credentials = 'login=' + login + '&password=' + password;

    this.httpClient.post<Account>(LOGIN_URL, credentials, HTTP_HEADERS_LOGIN).subscribe(responseAccount => {
      this.loggedUser = responseAccount;
      localStorage.setItem('currentUser', JSON.stringify(responseAccount));
    });
  }

  getLoggedAccount(): Observable<Account> {
    this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    return of(this.loggedUser);
  }

  logout() {
    this.loggedUser = null;
    localStorage.setItem('currentUser', null);
  }

  addAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(ACCOUNT_API_URL, account, HTTP_HEADERS_API);
  }

  updateAccount(account: Account) {
    return this.httpClient.put<Account>(ACCOUNT_API_URL, account, HTTP_HEADERS_API);
  }

  deleteAccount(account: Account): Observable<any> {
    return this.httpClient.request('delete', ACCOUNT_API_URL, {body: account});
  }

}
