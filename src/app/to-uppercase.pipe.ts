import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toUppercase' })
export class ToUppercasePipe implements PipeTransform {
  transform(value: string) {
    let capitalizedValue = value.replace(/^./, value[0].toUpperCase());
    return capitalizedValue;
  }
}
