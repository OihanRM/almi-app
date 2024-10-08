import { TestBed } from '@angular/core/testing';

import { AlumnadoService } from './alumnado.service';

describe('AlumnadoService', () => {
  let service: AlumnadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
