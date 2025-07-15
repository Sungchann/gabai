import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/component/button/button.component';
import { IonicModule } from '@ionic/angular';
import { InputFormComponent } from 'src/app/shared/component/input-form/input-form.component';
import { NudgePageRoutingModule } from './nudge-routing.module';

import { NudgePage } from './nudge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NudgePageRoutingModule,
    ButtonComponent,
    InputFormComponent
  ],
  declarations: [NudgePage]
})
export class NudgePageModule {}
