import { TestBed } from '@angular/core/testing';

import { NgxEthereumService } from './ngx-ethereum.service';

describe('NgxEthereumService', () => {
  let service: NgxEthereumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEthereumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
