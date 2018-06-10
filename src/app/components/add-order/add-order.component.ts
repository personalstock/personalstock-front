import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { Account } from '../../model/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  createdOrder: Order;

  @ViewChild('createdOrderName')
  createdOrderNameRef: ElementRef;

  @ViewChild('createdOrderLocation1')
  createdOrderLocation1Ref: ElementRef;

  @ViewChild('createdOrderLocation2')
  createdOrderLocation2Ref: ElementRef;

  @ViewChild('createdOrderPrice')
  createdOrderPriceRef: ElementRef;

  constructor(private orderService: OrderService,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.createdOrder = new Order();
  }

  saveOrder() {
    this.createdOrder.name = this.createdOrderNameRef.nativeElement.value;
    this.createdOrder.location1 = this.createdOrderLocation1Ref.nativeElement.value;
    this.createdOrder.location2 = this.createdOrderLocation2Ref.nativeElement.value;
    this.createdOrder.price = this.createdOrderPriceRef.nativeElement.value;
    this.createdOrder.poster = this.accountService.loggedUser;
    this.orderService.addOrder(this.createdOrder).subscribe();
    this.router.navigate(['/myOrders']);
  }

}
