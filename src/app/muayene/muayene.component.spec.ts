/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuayeneComponent } from './muayene.component';

describe('MuayeneComponent', () => {
  let component: MuayeneComponent;
  let fixture: ComponentFixture<MuayeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuayeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuayeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
