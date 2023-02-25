import { TestBed } from '@angular/core/testing';

import { TimelimitCheckerInterceptor } from './timelimit-checker.interceptor';

describe('TimelimitCheckerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TimelimitCheckerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TimelimitCheckerInterceptor = TestBed.inject(TimelimitCheckerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
