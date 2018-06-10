import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Order } from '../../model/order';
import { Video } from '../../model/video';
import { AccountService } from '../../services/account.service';
import { OrderService } from '../../services/order.service';
import { VideoService } from '../../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, AfterViewInit {

  myOrders: Order[];
  accountId: number;

  constructor(private orderService: OrderService,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.getMyOrders();
  }

  ngAfterViewInit() {
    this.getMyOrders();
  }

  getMyOrders() {
    this.accountId = this.accountService.loggedUser.id;
    this.orderService.getOrdersByPoster(this.accountId)
                     .subscribe(returnedOrders => this.myOrders = returnedOrders);
  }

  seeVideos(orderId: number) {
    this.router.navigate(['/response'], {queryParams: {order: orderId}});
  }

}
