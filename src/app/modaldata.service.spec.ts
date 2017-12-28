import { TestBed, inject } from '@angular/core/testing';

import { ModaldataService } from './modaldata.service';

describe('ModaldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModaldataService]
    });
  });

  it('should be created', inject([ModaldataService], (service: ModaldataService) => {
    expect(service).toBeTruthy();
  }));
});
