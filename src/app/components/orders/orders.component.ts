import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  orders: Order[] = [];
  selectedOrder: Order;

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.getOrders();
    this.selectedOrder = null;
  }

  ngAfterViewInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAllOrders().subscribe(returnedOrders => this.orders = returnedOrders);
  }

  showOrderDetails(order: Order) {
    this.selectedOrder = order;
  }

}
