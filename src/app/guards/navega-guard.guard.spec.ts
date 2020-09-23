import { TestBed } from '@angular/core/testing';

import { NavegaGuardGuard } from './navega-guard.guard';

describe('NavegaGuardGuard', () => {
  let guard: NavegaGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NavegaGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
