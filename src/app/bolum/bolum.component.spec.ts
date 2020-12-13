/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BolumComponent } from './bolum.component';

describe('BolumComponent', () => {
  let component: BolumComponent;
  let fixture: ComponentFixture<BolumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
