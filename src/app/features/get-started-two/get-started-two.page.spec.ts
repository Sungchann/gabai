import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetStartedTwoPage } from './get-started-two.page';

describe('GetStartedTwoPage', () => {
  let component: GetStartedTwoPage;
  let fixture: ComponentFixture<GetStartedTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
