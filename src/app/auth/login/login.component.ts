import { Component, OnInit } from '@angular/core';
import {LoginDto} from '../models/login.dto';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'jc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public nickname: string;
  public password: string;

  constructor(private _authService : AuthService) { }

  public login(): void {
    const loginDto: LoginDto = {
      nickname: this.nickname,
      password: this.password
    };
    this._authService.login(loginDto);
    console.log(loginDto);
  }

  ngOnInit() {
  }

}
