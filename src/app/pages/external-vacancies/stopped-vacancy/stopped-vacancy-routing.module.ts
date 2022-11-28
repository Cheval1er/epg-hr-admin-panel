import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { StoppedVacancyComponent } from './stopped-vacancy.component';



const routes: Routes = [
    {
        path: '',
        component: StoppedVacancyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, QuicklinkModule]
})
export class StoppedVacancyRoutingModule {
}
