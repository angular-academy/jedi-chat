import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'jc-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  public currentMessageText: string;
  @Output() sendLeftClick = new EventEmitter<string>();
  @Output() sendRightClick = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  public sendMessage(): void {
    if (this.currentMessageText) {
      this.sendLeftClick.emit(this.currentMessageText);
      this.currentMessageText = '';
    }
  }

  public sendReplyAsGrievous(): void {
    if (this.currentMessageText) {
      this.sendRightClick.emit(this.currentMessageText);
      this.currentMessageText = '';
    }
  }

  public rightClickDemoAsGrievous(event: MouseEvent): void {
    // otherwise the context menu will show up
    event.stopPropagation();
    event.preventDefault();
    this.sendReplyAsGrievous();
  }
}
