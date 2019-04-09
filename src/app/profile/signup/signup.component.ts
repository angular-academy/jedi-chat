import { Component, OnInit } from '@angular/core';
import {fileUploadToBase64} from '../../shared/util/file-handling';
import {Observable} from 'rxjs';
import {FractionDropdownOptions, GenderDropdownOptions, SpeciesDropdownOptions} from '../../shared/models/dropdown';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {SignupFormService} from '../services/signup-form.service';

type Locations = { text: string, path: string }[];

@Component({
  selector: 'jc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  locations: Observable<Locations>;
  GenderDropdownOptions = GenderDropdownOptions;
  SpeciesDropdownOptions = SpeciesDropdownOptions;
  FractionDropdownOptions = FractionDropdownOptions;

  constructor(public route: ActivatedRoute,
              private _signupForm: SignupFormService) { }

  ngOnInit() {
    this.form = this._signupForm.form;
    this.locations = this.route.data.pipe(map(data => data.locations || []));
  }

  onSubmit() {
    //  TODO: do something here
    console.log('submit');
    console.log(this.form.value);
  }

  onReset(event: Event): void {
    console.log('reset');
    //  TODO: do something here
  }

  async onFileUpload(event): Promise<void> {
    const avatar: string = await fileUploadToBase64(event);
    console.log('profile pic was uploaded');
    //  TODO: do something with this
  }
}
