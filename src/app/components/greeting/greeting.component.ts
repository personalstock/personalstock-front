import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor(private accountService: AccountService,
              private logger: LoggingService) { }

  ngOnInit() {
  }

  logout() {
    this.logger.add('GreetingComponent: logging out');
    this.accountService.logout();
  }

}
