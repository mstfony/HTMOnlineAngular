/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandevuService } from './randevu.service';

describe('Service: Randevu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandevuService]
    });
  });

  it('should ...', inject([RandevuService], (service: RandevuService) => {
    expect(service).toBeTruthy();
  }));
});
