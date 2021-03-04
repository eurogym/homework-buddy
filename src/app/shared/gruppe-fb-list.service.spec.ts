import { TestBed } from '@angular/core/testing';

import { GruppeFBListService } from './gruppe-fb-list.service';

describe('GruppeFBListService', () => {
  let service: GruppeFBListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruppeFBListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
