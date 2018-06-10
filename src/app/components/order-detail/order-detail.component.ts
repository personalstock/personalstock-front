import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../../model/order';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input()
  order: Order;

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
  }

  addVideo() {
    // this.router.navigate(['/addVideo', this.order.id]);
    this.router.navigate(['/addVideo'], {queryParams: {order: this.order.id}});
  }

}
