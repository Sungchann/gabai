import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinFamilyPageRoutingModule } from './join-family-routing.module';

import { JoinFamilyPage } from './join-family.page';
import { InputFormComponent } from 'src/app/shared/component/input-form/input-form.component';
import { ButtonComponent } from 'src/app/shared/component/button/button.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinFamilyPageRoutingModule,
    InputFormComponent,
    ButtonComponent
  ],
  declarations: [JoinFamilyPage]
})
export class JoinFamilyPageModule {}
