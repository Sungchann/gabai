import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NudgePage } from './nudge.page';

const routes: Routes = [
  {
    path: '',
    component: NudgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NudgePageRoutingModule {}
