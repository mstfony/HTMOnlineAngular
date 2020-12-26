import { DoktorService } from './../services/doktor.service';
import { BolumService } from './../services/bolum.service';
import { Component, OnInit } from '@angular/core';
import { Bolum } from '../models/bolum';
import { Doktor } from '../models/doktor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bolum',
  templateUrl: './bolum.component.html',
  styleUrls: ['./bolum.component.css'],
  providers:[BolumService,DoktorService]

})
export class BolumComponent implements OnInit {

  constructor(private bolumService :BolumService,private doktorService:DoktorService,private activatedRoot:ActivatedRoute ) { }
  bolumList: Bolum[] = [];
  doktorList: Doktor[]=[];
  filterText!:null
  filterTextDoktor:null

  ngOnInit() {
  
    this.bolumService.getDepartments().subscribe(data=>{
      this.bolumList=data;
    });
    this.doktorService.getDoktors().subscribe(data=>{
      this.doktorList=data;
    });

    this.activatedRoot.params.subscribe((params)=>{
      params['id']!=null?this.getDoctorById(params['id']):null;
    })

  }

  getDoctorById(id:number){
    this.doktorService.getDoktorById(id).subscribe(data=>{
      this.doktorList=data;
    })
  }

}
