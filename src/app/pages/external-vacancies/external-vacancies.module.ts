import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExternalVacanciesComponent } from './external-vacancies.component';
import { ExternalVacanciesRoutingModule } from './external-vacancies-routing.module';


@NgModule({
    declarations: [ExternalVacanciesComponent],
    imports: [
        CommonModule,
        ExternalVacanciesRoutingModule

    ]
})
export class ExternalVacanciesModule {
}
