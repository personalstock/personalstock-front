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
    return this.httpClient.post<Order>(ORDER_API_URL, order, HTTP_HEADERS_API);
  }

  getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(ORDER_API_URL, HTTP_HEADERS_API);
  }

  getOrdersByPoster(posterId: number): Observable<Order[]> {
    const urlQuery = ORDER_API_URL + '?poster=' + posterId;
    return this.httpClient.get<Order[]>(urlQuery, HTTP_HEADERS_API);
  }

  deleteOrder(order: Order): Observable<any> {
    return this.httpClient.request('delete', ORDER_API_URL, {body: order});
  }

}
