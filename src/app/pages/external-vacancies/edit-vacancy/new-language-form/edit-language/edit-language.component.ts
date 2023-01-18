import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProgramVacancy } from 'src/app/pages/model/vacancy-program-model';
import { VacancyService } from 'src/app/services/vacancy.service';
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
    private httpClient: HttpClient,
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
    this.getLanguage();
  }


  LanguageList;

  getLanguage() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.language&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.LanguageList = response['list']
      }

    )
  }

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
