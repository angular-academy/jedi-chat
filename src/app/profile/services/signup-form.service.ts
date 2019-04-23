import { Injectable } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  private _form: FormGroup;

  constructor() {
    const password = new FormControl('');
    const matchingPassword = new FormControl('', matchingPasswordValidator(password));

    const validator = matchingPasswordValidator(matchingPassword);
    password.setValidators([validator, Validators.required, Validators.minLength(5)]);

    this._form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'password': password,
      'matchingPassword': matchingPassword,
      'passwords': new FormGroup({
        'password': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'matchingPassword': new FormControl('')
      }, matchingPasswords),
      'bio': new FormControl(),
      'gender': new FormControl(),
      'species': new FormControl(),
      'fraction': new FormControl()
    });
  }


  get form(): FormGroup {
    return this._form;
  }
}

const matchingPasswordValidator = (ctrl1: FormControl) => {
  return (ctrl2: FormControl) => {
    if (ctrl1.value === ctrl2.value) {
      return null;
    } else {
      return {PASSWORDS_DONT_MATCH: 'passwords do not match'};
    }
};
};

const matchingPasswords: (grp: FormGroup) => ValidationErrors | null = (grp: FormGroup) => {
  if (grp.get('password').value === grp.get('matchingPassword').value) {
    return null;
  } else {
    return {PASSWORDS_DONT_MATCH: 'passwords do not match'};
  }
};
