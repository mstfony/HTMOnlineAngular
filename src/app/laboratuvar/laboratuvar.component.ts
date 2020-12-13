import { HttpClient } from '@angular/common/http';
import { LabsonucService } from './../services/labsonuc.service';
import { Component, OnInit } from '@angular/core';
import { Laboratuvar } from '../models/laboratuvar';
import { ActivatedRoute } from '@angular/router';

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

  labSonucList: Laboratuvar[] = [];
  filter = '';
  ngOnInit() {
    this.activatedRoot.params.subscribe((params) => {
      this.getLabSonuc(params['id']);
    });
  }

  getLabSonuc(id:number) {
    this.labSonucService.getLabSonuc(id).subscribe((data) => {
      this.labSonucList = data;
    });
  }
}
