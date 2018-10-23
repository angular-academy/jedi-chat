import { Injectable } from '@angular/core';
import { ChatMessage } from './chat-message/chat-message';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatlistService {

  public messages: ChatMessage[];

  // Event-Emitter bitte ausschließlich für Input nehmen!
  // public changes: EventEmitter<ChatMessage[]>;
  public changes: Subject<ChatMessage[]>;

  constructor() {
    this.messages = [];
    // this.changes = new EventEmitter<ChatMessage[]>();
    this.changes = new Subject<ChatMessage[]>();
  }

  public add(message: ChatMessage): void {
    // this.messages = [...this.messages, message];
    // alternativ:
    this.messages.push(message);
    // => hierfür event nötig

    this.changes.next(this.messages);
  }
}
