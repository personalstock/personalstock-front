import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { ResponseComponent } from './components/response/response.component';
import { UnregisteredComponent } from './components/unregistered/unregistered.component';
import { AccountService } from './services/account.service';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';

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
    LoginComponent,
    OrderDetailComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDA-Pqh_zbJiUQ5W23YC9n7h3ByV2W1fUY'
    })
  ],
  providers: [
    AccountService,
    OrderService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
