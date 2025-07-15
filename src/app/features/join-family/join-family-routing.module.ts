import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinFamilyPage } from './join-family.page';

const routes: Routes = [
  {
    path: '',
    component: JoinFamilyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinFamilyPageRoutingModule {}
