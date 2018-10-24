import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ChatMessage} from './chat-message';

@Component({
  selector: 'jc-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() message: ChatMessage;
  @Input() class: string;
  @HostBinding('class') styles: string;

  constructor() {
  }

  public ngOnInit() {
    this.styles = `${this.class} ${this.message.position} alert-${this.message.alert}`;
  }
}
