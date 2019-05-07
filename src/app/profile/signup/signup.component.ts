import {Component, OnInit} from '@angular/core';
import {fileUploadToBase64} from '../../shared/util/file-handling';
import {Observable} from 'rxjs';
import {FractionDropdownOptions, GenderDropdownOptions, SpeciesDropdownOptions} from '../../shared/models/dropdown';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {SignupFormService} from '../services/signup-form.service';
import {UserStoreService} from '../../core/user-store.service';
import {CreateUser} from '../../shared/models/user.model';

type Locations = { text: string, path: string }[];

@Component({
  selector: 'jc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private _avatar: string;

  public form: FormGroup;
  locations: Observable<Locations>;
  GenderDropdownOptions = GenderDropdownOptions;
  SpeciesDropdownOptions = SpeciesDropdownOptions;
  FractionDropdownOptions = FractionDropdownOptions;

  constructor(public route: ActivatedRoute,
              private _signupForm: SignupFormService,
              private _userStore: UserStoreService) {
  }

  ngOnInit() {
    this.form = this._signupForm.form;
    this.locations = this.route.data.pipe(map(data => data.locations || []));
  }

  onSubmit() {
    //  TODO: do something here
    console.log('submit');
    console.log(this.form.value);
    this._userStore.registerUser(this.form.value as CreateUser).subscribe(() => {
      this.form.reset();
      console.log('callback raised');
    });
  }

  onReset(event: Event): void {
    console.log('reset');
    event.preventDefault();
    event.stopPropagation();
    this.form.reset({
      'name' : '',
      'password': '',
      'bio' : '',
      'gender' : '',
      'species' : '',
      'fraction' : '',
      'avatar': ''
    });
  }

  async onFileUpload(event): Promise<void> {
    this._avatar = await fileUploadToBase64(event);
    console.log('profile pic was uploaded');
    //  TODO: do something with this
    this.form.get('avatar').setValue(this._avatar);
  }
}
