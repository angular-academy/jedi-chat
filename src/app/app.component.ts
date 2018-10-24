import {Component, OnInit} from '@angular/core';
import {User} from './model/user';
import {ChatMessage} from './model/chat-message';

const BOT: User = {
  id: -1,
  name: 'Channel Bot'
};

const OBI_WAN: User = {
  id: 1337,
  name: 'Obi-Wan Kenobi'
};

const GENERAL_GRIEVOUS: User = {
  id: 1338,
  name: 'General Grievous'
};

@Component({
  selector: 'jc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _currentId = 0;
  public messages: ChatMessage[];
  public currentMessageText: string;

  ngOnInit(): void {
    this.initMocks();
  }

  public sendMessage(): void {
    if (this.currentMessageText) {
      this.messages.push(this.messageFrom(this.currentMessageText));
      this.currentMessageText = '';
    }
  }

  public sendReplyAsGrievous(): void {
    if (this.currentMessageText) {
      this.messages.push(this.messageFrom(this.currentMessageText, GENERAL_GRIEVOUS, 'left'));
      this.currentMessageText = '';
    }
  }

  public rightClickDemoAsGrievous(event: MouseEvent): void {
    // otherwise the context menu will show up
    event.stopPropagation();
    event.preventDefault();
    this.sendReplyAsGrievous();
  }

  private getIncreasedId(): number {
    return this._currentId++;
  }

  private messageFrom(text: string, user: User = OBI_WAN, position: 'default' | 'left' | 'right' | 'center' = 'right'): ChatMessage {
    return {
      id: this.getIncreasedId(),
      user: user,
      content: text,
      position: position,
      alert: 'default'
    };
  }

  private initMocks(): void {
    const welcomeMessage: ChatMessage = this.messageFrom('Welcome to Jedi Chat!', BOT, 'center');
    welcomeMessage.alert = 'info';

    this.messages = [
      welcomeMessage,
      this.messageFrom('Hello There...'),
      this.messageFrom('General Kenobi.', GENERAL_GRIEVOUS, 'left')
    ];
  }
}
