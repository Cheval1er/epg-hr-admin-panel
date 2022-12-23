import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';







import { MatNativeDateModule } from '@angular/material/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import { EditVacancyComponent } from './edit-vacancy.component';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { A11yModule } from '@angular/cdk/a11y';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ResizableModule } from 'angular-resizable-element';
import { CompletedVacancyRoutingModule } from '../completed-vacancy/completed-vacancy-routing.module';
import { VacancyFormModule } from '../vacancy-form/vacancy-form.module';
import { NewProgramFormComponent } from './new-program-form/new-program-form.component';





@NgModule({
    declarations: [EditVacancyComponent, NewProgramFormComponent,],
    imports: [

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

        ResizableModule,

        CdkTableModule,
        ScrollingModule,
        A11yModule,
        MatTabsModule,
        MatDialogModule,




    ],
    providers: [{ provide: LOCALE_ID, useValue: 'en-IN' }, DatePipe, VacancyService
    ]
})
export class EditVacancyModule {
}
