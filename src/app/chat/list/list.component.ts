import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { UserStoreService } from '../../core/user-store.service';

@Component({
  selector: 'jc-chat-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() items: Item[];

  constructor(public userStore: UserStoreService) {
  }

  ngOnInit() {
  }

}
