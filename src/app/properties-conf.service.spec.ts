import { TestBed } from '@angular/core/testing';

import { PropertiesConfService } from './properties-conf.service';

describe('PropertiesConfService', () => {
  let service: PropertiesConfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesConfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
