import { TestBed } from '@angular/core/testing';

import { WebArticlesService } from './web-articles-service';

describe('WebArticlesService', () => {
  let service: WebArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
