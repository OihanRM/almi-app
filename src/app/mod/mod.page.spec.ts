import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModPage } from './mod.page';

describe('ModPage', () => {
  let component: ModPage;
  let fixture: ComponentFixture<ModPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
