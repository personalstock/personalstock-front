import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { AccountComponent } from './components/account/account.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'orders', component: OrdersComponent },
{ path: 'myOrders', component: MyOrdersComponent },
{ path: 'addOrder', component: AddOrderComponent },
{ path: 'info', component: AboutComponent },
{ path: 'addVideo', component: AddVideoComponent },
{ path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
