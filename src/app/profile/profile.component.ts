import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { DEMO_USERS } from '../../mock-data';
import { Subject } from 'rxjs';
import { ItemStoreService } from '../chat/item-store.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { UserStoreService } from '../core/user-store.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'jc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  locations: { text: string, path: string }[] = [];
  destroy$ = new Subject<void>();

  constructor(public route: ActivatedRoute, private userStore: UserStoreService) {
  }

  ngOnInit() {
    this.user = {...this.userStore.user};
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.locations = data.locations || [];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  onSubmit(form: NgForm) {
    this.userStore.user = {...this.user};
    this.user = {...this.userStore.user};
  }
}
