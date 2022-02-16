import { TestBed } from '@angular/core/testing';

import { ToyServiceService } from './toy-service.service';

describe('ToyServiceService', () => {
  let service: ToyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
