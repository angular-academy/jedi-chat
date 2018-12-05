import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { DEMO_USERS } from '../../mock-data';

@Injectable()
export class UserStoreService {
  user: User = { nickName: 'Guest', avatar: '/assets/placeholder_avatar.jpg', fraction: '', species: '', gender: 'DIVERSE', bio: '' };
}
