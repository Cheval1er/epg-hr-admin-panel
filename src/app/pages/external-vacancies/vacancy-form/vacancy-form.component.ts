import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
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
    private httpClient: HttpClient
    // @Inject(MAT_DIALOG_DATA) public editData: any,

  ) { }

  ngOnInit(): void {
    this.vacancyForm = this.formBuilder.group({
      companyId: [''],
      vacancyName: [''],
      vacancyAddress: [''],
      deadLine: new Date(),
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




  saveFormData() {
    console.log('Form data is ', this.vacancyForm.value);

    this.vacancyForm.value.deadLine = this.datePipe.transform(this.vacancyForm.value.deadLine, 'dd-MM-yyyy')

    this.vacancyService.addVacancy(this.vacancyForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.closeAll();
    setTimeout(() => {
      window.location.reload();
    }, 50);

  }

  closeForm() {
    this.dialogRef.closeAll();
  }

  companyList;
  getCompany() {
    this.httpClient.get<any>('http://192.168.150.131:9090/VacancyAdmin/di/items/getitems?key=key.company&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.companyList = response['list']
      }

    )
  }
  educationList;

  getEducation() {
    this.httpClient.get<any>('http://192.168.150.131:9090/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.educationList = response['list']
      }

    )
  }
  dataCategory;

  getcategory() {
    this.httpClient.get<any>('http://192.168.150.131:9090/VacancyAdmin/di/items/getitems?key=key.category&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataCategory = response['list']
      }

    )
  }


  typeList;
  getType() {
    this.httpClient.get<any>('http://192.168.150.131:9090/VacancyAdmin/di/items/getitems?key=key.type&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.typeList = response['list']
      }

    )
  }



  sphereList;
  getSphere() {
    this.httpClient.get<any>('http://192.168.150.131:9090/VacancyAdmin/di/items/getitems?key=key.sphere&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.sphereList = response['list']
      }

    )
  }
}


