import { Component, OnInit } from '@angular/core';
import {LoginDto} from '../models/login.dto';

@Component({
  selector: 'jc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public nickname: string;
  public password: string;

  constructor() { }

  public login(): void {
    const loginDto: LoginDto = {
      nickname: this.nickname,
      password: this.password
    };
    console.log(loginDto);
  }

  ngOnInit() {
  }

}
