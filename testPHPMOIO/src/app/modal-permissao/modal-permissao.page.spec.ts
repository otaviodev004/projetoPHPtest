import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPermissaoPage } from './modal-permissao.page';

describe('ModalPermissaoPage', () => {
  let component: ModalPermissaoPage;
  let fixture: ComponentFixture<ModalPermissaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalPermissaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
