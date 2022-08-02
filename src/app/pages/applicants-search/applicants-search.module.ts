import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApplicantsSearchComponent } from './applicants-search.component';
import { ApplicantsSearchRoutingModule } from './applicants-search-routing.module';


@NgModule({
    declarations: [ApplicantsSearchComponent],
    imports: [
        CommonModule,
        ApplicantsSearchRoutingModule

    ]
})
export class ApplicantsSearchModule {
}
