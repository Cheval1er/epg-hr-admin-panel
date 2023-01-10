import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ProgramVacancy, Program } from '../../../../model/vacancy-program-model';
import { NewProgramFormComponent } from '../../new-program-form/new-program-form.component';

@Component({
  selector: 'vex-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.scss']
})
export class EditLanguageComponent implements OnInit {

  [x: string]: any;
  vacancyLanguageForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceProgram: ProgramVacancy[]


  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<NewProgramFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.vacancyLanguageForm = this.formBuilder.group({
      // id: this.editData.id,
      // programName: [''],

      id: this.editData.id,
      objectId: this.editData.objectId,
      otherLanguage: [''],
      vacancyId: this.editData.vacancyId,
      languageId: [''],
      languageName: [''],





    })
    if (this.editData) {
      this.vacancyLanguageForm.controls['id'].setValue(this.editData.id);
      this.vacancyLanguageForm.controls['objectId'].setValue(this.editData.objectId);
      this.vacancyLanguageForm.controls['vacancyId'].setValue(this.editData.vacancyId)
      this.vacancyLanguageForm.controls['otherLanguage'].setValue(this.editData.otherLanguage);
      this.vacancyLanguageForm.controls['languageName'].setValue(this.editData.languageName);
      this.vacancyLanguageForm.controls['languageId'].setValue(this.editData.languageId)

    }
  }


  LanguageList: any[] = [{
    "id": 168,
    "name": "ბულგარული",
    "key": "key.language.bulgarian",
    "sortOrder": 1
  },
  {
    "id": 163,
    "name": "გერმანული",
    "key": "key.language.german",
    "sortOrder": 1
  },
  {
    "id": 166,
    "name": "ესპანური",
    "key": "key.language.espan",
    "sortOrder": 1
  },
  {
    "id": 169,
    "name": "თურქული",
    "key": "key.language.other",
    "sortOrder": 1
  },
  {
    "id": 160,
    "name": "ინგლისური",
    "key": "key.language.english",
    "sortOrder": 1
  },
  {
    "id": 165,
    "name": "იტალიური",
    "key": "key.language.italian",
    "sortOrder": 1
  },
  {
    "id": 162,
    "name": "რუსული",
    "key": "key.language.russion",
    "sortOrder": 1
  },
  {
    "id": 164,
    "name": "ფრანგული",
    "key": "key.language.franch",
    "sortOrder": 1
  },
  {
    "id": 161,
    "name": "ქართული",
    "key": "key.language.georgia",
    "sortOrder": 1
  },
  {
    "id": 167,
    "name": "ჩეხური",
    "key": "key.language.chex",
    "sortOrder": 1
  },
  {
    "id": 299,
    "name": "ჩინური",
    "key": "key.language",
    "sortOrder": 1
  }
  ]

  saveFormData() {
    console.log(this.vacancyLanguageForm.value);
    this.vacancyService.updateLanguage(this.editData.objectId, this.editData.vacancyId, this.vacancyLanguageForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.close();




  }
  closeForm() {
    this.dialogRef.close()
  }


}
