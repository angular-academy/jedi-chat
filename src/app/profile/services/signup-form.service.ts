import { Injectable } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  private _form: FormGroup;


  constructor() {
    this._form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'matchingPassword': new FormControl(''),
      'bio': new FormControl(),
    }, matchingPasswords);
  }


  get form(): FormGroup {
    return this._form;
  }
}

const matchingPasswords: (grp: FormGroup) => ValidationErrors | null = (grp: FormGroup) => {
  if (grp.get('password').value === grp.get('matchingPassword').value) {
    return null;
  } else {
    return {PASSWORDS_DONT_MATCH: '******'};
  }
};
