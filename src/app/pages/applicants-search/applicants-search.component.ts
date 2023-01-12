

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicantService } from 'src/app/services/applicant.service';
import { Applicant } from '../model/applicant';


@Component({
  selector: 'vex-applicants-search',
  templateUrl: './applicants-search.component.html',
  styleUrls: ['./applicants-search.component.scss', './applicants-search.component.css']
})
export class ApplicantsSearchComponent implements OnInit, AfterViewChecked {


  dataSource!: MatTableDataSource<any>;

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
    private httpClient: HttpClient) { }
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




    this.getAllApplicants(1, 0, 25)
    this.getLanguages();
    this.getGenders();
    this.getProgram();
    this.getVacancies();
    this.getEducation();
    // this.searchButton(1, 0, 25);



  }


  public getAllApplicants(page: number, start: number, limit: number) {
    this.applicantService.getAllApplicants(page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.data = x['list']);
      // this.data = x['list'];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.data);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }








  // languagesList: string[] = [
  //   'ბულგალური',
  //   'გერმანული',
  //   'ესპანური',
  //   'თურქული',
  //   'ესპანური',
  //   'იტალიური',
  //   'რუსული',
  //   'ფრანგული',
  //   'ქართული',
  //   'ჩეხური',
  //   'ჩინური'




  // ]
  vacancy;
  dataVacancy;
  getVacancies() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/vacancy/allVacancy?page=1&start=0&limit=25').subscribe(
      response => {
        // console.log(response);
        this.dataVacancy = response['list'];
        console.log(this.dataVacancy)
        // this.vacancy = this.dataVacancy.map(({ id }) => id)
        // console.log(this.vacancy)
      },


    )
  }


  searchApplicantsData;

  searchDetails(page: number, start: number, limit: number) {
    this.applicantService.searchApplicants(this.appForm.value.vacancyId, this.appForm.value.languageId, this.appForm.value.gender,
      this.appForm.value.programs, this.appForm.value.departments, this.appForm.value.educationLevel, this.appForm.value.ageFrom, this.appForm.value.ageTo, page, start, limit).subscribe(x => {
        console.log(this.appForm)
        this.searchApplicantsData = x['list'];
        console.log(this.searchApplicantsData)
        console.log(this.appForm.value.vacancyId);
        console.log(this.appForm.value.languageId);
        console.log(this.appForm.value.vacancyId, this.appForm.value.languageId, this.appForm.value.gender,
          this.appForm.value.programs, this.appForm.value.departments, this.appForm.value.educationLevel, this.appForm.value.ageFrom, this.appForm.value.ageTo)
      }
      )
  }


  //for language
  dataLanguage;
  getLanguages() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.language&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataLanguage = response['list']
      }

    )
  }


  //for gender

  dataGender;
  getGenders() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.gender&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataGender = response['list']
      }

    )
  }

  dataProgram;
  getProgram() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.program&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataProgram = response['list']
      }

    )
  }
  // programsList: string[] = [
  //   'ArcGIS',
  //   'AutoCAD',
  //   'Excel',
  //   'IFS',
  //   'MS Office',
  //   'MS Project',
  //   'Oris',
  //   'Photoshop',
  //   'PowerPoint',
  //   'Visio',
  //   'Word',
  //   'სხვა'



  // ]

  // dataDepartment;
  // getDepartment() {
  //   this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.program&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
  //     response => {
  //       console.log(response);
  //       this.dataDepartment = response['list']
  //     }

  //   )
  // }


  departmentsList: string[] = [
    'ადამიანური რესურსების მართვა',
    'ადმინისტრაცია',
    'ანალიტიკა',
    'აუდიტი',
    'ბიზნესის მართვა',
    'ბილინგი',
    'განათლება',
    'გარემოს დაცვა',
    'დიზაინი',
    'დისტრიბუცია',
    'ენერგეტიკა',
    'ენერგეტიკა/საშუალო ძაბვა',
    'ენერგეტიკა/დაბალი ძაბვა',
    'ენერგეტიკა/მაღალი ძაბვა',
    'თბოენერგეტიკა',
    'ინჟინერია',
    'ინფორმაციული ტექნოლოგიები',
    'კვლევები',
    'კომერციული',
    'კონსალტინგი',
    'ლოჯისტიკა',
    'მენეჯმენტი',
    'ოპერატიული მართვა',
    'პროექტის მართვა',
    'საზოგადოებასთან ურთიერთობა',
    'სამართალი',
    'სტრატეგიული დაგეგმვა',
    'ტრენინგები/სწავლება',
    'ფინანსები',
    'ცხელი ხაზი/აბონენტთა მომსახურება',
    'ხარისხის უზრუნველყოფა',
    'ხელოვნება',
    'ჯანდაცვა',
    'ჰიდრო ენერგეტიკა',
    'სხვა'

  ]
  dataEducation;

  getEducation() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataEducation = response['list']
      }

    )
  }
  // educationList: string[] = [
  //   'N/A',
  //   'არასრული უმაღლესი',
  //   'ბაკალავრი',
  //   'დოქტორი',
  //   'მაგისტრი',
  //   'პროფესიული',
  //   'საშუალო'

  // ];

  // genderList: string[] = [
  //   'მდედრობითი',
  //   'მამრობითი'
  // ]







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


}