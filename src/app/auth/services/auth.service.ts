import {Injectable} from '@angular/core';
import {LoginDto} from '../models/login.dto';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token: string;

  constructor(private _httpClient: HttpClient,
              private _router: Router) {
  }

  get token(): string {
    return this._token;
  }

  public login(loginDto: LoginDto): void {
    this._httpClient.post('login', loginDto).subscribe((tokenDto: {token: string}) => {
        this._token = tokenDto.token;
        this._router.navigate(['profile/admin']);
    });
  }
}
