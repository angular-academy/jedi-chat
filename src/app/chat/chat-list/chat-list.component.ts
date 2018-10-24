import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ChatMessage} from '../chat-message/chat-message';
import { ChatlistService } from '../chatlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jc-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {

  messages: ChatMessage[] = [];

  subscripton: Subscription;

  constructor(public chatlistService: ChatlistService ) {
  }

  ngOnInit() {
    this.messages = this.chatlistService.messages;
    this.subscripton = this.chatlistService.changes.subscribe(
      (next) => { this.messages = next; }
    );
  }

  ngOnDestroy() {
    if (this.subscripton) {
      this.subscripton.unsubscribe();
    }
  }

}
