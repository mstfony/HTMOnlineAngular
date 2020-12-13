/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MuayeneService } from './muayene.service';

describe('Service: Muayene', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuayeneService]
    });
  });

  it('should ...', inject([MuayeneService], (service: MuayeneService) => {
    expect(service).toBeTruthy();
  }));
});
