import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BajaPage } from './baja.page';

describe('BajaPage', () => {
  let component: BajaPage;
  let fixture: ComponentFixture<BajaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
