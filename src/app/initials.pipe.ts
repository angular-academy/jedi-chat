import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, separator?: string): any {
    return value
      .split(' ') // "Bob Marley Jr." -> ["Bob", "Marley", "Jr."]
      .map(part => part.charAt(0).toUpperCase()) // ["Bob", "Marley", "Jr."] -> ["B", "M", "J"]
      .join(separator || '')
      .concat(separator || '');
  }

}
