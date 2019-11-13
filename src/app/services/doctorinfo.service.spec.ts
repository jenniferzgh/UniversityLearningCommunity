import { TestBed } from '@angular/core/testing';

import { DoctorinfoService } from './doctorinfo.service';

describe('DoctorinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorinfoService = TestBed.get(DoctorinfoService);
    expect(service).toBeTruthy();
  });
});
