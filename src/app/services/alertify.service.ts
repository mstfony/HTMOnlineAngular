import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  success(message:string) {
    Swal.fire({
      title: 'İşlem Başarılı !',
      text: message,
      icon: 'success',
      confirmButtonText: 'Tamam',
    });
  }
  error(message:string) {
    Swal.fire({
      title: 'Hata !',
      text: message,
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  }
}
