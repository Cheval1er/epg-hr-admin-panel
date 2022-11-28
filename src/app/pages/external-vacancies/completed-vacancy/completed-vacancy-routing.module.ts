import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { CompletedVacancyComponent } from './completed-vacancy.component';



const routes: Routes = [
    {
        path: '',
        component: CompletedVacancyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, QuicklinkModule]
})
export class CompletedVacancyRoutingModule {
}
