import { EczaneData } from './../models/eczane-data';
import { Eczane } from './../models/eczane';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EczaneApiService {

constructor(private httpClient:HttpClient) { }

path:string="http://api.kodlama.net/eczane/il/27";

getEczaneList():Observable<Eczane>{
  
  return this.httpClient.get<Eczane>(this.path)
 

}

}
