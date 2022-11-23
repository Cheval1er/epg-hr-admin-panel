import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExternalVacanciesComponent } from './external-vacancies.component';
import { ExternalVacanciesRoutingModule } from './external-vacancies-routing.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { VacancyFormModule } from './vacancy-form/vacancy-form.module';

import { HttpClientModule } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { VacancyService } from 'src/app/services/vacancy.service';
import {
    ResizableModule
} from 'angular-resizable-element';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { A11yModule } from '@angular/cdk/a11y';
import { EditVacancyComponent } from './edit-vacancy/edit-vacancy.component';


@NgModule({
    declarations: [ExternalVacanciesComponent],
    imports: [


        CommonModule,
        ExternalVacanciesRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        HttpClientModule,
        MatDatepickerModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,

        MatInputModule,
        MatIconModule,
        MatButtonModule,

        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,

        MatAutocompleteModule,
        MatSliderModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,

        MatCardModule,
        VacancyFormModule,

        ResizableModule,

        CdkTableModule,
        ScrollingModule,
        A11yModule,

    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, VacancyService]
})
export class ExternalVacanciesModule {
}
