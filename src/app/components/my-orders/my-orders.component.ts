import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../../model/order';
import { AccountService } from '../../services/account.service';
import { OrderService } from '../../services/order.service';

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

  seeVideos(orderId: number) {
    this.router.navigate(['/response'], {queryParams: {order: orderId}});
  }

  getGoogleApiUrls() {
    for (const order of this.myOrders) {
      const googleMapUrl = 'https://maps.googleapis.com/maps/api/staticmap?size=500x300&maptype=roadmap&markers='
      + order.location1 + ',' + order.location2
      + '&key=AIzaSyDA-Pqh_zbJiUQ5W23YC9n7h3ByV2W1fUY';

      this.myOrdersGoogleMapLocations.set(order.id, googleMapUrl);
    }
  }

}
