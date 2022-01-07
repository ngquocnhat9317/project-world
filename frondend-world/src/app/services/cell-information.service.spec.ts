import { TestBed } from '@angular/core/testing';

import { CellInformationService } from './cell-information.service';

describe('CellInformationService', () => {
  let service: CellInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
