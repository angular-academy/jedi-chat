import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageTimerService {

  public currentTime: Date = new Date();

  constructor() {
    window.setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

    // angular modifiziert setInterval / setTimeout und startet
    // eine ChangeDetection
    // (ebenso bei input / click / http events)
  }
}

