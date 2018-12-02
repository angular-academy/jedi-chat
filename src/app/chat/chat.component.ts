import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from './models/item.model';
import { DEMO_ITEMS, DEMO_USERS } from '../../mock-data';
import { User } from '../shared/models/user.model';
import { ItemStoreService } from './item-store.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserStoreService } from '../core/user-store.service';

@Component({
  selector: 'jc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  user: User = DEMO_USERS[1];
  locations: { text: string, path: string }[] = [];
  destroy$ = new Subject<void>();

  constructor(public itemStore: ItemStoreService, public route: ActivatedRoute, public userStore: UserStoreService) {
  }

  ngOnInit() {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.locations = data.locations || [];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
