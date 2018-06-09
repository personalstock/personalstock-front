import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logs: string[] = [];

  constructor() { }

  add(message: string) {
    this.logs.push(message);
  }

  clear() {
    this.logs = [];
  }

}
