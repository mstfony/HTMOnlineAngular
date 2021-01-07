import { SendedRandevu } from './../models/sended-randevu';
import { Randevu } from './../models/randevu';
import { Saat } from './../models/saat';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class RandevuService {
  path = environment.path;
  randevu!: Randevu;
  sendRandevu!:SendedRandevu
  constructor(private httpClient: HttpClient) {}

  getSaatler(drKodu: number, dateTime: Date): Observable<Saat[]> {
    return this.httpClient.get<Saat[]>(
      this.path + '/Randevu/GetRandevuList/' + drKodu + '/' + dateTime
    );
  }

  setAppointment(randevu: Randevu): Observable<Randevu> {
    return this.httpClient.post<Randevu>(this.path + '/Randevu/Update', randevu);
  }

  deleteAppointment(id: number) {
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append("Authorization","Bearer "+localStorage.getItem('token'))
    return this.httpClient.post(this.path + '/Randevu/Delete/'+id, id,{headers:headers});
  }

  getAppointmentsById():Observable<Randevu[]>{
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append("Authorization","Bearer "+localStorage.getItem('token'))
    let kimlik=localStorage.getItem('kimlik');
    return this.httpClient.get<Randevu[]>(this.path+'/Randevu/GetPatientRandevuList/'+kimlik,{headers:headers})
  }
}
