import { HttpClient } from '@angular/common/http';
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
    private httpClient: HttpClient,
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
    this.getLanguage();

  }


  LanguageList;
  getLanguage() {
    this.httpClient.get<any>('http://192.168.150.131:9090/VacancyAdmin/di/items/getitems?key=key.language&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.LanguageList = response['list']
      }

    )
  }
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



