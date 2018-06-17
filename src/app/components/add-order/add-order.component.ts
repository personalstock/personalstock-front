import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../../model/order';
import { AccountService } from '../../services/account.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  createdOrder: Order;
  googleMapApiUrl: string;

  @ViewChild('createdOrderName')
  createdOrderNameRef: ElementRef;

  @ViewChild('createdOrderLocation1')
  createdOrderLocation1Ref: ElementRef;

  @ViewChild('createdOrderLocation2')
  createdOrderLocation2Ref: ElementRef;

  @ViewChild('createdOrderPrice')
  createdOrderPriceRef: ElementRef;

  @ViewChild('createdOrderDescription')
  createdOrderDescriptionRef: ElementRef;

  orderNameError = false;
  orderLocationError = false;
  orderPriceError = false;

  constructor(private orderService: OrderService,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.createdOrder = new Order();
  }

  previewLocation() {
    if (this.createdOrderLocation1Ref.nativeElement.length === 0
        || this.createdOrderLocation2Ref.nativeElement.length === 0) {
          return;
    }
    this.googleMapApiUrl = 'https://maps.googleapis.com/maps/api/staticmap?size=800x400&maptype=roadmap&markers='
                            + this.createdOrderLocation1Ref.nativeElement.value + ','
                            + this.createdOrderLocation2Ref.nativeElement.value
                            + '&key=AIzaSyDA-Pqh_zbJiUQ5W23YC9n7h3ByV2W1fUY';
                          console.log(this.googleMapApiUrl);
  }

  saveOrder() {
    this.orderNameError = false;
    this.orderLocationError = false;
    this.orderPriceError = false;

    this.createdOrder.name = this.createdOrderNameRef.nativeElement.value;
    this.createdOrder.location1 = this.createdOrderLocation1Ref.nativeElement.value;
    this.createdOrder.location2 = this.createdOrderLocation2Ref.nativeElement.value;
    this.createdOrder.description = this.createdOrderDescriptionRef.nativeElement.value;
    this.createdOrder.price = this.createdOrderPriceRef.nativeElement.value;
    this.createdOrder.poster = this.accountService.loggedUser;

    if (!this.createdOrder.name || this.createdOrder.name.length === 0) {
      this.orderNameError = true;
    }
    if (!this.createdOrder.price || Number.isNaN(+this.createdOrder.price)) {
      this.orderPriceError = true;
    }
    if ((!this.createdOrder.location1 && !this.createdOrder.location2)
        || (this.createdOrder.location1.length === 0 && this.createdOrder.location2.length === 0)) {
      this.orderLocationError = true;
    }

    if (this.orderNameError || this.orderLocationError || this.orderPriceError) {
      return;
    }

    this.orderService.addOrder(this.createdOrder).subscribe();
    this.router.navigate(['/myOrders']);
  }

  disableOrderNameError() {
    this.orderNameError = false;
  }

  disableOrderPriceError() {
    this.orderPriceError = false;
  }

  disableOrderLocationError() {
    this.orderLocationError = false;
  }

}
