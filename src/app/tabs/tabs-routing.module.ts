import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./shared-tabs/home/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./children-tabs/badges/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./children-tabs/quests/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('./shared-tabs/rewards/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('./shared-tabs/family/tab5.module').then(m => m.Tab5PageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'wishlist',
        loadChildren: () => import('./parent-tabs/wishlist/wishlist.module').then( m => m.WishlistPageModule)
      },
      {
        path: 'chatbot',
        loadChildren: () => import('./parent-tabs/chatbot/chatbot.module').then( m => m.ChatbotPageModule)
      },
      {
        path: 'nudge',
        loadChildren: () => import('./children-tabs/nudge/nudge.module').then( m => m.NudgePageModule)
      }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
