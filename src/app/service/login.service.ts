import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';


const LOGIN_URL = 'http://localhost:8080/api/account/login';

const HTTP_HEADERS_LOGIN = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string): Observable<Account>  {
    const credentials = 'login=' + login + '&password=' + password;
    return this.httpClient.post<Account>(LOGIN_URL, credentials, HTTP_HEADERS_LOGIN);
  }

}
