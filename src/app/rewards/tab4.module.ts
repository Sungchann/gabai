import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { MoodTrackerComponent } from "../shared/component/mood-tracker/mood-tracker.component";
import { RedeemComponent } from "../shared/component/redeem/redeem.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule,
    MoodTrackerComponent,
    RedeemComponent
],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
