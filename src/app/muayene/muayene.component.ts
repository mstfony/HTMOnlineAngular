import { MuayeneFilterPipe } from './muayeneFilter.pipe';
import { MuayeneService } from './../services/muayene.service';
import { Component, OnInit } from '@angular/core';
import { Muayene } from '../models/muayene';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-muayene',
  templateUrl: './muayene.component.html',
  styleUrls: ['./muayene.component.css'],
  providers: [MuayeneService],
})
export class MuayeneComponent implements OnInit {
  constructor(
    private muayeneService: MuayeneService,
    private activatedRoot: ActivatedRoute
  ) {}

  muayeneList: Muayene[] = [];
  filter = '';
  ngOnInit() {
    this.activatedRoot.params.subscribe((params) => {
      this.getMuayeneList(params['id']);
    });
  }
  getMuayeneList(id: number) {
    this.muayeneService.getMuayeneList(id).subscribe(
      (data) => {
        this.muayeneList = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
