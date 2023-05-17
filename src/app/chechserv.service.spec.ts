import { TestBed } from '@angular/core/testing';

import { ChechservService } from './chechserv.service';

describe('ChechservService', () => {
  let service: ChechservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChechservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
