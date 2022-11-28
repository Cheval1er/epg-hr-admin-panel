import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { CancelledVacancyComponent } from './cancelled-vacancy.component';



const routes: Routes = [
    {
        path: '',
        component: CancelledVacancyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, QuicklinkModule]
})
export class CancelledVacancyRoutingModule {
}
