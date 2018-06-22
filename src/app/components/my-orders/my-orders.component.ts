import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../../model/order';
import { AccountService } from '../../services/account.service';
import { OrderService } from '../../services/order.service';
import { GoogleApiService } from '../../services/google-api.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, AfterViewInit {

  myOrders: Order[];
  myOrdersGoogleMapLocations = new Map<any, any>();
  accountId: number;

  constructor(private orderService: OrderService,
              private googleApiService: GoogleApiService,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.myOrders = [];
    this.getMyOrders();
    setTimeout(() => this.getGoogleApiUrls(), 100);
  }

  ngAfterViewInit() {
  }

  getMyOrders() {
    this.accountId = this.accountService.loggedUser.id;
    this.orderService.getOrdersByPoster(this.accountId)
                     .subscribe(returnedOrders => {
                          this.myOrders = returnedOrders;
                        });
  }

  getGoogleApiUrls() {
    this.myOrdersGoogleMapLocations = this.googleApiService.getGoogleApiUrls(this.myOrders);
  }

  seeVideos(orderId: number) {
    this.router.navigate(['/response'], {queryParams: {order: orderId}});
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order).subscribe();
    this.myOrders = [];
    this.getMyOrders();
    setTimeout(() => this.getGoogleApiUrls(), 100);
  }


}
