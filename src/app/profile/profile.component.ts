import { Component, OnInit } from '@angular/core';
import {CreateUser} from '../shared/models/user.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import {fileUploadToBase64} from '../shared/util/file-handling';
import {FractionDropdownOptions, GenderDropdownOptions, SpeciesDropdownOptions} from '../shared/models/dropdown';
import {UserStoreService} from '../core/user-store.service';
import {HttpErrorResponse} from '@angular/common/http';

type Locations = { text: string, path: string }[];

@Component({
  selector: 'jc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: CreateUser;
  locations: Observable<Locations>;
  GenderDropdownOptions = GenderDropdownOptions;
  SpeciesDropdownOptions = SpeciesDropdownOptions;
  FractionDropdownOptions = FractionDropdownOptions;

  constructor(public route: ActivatedRoute,
              private router: Router,
              private userStore: UserStoreService) {
  }

  ngOnInit() {
    this.user = {avatar: '', bio: '', fraction: 'GALACTIC_EMPIRE', gender: 'MALE', nickName: '', species: 'HUMAN', matchingPassword: '', password: ''};
    this.locations = this.route.data.pipe(map(data => data.locations || []));
  }


  onSubmit(form: NgForm) {
    this.userStore.registerUser(this.user)
      .subscribe(success => {
        if (success) {
          this.router.navigate(['profile', this.user.nickName]);
        }
      }, (err: HttpErrorResponse) => {
        alert('backend says no :/ Status code is: ' + err.status);
      });
  }

  onReset(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.user.nickName = '';
    this.user.password = '';
    this.user.matchingPassword = '';
    this.user.bio = '';
    this.user.avatar = '';
    this.user.fraction = 'GALACTIC_EMPIRE';
    this.user.gender = 'MALE';
    this.user.species = 'HUMAN';
  }

  async onFileUpload(event): Promise<void> {
    this.user.avatar = await fileUploadToBase64(event);
    console.log(this.user.avatar);
  }
}
