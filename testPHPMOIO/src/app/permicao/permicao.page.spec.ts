import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermicaoPage } from './permicao.page';

describe('PermicaoPage', () => {
  let component: PermicaoPage;
  let fixture: ComponentFixture<PermicaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PermicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
