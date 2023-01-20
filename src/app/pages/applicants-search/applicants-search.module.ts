import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApplicantsSearchComponent } from './applicants-search.component';
import { ApplicantsSearchRoutingModule } from './applicants-search-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';
import { A11yModule } from '@angular/cdk/a11y';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { CompletedVacancyRoutingModule } from '../external-vacancies/completed-vacancy/completed-vacancy-routing.module';
import { VacancyFormModule } from '../external-vacancies/vacancy-form/vacancy-form.module';


@NgModule({
    declarations: [ApplicantsSearchComponent, ViewApplicantComponent],
    imports: [
        CommonModule,
        ApplicantsSearchRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatButtonModule,
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
        CommonModule,
        CompletedVacancyRoutingModule,
        MatTableModule,
        MatPaginatorModule,

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

        MatSortModule,

        CdkTableModule,
        ScrollingModule,
        A11yModule,
        MatTabsModule,
        MatDialogModule,


    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, DatePipe
    ]
})
export class ApplicantsSearchModule {
}
