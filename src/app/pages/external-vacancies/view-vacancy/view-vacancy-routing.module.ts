import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ViewVacancyComponent } from './view-vacancy.component';




const routes: Routes = [
    {
        path: '',
        component: ViewVacancyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, QuicklinkModule]
})
export class ViewVacancyRoutingModule {
}
