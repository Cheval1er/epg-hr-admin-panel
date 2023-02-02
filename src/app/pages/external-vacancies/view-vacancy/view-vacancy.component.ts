import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HighlightConfig } from 'src/@vex/components/highlight/highlight.model';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ViewApplicantComponent } from '../../applicants-search/view-applicant/view-applicant.component';
import { Vacancy, List } from '../../model/vacancy';
import { VacancyApplicant } from '../../model/vacancy-applicant-model';
import { ListLanguage } from '../../model/vacancy-language-model';
import { ListProgram } from '../../model/vacancy-program-model';
import { VacancyShortListApplicant } from '../../model/vacancy-shortList-model';
import { ListSkill } from '../../model/vacancy-skill-model';
import { EditApplicantComponent } from '../edit-vacancy/edit-applicant/edit-applicant.component';

@Component({
  selector: 'vex-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss', './view-vacancy.component.css']
})
export class ViewVacancyComponent implements OnInit {

  vacancyForm: any;

  dataSource!: MatTableDataSource<any>;



  dataSourceLanguage: ListLanguage[];

  dataSourceProgram: ListProgram[];

  dataSourceSkill: ListSkill[];

  dataSourceApplicant: VacancyApplicant[];

  dataSourceShortListApplicant: VacancyShortListApplicant[];
  selectedRowS: any;
  selectedRowL: any;
  selectedRowApp: any;
  selectedRowAppS: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<EditApplicantComponent>,
    private vacancyService: VacancyService,
    private datePipe: DatePipe,
    private httpClient: HttpClient,
    private dialogReff: MatDialog,
    @Inject(MAT_DIALOG_DATA) public editData: any,


  ) { }

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data: Vacancy[] = [];
  public editVacancy: List;

  displayedColumns = ['id', 'languages', 'comment'];

  columnToDisplay = ['id', 'programs', 'comment'];

  displayedColumnsSkill = ['id', 'skills', 'comment'];

  displayedColumnsApplicants = ['id', 'firstName', 'lastName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate'];

  displayedColumnsShortList = ['id', 'firstName', 'lastName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate']

  ngOnInit(): void {

    this.vacancyForm = this.formBuilder.group({
      companyId: [{ value: this.editData.companyId, disabled: true }],
      vacancyName: [{ value: this.editData.vacancyName, disabled: true }],
      vacancyAddress: [{ value: this.editData.vacancyAddress, disabled: true }],
      deadLine: [{ value: this.editData.deadLine, disabled: true }],
      schedule: [{ value: this.editData.schedule, disabled: true }],
      categoryId: [{ value: this.editData.categoryId, disabled: true }],
      typeId: [{ value: this.editData.typeId, disabled: true }],
      description: [{ value: this.editData.description, disabled: true }],
      experience: [{ value: this.editData.experience, disabled: true }],
      probationaryPeriod: [{ value: this.editData.probationaryPeriod, disabled: true }],
      educationLevelId: [{ value: this.editData.educationLevelId, disabled: true }],

      experienceSphereId: [{ value: this.editData.experienceSphereId, disabled: true }],
      educationSphereComment: [{ value: this.editData.educationSphereComment, disabled: true }],
      salary: [{ value: this.editData.salary, disabled: true }],

    });


    this.getAllVacancies();
    this.getAllLanguage(1, 0, 25);
    this.getAllProgram(1, 0, 25);
    this.getAllSkill(1, 0, 25);
    this.getAllApplicants(1, 0, 25);
    this.getAllShortListApplicants(1, 0, 25);

    this.getcategory();
    this.getEducation();
    this.getSphere();
    this.getType();
    this.getCompany();
  }

  printReport(): void {
    window.print();
  }
  closeForm() {
    this.dialogRef.close()
  }
  public getAllVacancies(): void {
    this.vacancyService.getAllVacancies().subscribe(x => {
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
  companyList;
  getCompany() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.company&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.companyList = response['list']
      }

    )
  }
  educationList;

  getEducation() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.educationList = response['list']
      }

    )
  }
  dataCategory;

  getcategory() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.category&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataCategory = response['list']
      }

    )
  }


  typeList;
  getType() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.type&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.typeList = response['list']
      }

    )
  }



  sphereList;
  getSphere() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.sphere&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.sphereList = response['list']
      }

    )
  }
  public getAllLanguage(page: number, start: number, limit: number) {
    this.vacancyService.getAllLanguages(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceLanguage = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceLanguage)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }


  }
  public getAllProgram(page: number, start: number, limit: number) {
    this.vacancyService.getAllPrograms(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceProgram = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceProgram)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }


  }
  selectedRowIndex = -1;
  highlight(program) {
    this.selectedRowS = program;
    this.selectedRowIndex = program.id;
    console.log(program);


  }

  selectedRowIndexL = -1;
  highlightL(language) {
    this.selectedRowL = language;
    this.selectedRowIndexL = language.id;
    console.log(language);



  }

  public getAllSkill(page: number, start: number, limit: number) {
    this.vacancyService.getAllSkills(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceSkill = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceSkill)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  selectedRowIndexS = -1;
  highlightS(skill) {
    this.selectedRowS = skill;
    this.selectedRowIndexS = skill.id;
    console.log(skill);



  }

  public getAllApplicants(page: number, start: number, limit: number) {
    this.vacancyService.getAllApplicants(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicant)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }


  }

  viewDialog() {
    this.dialogReff.open(ViewApplicantComponent, {
      // disableClose: true,
      height: '1400px',
      width: '1400px',
      data: this.selectedRowApp

    })

    console.log(this.selectedRowApp)

  }
  selectedRowIndexApp = -1;
  highlightApp(applicant) {
    this.selectedRowApp = applicant;
    this.selectedRowIndexApp = applicant.id;
    console.log(applicant);



  }
  public getAllShortListApplicants(page: number, start: number, limit: number) {
    this.vacancyService.getAllShortListApplicants(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceShortListApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceShortListApplicant)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }


  }
  selectedRowIndexAppS = -1;
  highlightAppS(applicantS) {
    this.selectedRowAppS = applicantS;
    this.selectedRowIndexAppS = applicantS.id;
    console.log(applicantS);



  }

  public moveToShortList(): void {

    this.vacancyService.moveToShortList(this.selectedRowApp).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });


  }

  public removeFromShortList(): void {

    this.vacancyService.removeFromShortList(this.selectedRowAppS).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });

  }
}
