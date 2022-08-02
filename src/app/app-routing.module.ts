import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: VexRoutes = [

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },

  {
    path: '',
    component: CustomLayoutComponent,
    children: [{
      path: 'pages',
      children: [
        {
          path: 'externalVacancies',
          loadChildren: () => import('./pages/external-vacancies/external-vacancies.module').then(m => m.ExternalVacanciesModule)
        },
        {
          path: 'applicantsSearch',
          loadChildren: () => import('./pages/applicants-search/applicants-search.module').then(m => m.ApplicantsSearchModule)
        },
        {
          path: 'userSearch',
          loadChildren: () => import('./pages/user-search/user-search.module').then(m => m.UserSearchModule)
        }

      ]
    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {
}