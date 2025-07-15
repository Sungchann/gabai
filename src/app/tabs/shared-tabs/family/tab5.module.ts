import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';


import { Tab5PageRoutingModule } from './tab5-routing.module';
import { RemindersComponent } from "../../../shared/component/reminders/reminders.component";
import { FamilyLeaderboardComponent } from '../../../shared/component/family-leaderboard/family-leaderboard.component';
import { BituinComponent } from "src/app/shared/component/bituin/bituin.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab5PageRoutingModule,
    RemindersComponent,
    FamilyLeaderboardComponent,
    BituinComponent
],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
