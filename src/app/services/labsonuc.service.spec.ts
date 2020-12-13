/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LabsonucService } from './labsonuc.service';

describe('Service: Labsonuc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabsonucService]
    });
  });

  it('should ...', inject([LabsonucService], (service: LabsonucService) => {
    expect(service).toBeTruthy();
  }));
});
