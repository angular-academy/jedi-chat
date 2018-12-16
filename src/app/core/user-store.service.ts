import { Injectable } from '@angular/core';
import {CreateUser, User} from '../shared/models/user.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UserStoreService {

  constructor(private http: HttpClient) {
  }

  user: User = { nickName: 'Guest', avatar: '/assets/placeholder_avatar.jpg', fraction: 'GALACTIC_EMPIRE', species: 'HUMAN', gender: 'MALE', bio: '' };

  public registerUser(user: CreateUser): Observable<boolean> {
    return this.http.put('/register', user, {observe: 'response'})
      .pipe(
        map((resp: HttpResponse<any>) => resp.ok)
      );
  }

  public getUser(nickname: string): Observable<User> {
    return this.http.get<User>(`api/user/${nickname}`);
  }
}
