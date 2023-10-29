import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalExLocalPage } from './modal-ex-local.page';

describe('ModalExLocalPage', () => {
  let component: ModalExLocalPage;
  let fixture: ComponentFixture<ModalExLocalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalExLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
