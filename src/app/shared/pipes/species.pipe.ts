import { Pipe, PipeTransform } from '@angular/core';
import {Species} from '../models/user.model';
import {SpeciesDropdownOptions} from '../models/dropdown';

@Pipe({
  name: 'species'
})
export class SpeciesPipe implements PipeTransform {

  transform(value: Species): any {
    const result = SpeciesDropdownOptions.find(v => v.value === value);
    return result ? result.viewValue : 'Unknown';
  }

}
