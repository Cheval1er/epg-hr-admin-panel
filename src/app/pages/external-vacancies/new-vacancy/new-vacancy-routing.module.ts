import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { NewVacancyComponent } from './new-vacancy.component';



const routes: Routes = [
    {
        path: '',
        component: NewVacancyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, QuicklinkModule]
})
export class NewVacancyRoutingModule {
}
