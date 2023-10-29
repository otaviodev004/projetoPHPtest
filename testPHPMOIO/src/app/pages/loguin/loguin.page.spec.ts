import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoguinPage } from './loguin.page';

describe('LoguinPage', () => {
  let component: LoguinPage;
  let fixture: ComponentFixture<LoguinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoguinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
