import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';


const ACCOUNT_API_URL = 'http://localhost:8080/api/account/login';

const HTTP_OPTIONS_LOGIN = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

login(login: string, password: string): Observable<Account>  {
  let body = new URLSearchParams();
  body.set('login', login);
  body.set('password', password);

  return this.httpClient.post<Account>(ACCOUNT_API_URL, 'login='+login+"&password="+password, HTTP_OPTIONS_LOGIN);
}

}
