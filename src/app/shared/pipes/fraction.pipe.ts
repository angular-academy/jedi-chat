import { Pipe, PipeTransform } from '@angular/core';
import {Fraction} from '../models/user.model';
import {FractionDropdownOptions} from '../models/dropdown';

@Pipe({
  name: 'fraction'
})
export class FractionPipe implements PipeTransform {

  transform(value: Fraction): any {
    const result = FractionDropdownOptions.find(v => v.value === value);
    return result ? result.viewValue : 'Unknown';
  }

}
