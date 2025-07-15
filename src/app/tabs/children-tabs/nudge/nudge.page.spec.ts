import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NudgePage } from './nudge.page';

describe('NudgePage', () => {
  let component: NudgePage;
  let fixture: ComponentFixture<NudgePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NudgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
