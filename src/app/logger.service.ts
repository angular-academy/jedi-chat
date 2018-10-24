import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  public log(message: string, ...args) {
    console.log(`LOGGING: ${message}`, ...args);
  }
  public info(message: string, ...args) {
    console.log(`INFO: ${message}`, ...args);
  }
  public error(message: string, ...args) {
    console.log(`ERROR: ${message}`, ...args);
  }
}
