import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Item } from '../models/item.model';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'jc-chat-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() author: User;
  @Output() sendItem = new EventEmitter<Item>();
  item: Item;

  constructor() {
  }

  ngOnInit() {
    this.item = {
      message: '',
      author: this.author,
      date: undefined,
    };
  }

  send() {
    if (this.item.message !== '') {
      const newItem: Item = { ...this.item, date: new Date() };
      this.sendItem.emit(newItem);
      this.item.message = '';
    }
  }

}
