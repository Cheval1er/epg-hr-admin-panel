import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExternalVacanciesComponent } from './external-vacancies.component';
import { ExternalVacanciesRoutingModule } from './external-vacancies-routing.module';
import { VacancyTableComponent } from 'src/app/vacancy-table/vacancy-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    declarations: [ExternalVacanciesComponent, VacancyTableComponent],
    imports: [
        CommonModule,
        ExternalVacanciesRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule



    ]
})
export class ExternalVacanciesModule {
}
