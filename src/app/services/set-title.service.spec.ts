import { TestBed } from '@angular/core/testing';

import { SetTitleService } from './set-title.service';

describe('SetTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetTitleService = TestBed.get(SetTitleService);
    expect(service).toBeTruthy();
  });
});
