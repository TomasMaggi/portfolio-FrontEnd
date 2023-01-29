import { TestBed } from '@angular/core/testing';

import { GetDataloadService } from './get-dataload.service';

describe('GetDataloadService', () => {
  let service: GetDataloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
