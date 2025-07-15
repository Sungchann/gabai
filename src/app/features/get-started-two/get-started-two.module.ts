import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetStartedTwoPageRoutingModule } from './get-started-two-routing.module';

import { GetStartedTwoPage } from './get-started-two.page';
import { ButtonComponent } from 'src/app/shared/component/button/button.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetStartedTwoPageRoutingModule,
    ButtonComponent
  ],
  declarations: [GetStartedTwoPage]
})
export class GetStartedTwoPageModule {}
