import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bolum } from '../models/bolum';

@Injectable()
export class BolumService {

constructor(private httpClient:HttpClient) { }

path=environment.path+"/Bolum/GetBolumList";

getDepartments():Observable<Bolum[]>{
  
  return this.httpClient.get<Bolum[]>(this.path);
}

}
