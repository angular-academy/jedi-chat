import {Component, OnInit} from '@angular/core';
import {ChatMessage} from './chat-message/chat-message';
import {User} from './user';

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
  selector: 'jc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private _currentId = 0;
  public messages: ChatMessage[];


  public ngOnInit(): void {
    this.initMocks();
  }

  public sendAsUser(message: string) {
    this.messages.push(this.messageFrom(message));
  }

  public sendAsGrievous(message: string) {
    this.messages.push(this.messageFrom(message, GENERAL_GRIEVOUS, 'left'));
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
