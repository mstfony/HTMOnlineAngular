import { AlertifyService } from './../services/alertify.service';

import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(public alert : AlertifyService) {}
    
    handleError(error: any) {
      this.alert.error(error.error);
      console.error('Hata oluştu');
      console.log(error.url);
      console.log(error.status);
      console.log(error.name);
      console.log(error.message);
      console.log(error.statusText);
      console.log(error.error);
    }
  
  }