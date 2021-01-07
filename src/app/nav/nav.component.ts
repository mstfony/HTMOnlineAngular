import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accontService:AccountService) { }
  
  ngOnInit() {
    
  }
  logOut(){
    this.accontService.logOut();
  }

  get isAuthenticated(){
    //return localStorage.getItem('token');
    return this.accontService.isTokenExpire();
  }
  

}
