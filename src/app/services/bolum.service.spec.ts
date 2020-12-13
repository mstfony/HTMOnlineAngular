/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BolumService } from './bolum.service';

describe('Service: Bolum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolumService]
    });
  });

  it('should ...', inject([BolumService], (service: BolumService) => {
    expect(service).toBeTruthy();
  }));
});
