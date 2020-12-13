import { Pipe, PipeTransform } from '@angular/core';
import { Muayene } from '../models/muayene';

@Pipe({
  name: 'muayeneFilter',
})
export class MuayeneFilterPipe implements PipeTransform {
  transform(value: Muayene[], filter?: any): Muayene[] {
    filter = filter ? filter.toLowerCase() : '';

    return filter
      ? value.filter(
          (data: Muayene) =>
            data.bolum?.toLowerCase().indexOf(filter) !== -1 ||
            data.doktor?.toLowerCase().indexOf(filter) !== -1 ||
            data.protokolNo?.toString().indexOf(filter) !== -1
        )
      : value;
  }
}
