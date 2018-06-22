import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { GoogleApiService } from '../../services/google-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  selectedOrder: Order;
  ordersCoordinates = new Map<any, any>();

  test() {
    console.log('a');
  }

  constructor(private orderService: OrderService,
              private googleApiService: GoogleApiService,
              private router: Router) { }

  ngOnInit() {
    this.getOrders();
    this.selectedOrder = null;
    setTimeout(() => this.getOrderCoordinates(), 500);
  }

  getOrders() {
    this.orderService.getAllOrders().subscribe(returnedOrders => this.orders = returnedOrders);
  }

  getOrderCoordinates() {
    this.orders.forEach(order => {
      this.googleApiService.getCoordinates(order).subscribe(response => {
        const coordinates = {lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng};
        this.ordersCoordinates.set(order.id, coordinates);
      });
    });
  }

  showOrderDetails(order: Order) {
    this.selectedOrder = order;
  }

}
