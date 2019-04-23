import { Injectable } from '@angular/core';
import {LoginDto} from '../models/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(loginDto: LoginDto): void {

  }
}
