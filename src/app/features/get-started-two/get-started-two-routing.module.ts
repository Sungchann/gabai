import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStartedTwoPage } from './get-started-two.page';

const routes: Routes = [
  {
    path: '',
    component: GetStartedTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetStartedTwoPageRoutingModule {}
