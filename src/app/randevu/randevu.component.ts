import { AlertifyService } from './../services/alertify.service';
import { SendedRandevu } from './../models/sended-randevu';
import { Saat } from './../models/saat';
import { RandevuService } from './../services/randevu.service';
import { DoktorService } from './../services/doktor.service';
import { BolumService } from './../services/bolum.service';
import { Doktor } from './../models/doktor';
import { Bolum } from './../models/bolum';
import { Randevu } from './../models/randevu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Injectable, OnInit } from '@angular/core';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {formatDate} from '@angular/common';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-randevu',
  templateUrl: './randevu.component.html',
  styleUrls: ['./randevu.component.css'],
  providers: [DoktorService, BolumService, RandevuService,{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }],
})
export class RandevuComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private bolumService: BolumService,
    private doktorService: DoktorService,
    private randevuService: RandevuService,
    private alert:AlertifyService,
    public dialog: MatDialog
  ) {}

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  randevuAddForm!: FormGroup;
  randevu!: Randevu;
  departments: Bolum[] = [];
  doctors: Doktor[] = [];
  dateTime: Date = new Date();
  drId!: number;
  saats: Saat[] = [];
  sendRandevu: SendedRandevu = new SendedRandevu();
  siraNo!: number;

  createRandevuAddForm() {
    this.randevuAddForm = this.formBuilder.group({
      tcKimlikNo: ['', Validators.required],
      adi: ['', Validators.required],
      soyadi: ['', Validators.required],
      cepTel: ['', Validators.required],
      bolumKodu: [0, Validators.required],
      drKodu: [0, Validators.required],
      tarih: ['', Validators.required],
      siraNo: [0, Validators.required],
    });
  }



  ngOnInit() {
    this.bolumService.getDepartments().subscribe((data) => {
      this.departments = data;
    });
    this.createRandevuAddForm();
    this.firstFormGroup = this.formBuilder.group({
      tcKimlikNo: ['', Validators.required],
      adi: ['', Validators.required],
      soyadi: ['', Validators.required],
      cepTel: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      bolumKodu: [0, Validators.required],
      drKodu: [0, Validators.required],
      tarih: ['', Validators.required],
      siraNo: [0, Validators.required],
    });
  }

  getDoctors(dep: any) {
    console.log(dep);
    let depId: number = dep.target.selectedOptions[0].dataset.value;
    console.log(depId);
    this.doktorService.getDoktorById(depId).subscribe((data) => {
      this.doctors = data;
    });
  }

  getTimes() {
    if (!this.randevuAddForm.get('tarih')?.value) {
     this.randevuAddForm.patchValue({
       tarih:formatDate(new Date(), 'yyyy-MM-dd', 'en')
     })
    }
    
    this.randevuService
      .getSaatler(
        this.randevuAddForm.get('drKodu')?.value,
        this.randevuAddForm.get('tarih')?.value
      )
      .subscribe((data) => {
        this.saats = data;
      });
  }
  setDate(){
    this.dateTime=new Date;
    console.log(this.dateTime);
  }
  add() {
    if (this.randevuAddForm.valid) {
      this.randevu = Object.assign({}, this.randevuAddForm.value);
      this.randevuService.setAppointment(this.randevu).subscribe((rndData) => {
       this.alert.success("Randevu Numaranız : " + this.randevu.siraNo)
      });
    }
  }
}
