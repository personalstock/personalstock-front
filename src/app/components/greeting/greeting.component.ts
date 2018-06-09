import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  la = 'la';

  constructor(private authenticationService: AuthenticationService,
              private logger: LoggingService) { }

  ngOnInit() {
  }

  logout() {
    this.logger.add('GreetingComponent: logging out');
    this.authenticationService.logout();
  }

}
