/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoktorService } from './doktor.service';

describe('Service: Doktor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoktorService]
    });
  });

  it('should ...', inject([DoktorService], (service: DoktorService) => {
    expect(service).toBeTruthy();
  }));
});
