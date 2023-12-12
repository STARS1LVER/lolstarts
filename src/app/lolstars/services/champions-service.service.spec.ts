import { TestBed } from '@angular/core/testing';

import { ChampionsServiceService } from './champions-service.service';

describe('ChampionsServiceService', () => {
  let service: ChampionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
