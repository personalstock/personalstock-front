import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { HomeComponent } from './components/home/home.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { UnregisteredComponent } from './components/unregistered/unregistered.component';
import { AccountService } from './services/account.service';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';
import { AboutComponent } from './components/about/about.component';
import { LoggingComponent } from './components/logging/logging.component';
import { LoggingService } from './services/logging.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UnregisteredComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    GreetingComponent,
    FooterComponent,
    OrdersComponent,
    MyOrdersComponent,
    AddOrderComponent,
    AddVideoComponent,
    AccountComponent,
    LoggingComponent,
    LoginComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    OrderService,
    UserService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
