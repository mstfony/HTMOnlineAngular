import { Pipe, PipeTransform } from '@angular/core';
import { Bolum } from '../models/bolum';

@Pipe({
  name: 'bolumFilter',
})
export class BolumFilterPipe implements PipeTransform {
  transform(value: Bolum[], filterText?: any): Bolum[] {
    filterText = filterText ? filterText.toLowerCase() : null;
    return filterText
      ? value.filter(
          (data: Bolum) =>
            data.bolumAdi?.toLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
