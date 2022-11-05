import { Pipe, PipeTransform } from '@angular/core';
import { weathercode } from './utils/weathercode';

@Pipe({ name: 'wmoInterpret' })
export class WMOInterpretationPipe implements PipeTransform {
  transform(value: number) {
    return weathercode[value];
  }
}
