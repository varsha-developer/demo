import { TestBed } from '@angular/core/testing';

import { AllsataService } from './allsata.service';

describe('AllsataService', () => {
  let service: AllsataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllsataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
