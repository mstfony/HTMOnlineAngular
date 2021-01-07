import { Kimlik } from './../models/kimlik';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient, private router: Router,private jwtHelper: JwtHelperService) {}
  
  path = environment.path + '/Auth/register';
  pathValidate = environment.path + '/Auth/Login';
  pathKimlik = environment.path + '/Kimlik/GetById/';

  kimlik!: Kimlik;
  userToken: any;
  decodedToken: any;
  TOKEN_KEY = 'token';
  isLogged = false;
 

  getKey(identity: string){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
   return this.http.post(this.path + '?identity=' + identity, identity, { headers: headers });
  }

  login(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.pathValidate, user, { headers: headers })
      .subscribe((data: any) => {
        this.saveToken(data['token']);
        this.userToken = data['token'];
        this.isLogged = true;
        this.getPatient(user.identity);
        
      });
  }

  getPatient(identity: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.userToken);

    this.http
      .get<Kimlik>(this.pathKimlik + identity, { headers: headers })
      .subscribe((data) => {
        this.kimlik = data;
        localStorage.setItem(
          'dosyaNo',
          this.kimlik.dosyaNo != null ? this.kimlik.dosyaNo?.toString() : ''
        );
        localStorage.setItem(
          'kimlik',
          identity != null ? identity.toString() : ''
        );
        localStorage.setItem(
          'name',
          this.kimlik.adi != null ? this.kimlik.adi : ''
        );
        localStorage.setItem(
          'surName',
          this.kimlik.soyadi != null ? this.kimlik.soyadi : ''
        );
        this.router.navigateByUrl('/muayene');
      });
  }

  saveToken(token: any) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.clear();
    this.router.navigateByUrl('/randevu');
  }

  isTokenExpire(){
   
    return this.jwtHelper.isTokenExpired()
  }
}
