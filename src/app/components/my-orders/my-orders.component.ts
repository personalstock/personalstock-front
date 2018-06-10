import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrdersComponent } from '../orders/orders.component';
import { OrderService } from '../../services/order.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, AfterViewInit {

  myOrders: Order[];
  accountId: number;

  constructor(private orderService: OrderService,
              private accountService: AccountService) { }

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

}
