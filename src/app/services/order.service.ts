import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

const ORDER_API_URL = 'http://localhost:8080/api/orders';

const HTTP_HEADERS_API = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  addOrder(order: Order): Observable<Order> {
    console.log('addingOrder' + JSON.stringify(order));
    return this.httpClient.post<Order>(ORDER_API_URL, order, HTTP_HEADERS_API);
  }

}
