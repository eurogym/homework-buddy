import { TestBed } from '@angular/core/testing';

import { addFaecherListService } from './addFaecher.service';

describe('AddFaecherService', () => {
  let service: addFaecherListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(addFaecherListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
