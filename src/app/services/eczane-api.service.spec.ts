/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EczaneApiService } from './eczane-api.service';

describe('Service: EczaneApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EczaneApiService]
    });
  });

  it('should ...', inject([EczaneApiService], (service: EczaneApiService) => {
    expect(service).toBeTruthy();
  }));
});
