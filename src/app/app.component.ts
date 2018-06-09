import { Component, OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { LoggingService } from './services/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private accountService: AccountService,
              private router: Router) {
  }

}
