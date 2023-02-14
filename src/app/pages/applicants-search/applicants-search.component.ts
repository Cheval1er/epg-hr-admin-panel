

import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicantService } from 'src/app/services/applicant.service';
import { environment } from 'src/environments/environment';
import { Applicant } from '../model/applicant';
import { VacancyApplicant } from '../model/vacancy-applicant-model';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';


@Component({
  selector: 'vex-applicants-search',
  templateUrl: './applicants-search.component.html',
  styleUrls: ['./applicants-search.component.scss', './applicants-search.component.css']
})
export class ApplicantsSearchComponent implements OnInit, AfterViewChecked {


  searchApplicantsData!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data: Applicant[] = [];

  displayedColumns: string[] = ['id', 'fname', 'lname', 'vacancyName',
    'customerNumber', 'birthDate', 'mail', 'mobile', 'additionalphone', 'createuser', 'createdate', 'status'];
  groupedColumns: string[] = ['grouped'];

  thirdGroupedColumns: string[] = ['edit'];
  selectedRow: any;

  constructor(private formBuilder: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private applicantService: ApplicantService,
    private httpClient: HttpClient,
    private datePipe: DatePipe,
    private dialogRef: MatDialog) { }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  appForm: any;

  ngOnInit(): void {
    this.appForm = this.formBuilder.group({
      vacancyId: [''],
      languageId: [''],
      programs: [''],
      departments: [''],
      educationLevel: [''],
      gender: [''],
      ageFrom: [''],
      ageTo: [''],
      experience: [''],
      dateFrom: [''],
      dateTo: ['']

    });




    this.getAllApplicants()
    this.getLanguages();
    this.getGenders();
    this.getProgram();
    this.getVacancies();
    this.getEducation();
    this.getcategory();
    // this.searchButton(1, 0, 25);

    console.log(this.appForm)

  }


  public getAllApplicants() {
    this.applicantService.getAllApplicants(1, 0, 25).subscribe(x => {
      this.searchApplicantsData = new MatTableDataSource(this.data = x['list']);
      // this.data = x['list'];
      this.searchApplicantsData.paginator = this.paginator;
      this.searchApplicantsData.sort = this.sort;
      console.log(this.data);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }









  vacancy;
  dataVacancy;
  getVacancies() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/vacancy/allVacancy?page=1&start=0&limit=25').subscribe(
      response => {
        // console.log(response);
        this.dataVacancy = response['list'];
        console.log(this.dataVacancy)
        // this.vacancy = this.dataVacancy.map(({ id }) => id)
        // console.log(this.vacancy)
      },


    )
  }




  searchDetails() {

    // this.appForm.value.dateFrom = this.datePipe.transform(this.appForm.value.dateFrom, 'dd-MM-yyyy');
    // this.appForm.value.dateTo = this.datePipe.transform(this.appForm.value.dateTo, 'dd-MM-yyyy')
    this.applicantService.searchApplicants(this.appForm.value.vacancyId, this.appForm.value.languageId, this.appForm.value.gender,
      this.appForm.value.programs, this.appForm.value.departments, this.appForm.value.educationLevel,
      this.appForm.value.ageFrom, this.appForm.value.ageTo, this.appForm.value.experience, this.appForm.value.dateFrom, this.appForm.value.dateTo, 1, 0, 25).subscribe(x => {
        console.log(this.appForm)
        this.searchApplicantsData = x['list'];

        this.searchApplicantsData.paginator = this.paginator;
        this.searchApplicantsData.sort = this.sort;

        console.log(this.appForm.value.vacancyId, this.appForm.value.languageId, this.appForm.value.gender,
          this.appForm.value.programs, this.appForm.value.departments, this.appForm.value.educationLevel,
          this.appForm.value.ageFrom, this.appForm.value.ageTo, this.appForm.value.experience, this.appForm.value.dateFrom, this.appForm.value.dateTo)
      }
      )
  }


  //for language
  dataLanguage;
  getLanguages() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.language&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataLanguage = response['list']
      }

    )
  }


  //for gender

  dataGender;
  getGenders() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.gender&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataGender = response['list']
      }

    )
  }

  dataProgram;
  getProgram() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.program&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataProgram = response['list']
      }

    )
  }

  departmentsList;;

  getcategory() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.category&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.departmentsList = response['list']
      }

    )
  }

  dataEducation;

  getEducation() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataEducation = response['list']
      }

    )
  }






  //ragac chavtsere ubralod
  ngAfterViewInit(): void {
    this.appForm

  }

  refreshButton() {
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }

  onReset() {
    window.location.reload();
    this.appForm.reset();
  }


  selectedRowIndex = -1;
  highlight(applicant) {
    this.selectedRow = applicant;
    this.selectedRowIndex = applicant.id;
    console.log(applicant);
  }

  viewDialog() {



    this.dialogRef.open(ViewApplicantComponent, {
      // disableClose: true,
      height: '1400px',
      width: '1400px',
      data: this.selectedRow

    })

    console.log(this.selectedRow)

  }








}