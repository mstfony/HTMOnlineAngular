/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KimlikComponent } from './kimlik.component';

describe('KimlikComponent', () => {
  let component: KimlikComponent;
  let fixture: ComponentFixture<KimlikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KimlikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KimlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
