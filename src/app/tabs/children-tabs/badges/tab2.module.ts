import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';

// import { RemindersComponent } from "../shared/component/reminders/reminders.component";
import { RemindersComponent } from 'src/app/shared/component/reminders/reminders.component';
import { GrowthProgressComponent } from 'src/app/shared/component/growth-progress/growth-progress.component';
// import { GrowthProgressComponent } from '../shared/component/growth-progress/growth-progress.component';
// import { BadgeComponent } from '../shared/component/badge/badge.component';
import { BadgeComponent } from 'src/app/shared/component/badge/badge.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    RemindersComponent,
    GrowthProgressComponent,
    BadgeComponent
],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
