import { TestBed } from '@angular/core/testing';

import { GendebtService } from './gendebt.service';

describe('GendebtService', () => {
  let service: GendebtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GendebtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
