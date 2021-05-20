import { TestBed } from '@angular/core/testing';

import { NgUiOkService } from './ng-ui-ok.service';

describe('NgUiOkService', () => {
  let service: NgUiOkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUiOkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
