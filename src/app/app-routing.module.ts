import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
          path: 'viewVacancy',
          loadChildren: () => import('./pages/external-vacancies/view-vacancy/view-vacancy.module').then(m => m.ViewVacancyModule)
        },
        {
          path: 'vacancy/:id',
          loadChildren: () => import('./pages/external-vacancies/edit-vacancy/edit-vacancy.module').then(m => m.EditVacancyModule)
        },
        {
          path: 'allVacancies',
          loadChildren: () => import('./pages/external-vacancies/external-vacancies.module').then(m => m.ExternalVacanciesModule)
        },
        {
          path: 'newVacancies',
          loadChildren: () => import('./pages/external-vacancies/new-vacancy/new-vacancy.module').then(m => m.NewVacancyModule)
        },
        {
          path: 'activeVacancies',
          loadChildren: () => import('./pages/external-vacancies/active-vacancy/active-vacancy.module').then(m => m.ActiveVacancyModule)
        },
        {
          path: 'cancelledVacancies',
          loadChildren: () => import('./pages/external-vacancies/cancelled-vacancy/cancelled-vacancy.module').then(m => m.CancelledVacancyModule)
        },
        {
          path: 'completedVacancies',
          loadChildren: () => import('./pages/external-vacancies/completed-vacancy/completed-vacancy.module').then(m => m.CompletedVacancyModule)
        },
        {
          path: 'stoppedVacancies',
          loadChildren: () => import('./pages/external-vacancies/stopped-vacancy/stopped-vacancy.module').then(m => m.StoppedVacancyModule)
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
  },




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