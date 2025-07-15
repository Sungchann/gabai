import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinFamilyPage } from './join-family.page';

describe('JoinFamilyPage', () => {
  let component: JoinFamilyPage;
  let fixture: ComponentFixture<JoinFamilyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
