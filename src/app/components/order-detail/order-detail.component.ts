import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../../model/order';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit, OnChanges {

  googleMapApiUrl: string;

  @Input()
  order: Order;

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.calculateGoogleApiUrl();
  }

  ngOnChanges() {
    this.calculateGoogleApiUrl();
  }

  calculateGoogleApiUrl() {
    this.googleMapApiUrl = 'https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&markers='
                            + this.order.location1 + ',' + this.order.location2
                            + '&key=AIzaSyDA-Pqh_zbJiUQ5W23YC9n7h3ByV2W1fUY';
  }

  addVideo() {
    // this.router.navigate(['/addVideo', this.order.id]);
    this.router.navigate(['/addVideo'], {queryParams: {order: this.order.id}});
  }

}
