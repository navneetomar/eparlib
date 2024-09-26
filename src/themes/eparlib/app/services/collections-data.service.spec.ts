import { TestBed } from '@angular/core/testing';

import { CollectionsDataService } from './collections-data.service';

describe('CollectionsDataService', () => {
  let service: CollectionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
