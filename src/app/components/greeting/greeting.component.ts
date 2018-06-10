import { Component, OnInit, DoCheck } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements DoCheck {

  usernameToGreet: string;

  constructor(private accountService: AccountService,
              private logger: LoggingService) { }

  ngDoCheck() {
    this.usernameToGreet = 'guest';
    try {
      this.usernameToGreet = this.accountService.loggedUser.login;
    } catch (error) {
      // do nothing
    }
  }

  logout() {
    this.logger.add('GreetingComponent: logging out');
    this.accountService.logout();
  }

}
