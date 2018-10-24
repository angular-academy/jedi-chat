import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageAge'
})
export class MessageAgePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const now: Date = (args) ? <Date> args : new Date();

    // achtung: args kann auch string oder number sein
    const dif = Math.max(0, (now.getTime()) - (<Date> value).getTime() );

    const seconds = Math.floor( dif / 1000 );

    return `${seconds} seconds`;
  }

}
