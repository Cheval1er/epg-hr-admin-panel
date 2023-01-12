import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LanguageVacancy } from 'src/app/pages/model/vacancy-language-model';
import { VacancyService } from 'src/app/services/vacancy.service';


@Component({
  selector: 'vex-new-language-form',
  templateUrl: './new-language-form.component.html',
  styleUrls: ['./new-language-form.component.scss']
})
export class NewLanguageFormComponent implements OnInit {
  [x: string]: any;
  vacancyLanguageForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceLanguage: LanguageVacancy[]



  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<NewLanguageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.vacancyLanguageForm = this.formBuilder.group({
      // id: this.editData.id,
      // LanguageName: [''],
      // comment: [''],
      id: [],
      objectId: [],
      otherLanguage: [''],
      vacancyId: this.editData.id,
      languageId: [],
      languageName: [],
      vacancyName: this.editData.vacancyName,




    })

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
    this.vacancyService.addNewLanguage(this.editData.id, this.vacancyLanguageForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.close();




  }
  closeForm() {
    this.dialogRef.close()
  }




}



