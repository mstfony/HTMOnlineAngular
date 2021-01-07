import { LaboratuvarDetail } from './../models/laboratuvar-detail';
import { environment } from './../../environments/environment.prod';
import { Laboratuvar } from './../models/laboratuvar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class LabsonucService {
  constructor(private httpClient: HttpClient) {}

  path = environment.path+'/Laboratuvar/GetById/';

  getLabSonuc(id: number): Observable<LaboratuvarDetail[]> {
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append("Authorization","Bearer "+localStorage.getItem('token'))
    return this.httpClient
      .get<LaboratuvarDetail[]>(this.path + id,{headers:headers})
      .pipe(retry(1), catchError(this.handleError));
  }
  handleError(error: { error: { message: any; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    return throwError(errorMessage);
  }
}
