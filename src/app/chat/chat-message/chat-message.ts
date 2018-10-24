import {User} from '../user';

export interface ChatMessage {
  id: number;
  content: string;
  position: 'default' | 'left' | 'right' | 'center';
  alert: 'default' | 'info' | 'warn';
  user: User;
}
