import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssessmentPageRoutingModule } from './assessment-routing.module';

import { AssessmentPage } from './assessment.page';
import { InputFormComponent } from 'src/app/shared/component/input-form/input-form.component';
import { ButtonComponent } from 'src/app/shared/component/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssessmentPageRoutingModule,
    InputFormComponent,
    ButtonComponent
  ],
  declarations: [AssessmentPage]
})
export class AssessmentPageModule {}
