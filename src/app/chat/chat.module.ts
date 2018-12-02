import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { ItemStoreService } from './item-store.service';

@NgModule({
  declarations: [ChatComponent, ListComponent, InputComponent, ItemComponent],
  exports: [ChatComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ChatRoutingModule
  ],
  providers: [ItemStoreService]
})
export class ChatModule { }
