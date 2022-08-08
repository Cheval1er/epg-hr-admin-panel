import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';


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
import { VacancyFormModule } from '../pages/vacancy-form/vacancy-form.module';


@NgModule({
    declarations: [],
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
        VacancyFormModule

    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ]
})
export class VacancyTableModule {
}
