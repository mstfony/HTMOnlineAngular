import { Laboratuvar } from './../models/laboratuvar';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'laboratuvarFilter'
})
export class LaboratuvarFilterPipe implements PipeTransform {

  transform(value: Laboratuvar[], filter?: any): Laboratuvar[] {
    filter = filter ? filter.toLowerCase() : '';
    return filter
      ? value.filter(
          (data: Laboratuvar) =>
            data.grupAdi?.toLowerCase().indexOf(filter) !== -1 ||
            data.testAdi?.toLowerCase().indexOf(filter) !== -1  
        )
      : value;
  }

}
