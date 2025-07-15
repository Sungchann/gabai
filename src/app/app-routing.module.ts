import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'assessment',
    loadChildren: () => import('./features/assessment/assessment/assessment.module').then( m => m.AssessmentPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./features/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./features/get-started/get-started.module').then( m => m.GetStartedPageModule)
  },
  {
    path: 'loading-test',
    loadComponent: () => import('./shared/component/loading-screen/loading-screen.component').then(c => c.LoadingScreenComponent)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./features/onboarding/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'get-started-two',
    loadChildren: () => import('./features/get-started-two/get-started-two.module').then( m => m.GetStartedTwoPageModule)
  },
  {
    path: 'join-family',
    loadChildren: () => import('./features/join-family/join-family.module').then( m => m.JoinFamilyPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
