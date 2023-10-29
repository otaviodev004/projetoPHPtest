import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalLocalPage } from './modal-local.page';

describe('ModalLocalPage', () => {
  let component: ModalLocalPage;
  let fixture: ComponentFixture<ModalLocalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
