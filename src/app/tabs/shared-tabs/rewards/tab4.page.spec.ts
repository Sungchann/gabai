import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

import { Tab4Page } from './tab4.page';

describe('Tab4Page', () => {
  let component: Tab4Page;
  let fixture: ComponentFixture<Tab4Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab4Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
