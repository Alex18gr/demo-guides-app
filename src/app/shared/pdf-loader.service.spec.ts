import { TestBed } from '@angular/core/testing';

import { PdfLoaderService } from './pdf-loader.service';

describe('PdfLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfLoaderService = TestBed.get(PdfLoaderService);
    expect(service).toBeTruthy();
  });
});
