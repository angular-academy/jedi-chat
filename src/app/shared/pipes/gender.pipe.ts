import { Pipe, PipeTransform } from '@angular/core';
import {Gender} from '../models/user.model';
import {GenderDropdownOptions} from '../models/dropdown';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Gender): any {
    const result = GenderDropdownOptions.find(v => v.value === value);
    return result ? result.viewValue : 'Unknown';
  }

}
