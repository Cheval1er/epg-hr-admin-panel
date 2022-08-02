import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ExternalVacanciesComponent } from './external-vacancies.component';



const routes: Routes = [
    {
        path: '',
        component: ExternalVacanciesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, QuicklinkModule]
})
export class ExternalVacanciesRoutingModule {
}
