import { Kimlik } from './../models/kimlik';
import { Component, OnInit } from '@angular/core';
import { KimlikService } from '../services/kimlik.service';

@Component({
  selector: 'app-kimlik',
  templateUrl: './kimlik.component.html',
  styleUrls: ['./kimlik.component.css']
})
export class KimlikComponent implements OnInit {

  constructor(private kimlikService:KimlikService) { }

  kimliks: Kimlik = new Kimlik;

  ngOnInit() {
    this.kimlikService.getPatient().subscribe(data=>{
      this.kimliks=data;
    })
  }

}
