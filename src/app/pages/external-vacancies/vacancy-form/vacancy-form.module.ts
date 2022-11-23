import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';

import { VacancyFormComponent } from './vacancy-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';
import { VacancyService } from 'src/app/services/vacancy.service';


@NgModule({
    declarations: [VacancyFormComponent],
    imports: [
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

    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'en-IN' }, DatePipe, VacancyService

    ]
})
export class VacancyFormModule {
}
