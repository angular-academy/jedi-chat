import { User } from '../../shared/models/user.model';

export interface Item {
  author: User;
  message: string;
  date: Date;
}
