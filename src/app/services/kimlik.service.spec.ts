/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KimlikService } from './kimlik.service';

describe('Service: Kimlik', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KimlikService]
    });
  });

  it('should ...', inject([KimlikService], (service: KimlikService) => {
    expect(service).toBeTruthy();
  }));
});
