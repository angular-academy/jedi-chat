import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'jc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jedi-chat';


  constructor(private _router: Router) {
  }

  public zumLogin(): void {
    this._router.navigate(['login']);
  }
}
