import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatMessageComponent} from './chat-message/chat-message.component';
import {ChatListComponent} from './chat-list/chat-list.component';
import {ChatInputComponent} from './chat-input/chat-input.component';
import {ChatComponent} from '../chat/chat.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatMessageComponent, ChatListComponent, ChatInputComponent, ChatComponent],
  exports: [ChatComponent]
})
export class ChatModule {
}
