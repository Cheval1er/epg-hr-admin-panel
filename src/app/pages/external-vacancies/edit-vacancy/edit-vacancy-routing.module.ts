import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { EditVacancyComponent } from './edit-vacancy.component';




const routes: Routes = [
    {
        path: '',
        component: EditVacancyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, QuicklinkModule]
})
export class EditVacancyRoutingModule {
}
