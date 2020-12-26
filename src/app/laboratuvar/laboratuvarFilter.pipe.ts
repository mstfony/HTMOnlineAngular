import { LaboratuvarDetail } from './../models/laboratuvar-detail';
import { Laboratuvar } from './../models/laboratuvar';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'laboratuvarFilter'
})
export class LaboratuvarFilterPipe implements PipeTransform {

  transform(value: any, filter?: any): LaboratuvarDetail[] {
    filter = filter ? filter.toLowerCase() : '';
    return filter
      ? value.filter(
          (data: LaboratuvarDetail) =>
           data.grupAdi?.toLowerCase().indexOf(filter) !== -1  
        )
      : value;
  }

}
