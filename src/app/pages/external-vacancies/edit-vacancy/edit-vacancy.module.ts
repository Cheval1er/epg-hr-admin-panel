import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';







import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import { EditVacancyComponent } from './edit-vacancy.component';
import { EditVacancyRoutingModule } from './edit-vacancy-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
    declarations: [EditVacancyComponent],
    imports: [

        CommonModule,
        EditVacancyRoutingModule,
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
    providers: [{ provide: LOCALE_ID, useValue: 'en-IN' }, DatePipe, VacancyService
    ]
})
export class EditVacancyModule {
}
