/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NobetciEczaneComponent } from './nobetci-eczane.component';

describe('NobetciEczaneComponent', () => {
  let component: NobetciEczaneComponent;
  let fixture: ComponentFixture<NobetciEczaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NobetciEczaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NobetciEczaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
