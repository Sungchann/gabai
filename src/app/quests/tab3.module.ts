import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CategoryComponent } from '../shared/component/category/category.component';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { QuestComponent } from "../shared/component/quest/quest.component";
import { ProgressComponent } from "../shared/component/progress/progress.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    CategoryComponent,
    QuestComponent,
    ProgressComponent
],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
