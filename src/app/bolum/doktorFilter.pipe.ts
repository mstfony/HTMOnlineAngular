import { Pipe, PipeTransform } from '@angular/core';
import { Doktor } from '../models/doktor';

@Pipe({
  name: 'doktorFilter'
})
export class DoktorFilterPipe implements PipeTransform {

  transform(value: Doktor[], filterTextDoktor?: any): Doktor[] {
    filterTextDoktor = filterTextDoktor ? filterTextDoktor.toLowerCase() : null;
    return filterTextDoktor
      ? value.filter(
          (data: Doktor) =>
            data.drAdi?.toLowerCase().indexOf(filterTextDoktor) !== -1
        )
      : value;
  }

}
