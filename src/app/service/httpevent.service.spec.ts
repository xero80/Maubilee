import { TestBed } from '@angular/core/testing';

import { HttpeventService } from './httpevent.service';

describe('HttpeventService', () => {
  let service: HttpeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
