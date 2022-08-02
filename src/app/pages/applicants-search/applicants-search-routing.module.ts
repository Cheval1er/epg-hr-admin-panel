import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ApplicantsSearchComponent } from './applicants-search.component';



const routes: Routes = [
    {
        path: '',
        component: ApplicantsSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, QuicklinkModule]
})
export class ApplicantsSearchRoutingModule {
}
