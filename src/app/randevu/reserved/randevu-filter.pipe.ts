import { Randevu } from './../../models/randevu';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randevu-filter'
})
export class RandevuFilterPipe implements PipeTransform {

  transform(value: Randevu[], filter?: any): Randevu[] {
    filter = filter ? filter.toLowerCase() : '';

    return filter
      ? value.filter(
          (data: Randevu) =>
            data.bolumAdi?.toLowerCase().indexOf(filter) !== -1 ||
            data.doktorAdi?.toLowerCase().indexOf(filter) !== -1 
           
        )
      : value;
  }

}
