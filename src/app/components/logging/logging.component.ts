import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

}
