import { TestBed } from '@angular/core/testing';

import { AppLevelHttpInterceptor } from './http-interceptor.interceptor';

describe('HttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppLevelHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppLevelHttpInterceptor = TestBed.inject(AppLevelHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
