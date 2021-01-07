import { LaboratuvarDetail } from './../models/laboratuvar-detail';
import { HttpClient } from '@angular/common/http';
import { LabsonucService } from './../services/labsonuc.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Laboratuvar } from '../models/laboratuvar';
import { ActivatedRoute } from '@angular/router';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-laboratuvar',
  templateUrl: './laboratuvar.component.html',
  styleUrls: ['./laboratuvar.component.css'],
  providers: [LabsonucService],
})
export class LaboratuvarComponent implements OnInit {
  constructor(
    private labSonucService: LabsonucService,
    private activatedRoot: ActivatedRoute
  ) {}
  //panelOpenState = false;
  //panelOpenState = false;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  labSonucList: LaboratuvarDetail[] = [];
  errorMessage!: string;
  filter = '';
  confirmIcon = faCheckCircle;
  minusIcon = faMinusCircle;

  nameSurname!: string;
  identity!: string;
  doctorName!:string;
  departmentName!:string;
  
  ngOnInit() {
    this.activatedRoot.params.subscribe((params) => {
      this.getLabSonuc(+(atob(params['id'])));
     
    });
    this.getKimlik();
  }

  yazdir() {
    this.accordion.openAll();
    setTimeout(function(){
      window.print();
    },500)
    
  }

  getKimlik(){
    this.nameSurname=localStorage.getItem('name')+" "+localStorage.getItem('surName');
    this.identity=JSON.parse(localStorage.getItem('kimlik') || '{}');
  }

  getLabSonuc(id: number) {
    this.labSonucService.getLabSonuc(id).subscribe(
      (data) => {
        this.labSonucList = data;
        
      },
      (err) => {
        
        this.errorMessage =
          'Bu muayenenizde bir laboratuvar tetkiki bulunmamaktadır.';
      }
    );
  }
}
