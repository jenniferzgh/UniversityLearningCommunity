import { TestBed } from '@angular/core/testing';

import { ArticalCardService } from './artical-card.service';

describe('ArticalCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticalCardService = TestBed.get(ArticalCardService);
    expect(service).toBeTruthy();
  });
});
