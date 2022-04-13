import { TestBed } from '@angular/core/testing';

import { MoviesDetailsService } from './movies-details.service';

describe('MoviesDetailsService', () => {
  let service: MoviesDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
