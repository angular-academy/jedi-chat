import { Component, OnInit } from '@angular/core';
import {CreateUser, User} from '../shared/models/user.model';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import { NgForm } from '@angular/forms';

type Locations = { text: string, path: string }[];

@Component({
  selector: 'jc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: CreateUser;
  locations: Observable<Locations>;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    //TODO: use me for something
    this.user = {avatar: '', bio: '', fraction: 'GALACTIC_EMPIRE', gender: 'MALE', nickName: '', species: 'HUMAN', matchingPassword: '', password: ''};
    this.locations = this.route.data.pipe(map(data => data.locations || []));
  }


  onSubmit(form: NgForm) {
    //TODO: do something here
    alert('Do something here!');
  }

  onReset(event: Event): void {
    console.log(event);
    //TODO: do something here ??
    alert('Do something here ??');
  }
}
