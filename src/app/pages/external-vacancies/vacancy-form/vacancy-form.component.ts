import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { environment } from 'src/environments/environment';
import { List } from '../../model/vacancy';




@Component({
  selector: 'vex-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.scss', './vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {
  convertDate: string;
  dateFormat: string;
  vacancyForm: any;
  vacancyDate: List[];
  constructor(private formBuilder: FormBuilder,

    private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    // @Inject(MAT_DIALOG_DATA) public editData: any,
    @Inject(MAT_DATE_LOCALE) public locale: string,

  ) { }

  ngOnInit(): void {
    this.vacancyForm = this.formBuilder.group({
      companyId: [''],
      vacancyName: [''],
      vacancyAddress: [''],
      deadLine: [''],
      schedule: [''],
      categoryId: [''],
      typeId: [''],
      description: [''],
      experience: [''],
      probationaryPeriod: ['6 თვე'],
      educationLevelId: [''],

      experienceSphereId: [''],
      educationSphereComment: [''],
      salary: [''],

    });
    this.getcategory();
    this.getEducation();
    this.getSphere();
    this.getType();
    this.getCompany();



  }


  datee: any

  saveFormData() {
    console.log('Form data is ', this.vacancyForm.value);
    // this.vacancyForm.value.deadLine = formatDate(this.vacancyForm.value.deadLine, 'EEEE, MMMM d, y, h:mm:ss a zzzz', this.locale, ' en-GB')
    this.vacancyForm.value.deadLine = this.datePipe.transform(this.vacancyForm.value.deadLine, 'dd-MM-yyyy')
    // formatDate(this.vacancyForm.deadLine, 'dd-MM-yyyy', this.locale)
    console.log(this.vacancyForm.value.deadLine)
    this.vacancyService.addVacancy(this.vacancyForm.value).subscribe((result) => {
      console.log(result)
    })
    // this.dialogRef.closeAll();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 50);

  }

  closeForm() {
    this.dialogRef.closeAll();
  }

  companyList;
  getCompany() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.company&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.companyList = response['list']
      }

    )
  }
  educationList;

  getEducation() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.educationList = response['list']
      }

    )
  }
  dataCategory;

  getcategory() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.category&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataCategory = response['list']
      }

    )
  }


  typeList;
  getType() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.type&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.typeList = response['list']
      }

    )
  }



  sphereList;
  getSphere() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.sphere&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.sphereList = response['list']
      }

    )
  }
}


