import { Component, OnInit } from '@angular/core';
import {UserStoreService} from '../../core/user-store.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/user.model';
import {map} from 'rxjs/operators';

type Locations = { text: string, path: string }[];

@Component({
  selector: 'jc-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  locations: Observable<Locations>;
  user$: Observable<User>;

  constructor(private userStore: UserStoreService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.locations = this.route.data.pipe(map(data => data.locations || []));
    const nickname: string = this.route.snapshot.params['nickname'];
    this.user$ = this.userStore.getUser(nickname);
  }

}
