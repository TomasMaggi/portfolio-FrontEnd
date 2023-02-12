import { TestBed } from '@angular/core/testing';

import { DeleteComponentService } from './delete-component.service';

describe('DeleteComponentService', () => {
  let service: DeleteComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
