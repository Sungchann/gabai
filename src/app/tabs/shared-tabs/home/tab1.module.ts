import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
// import { AccessComponent } from '../shared/component/access/access.component';
import { AccessComponent } from 'src/app/shared/component/access/access.component';
// import { RecentAdventuresComponent } from '../shared/component/recent-adventures/recent-adventures.component';
import { RecentAdventuresComponent } from 'src/app/shared/component/recent-adventures/recent-adventures.component';
// import { MoodTrackerComponent } from '../shared/component/mood-tracker/mood-tracker.component';
import { MoodTrackerComponent } from 'src/app/shared/component/mood-tracker/mood-tracker.component';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RemindersComponent } from "src/app/shared/component/reminders/reminders.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    AccessComponent,
    RecentAdventuresComponent,
    MoodTrackerComponent,
    RemindersComponent
],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
