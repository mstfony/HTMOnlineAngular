import { Eczane } from './../models/eczane';
import { EczaneApiService } from './../services/eczane-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nobetci-eczane',
  templateUrl: './nobetci-eczane.component.html',
  styleUrls: ['./nobetci-eczane.component.css'],
  providers:[EczaneApiService]
})
export class NobetciEczaneComponent implements OnInit {

  constructor(private eczaneService:EczaneApiService) { }

  nobetciEczaneModel!:Eczane;
  
  ngOnInit() {
    this.eczaneService.getEczaneList().subscribe(data=>{

      this.nobetciEczaneModel=data;
    })
  }

}
