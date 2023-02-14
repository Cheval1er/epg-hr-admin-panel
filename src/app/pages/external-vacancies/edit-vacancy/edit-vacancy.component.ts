import { DatePipe, formatDate } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { ApplicantService } from 'src/app/services/applicant.service';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Applicant } from '../../model/applicant';
import { List, Vacancy } from '../../model/vacancy';
import { VacancyApplicant } from '../../model/vacancy-applicant-model';
import { ListLanguage, LanguageVacancy } from '../../model/vacancy-language-model';
import { ListProgram, ProgramVacancy } from '../../model/vacancy-program-model';
import { VacancyShortListApplicant } from '../../model/vacancy-shortList-model';
import { ListSkill, SkillVacancy } from '../../model/vacancy-skill-model';
import { EditApplicantComponent } from './edit-applicant/edit-applicant.component';

import { EditLanguageComponent } from './new-language-form/edit-language/edit-language.component';

import { NewLanguageFormComponent } from './new-language-form/new-language-form.component';
import { EditProgramComponent } from './new-program-form/edit-program/edit-program.component';
import { NewProgramFormComponent } from './new-program-form/new-program-form.component';
import { EditSkillComponent } from './new-skill-form/edit-skill/edit-skill.component';
import { NewSkillFormComponent } from './new-skill-form/new-skill-form.component';

import saveAs from 'file-saver';
import { environment } from 'src/environments/environment';
import { MAT_DATE_LOCALE } from '@angular/material/core';
@Component({
  selector: 'vex-edit-vacancy',
  templateUrl: './edit-vacancy.component.html',
  styleUrls: ['./edit-vacancy.component.scss', './edit-vacancy.component.css']
})
export class EditVacancyComponent implements OnInit {
  convertDate: string;
  selectedRow;
  dataSource!: MatTableDataSource<any>;

  dataSourceProgram: ListProgram[]
  showAlert = false;
  vacancyForm: any;



  data: Applicant[] = [];

  dataSourceLanguage: ListLanguage[];

  dataSourceSkill: ListSkill[];

  dataSourceApplicant: VacancyApplicant[];

  dataSourceShortListApplicant: VacancyShortListApplicant[];


  displayedColumns = ['id', 'languages', 'comment'];

  columnToDisplay = ['id', 'programs', 'comment'];

  displayedColumnsSkill = ['id', 'skills', 'comment'];

  displayedColumnsApplicants = ['id', 'firstName', 'lastName', 'personalNumber',
    'bDay', 'mail', 'mobile', 'applyDate', 'link'];

  displayedColumnsShortList = ['id', 'firstName', 'lastName', 'personalNumber',
    'bDay', 'mail', 'mobile', 'applyDate', 'link']
  vacancyProgramForm: any;
  selectedRowS: any;
  selectedRowL: any;
  selectedRowApp: any;
  selectedRowAppS: any;
  vacancyDetail: any;
  page: number;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private datePipe: DatePipe,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private applicantService: ApplicantService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    @Inject(MAT_DATE_LOCALE) public locale: string,


  ) { }


  // deadLineForm = this.editData.deadLine
  ngOnInit(): void {


    this.vacancyForm = this.formBuilder.group({
      companyId: [''],
      vacancyName: ['', Validators.required],
      vacancyAddress: ['', Validators.required],
      deadLine: [''],
      schedule: ['', Validators.required],
      categoryId: ['', Validators.required],
      typeId: ['', Validators.required],
      description: ['', Validators.required],
      experience: ['', Validators.required],
      probationaryPeriod: ['', Validators.required],
      educationLevelId: ['', Validators.required],

      experienceSphereId: [''],
      educationSphereComment: [''],
      salary: [''],

    });




    if (this.editData) {
      this.vacancyForm.controls['companyId'].setValue(this.editData.companyId);
      this.vacancyForm.controls['vacancyName'].setValue(this.editData.vacancyName);
      this.vacancyForm.controls['vacancyAddress'].setValue(this.editData.vacancyAddress);
      this.vacancyForm.controls['deadLine'].setValue(this.vacancyForm.value.deadLine);
      this.vacancyForm.controls['schedule'].setValue(this.editData.schedule);
      this.vacancyForm.controls['categoryId'].setValue(this.editData.categoryId);
      this.vacancyForm.controls['typeId'].setValue(this.editData.typeId);
      this.vacancyForm.controls['description'].setValue(this.editData.description);
      this.vacancyForm.controls['experience'].setValue(this.editData.experience);
      this.vacancyForm.controls['probationaryPeriod'].setValue(this.editData.probationaryPeriod);

      this.vacancyForm.controls['educationLevelId'].setValue(this.editData.educationLevelId);

      this.vacancyForm.controls['experienceSphereId'].setValue(this.editData.experienceSphereId);
      this.vacancyForm.controls['educationSphereComment'].setValue(this.editData.educationSphereComment);
      this.vacancyForm.controls['salary'].setValue(this.editData.salary);
    };


    console.log(this.editData.value)
    console.log(this.vacancyForm.value)

    this.getAllProgram();
    this.getAllLanguage();
    this.getAllSkill();
    this.getAllApplicants();
    this.getAllShortListApplicants();
    this.getcategory();
    this.getEducation();
    this.getSphere();
    this.getType();

    this.getCompany();

    console.log(this.DownloadLink);
  };



  updateFormData() {
    console.log('Form data is ', this.vacancyForm.value);
    // this.vacancyForm.value.deadLine = formatDate(this.vacancyForm.value.deadLine, 'EEEE, MMMM d, y, h:mm:ss a zzzz', this.locale, ' en-GB')
    this.vacancyForm.value.deadLine = this.datePipe.transform(this.vacancyForm.value.deadLine, 'dd-MM-yyyy')
    // this.vacancyForm.value.deadLine = formatDate(this.vacancyForm.deadLine, 'dd-MM-yyyy HH:mm:ss.SS', 'en-GB')
    this.vacancyService.updateVacancy(this.vacancyForm.value, this.editData.id).subscribe((result) => {
      console.log(result);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 50);
    })

    this.dialogRef.closeAll();
  }

  closeForm() {
    this.dialogRef.closeAll();
  }

  refreshButton() {
    this.ngOnInit()
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



  //Programs
  public getAllProgram() {
    this.vacancyService.getAllPrograms(this.editData.id, this.page, 0, 25).subscribe(x => {
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
    this.selectedRow = program;
    this.selectedRowIndex = program.id;
    console.log(program);



  }
  openDialogDeleteProgram(rowData) {
    rowData = this.selectedRow
    this.dialogRef.open(DeleteProgramFormComponent, {
      data: this.selectedRow
    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram()
    })
  }
  openDialog() {
    this.dialogRef.open(NewProgramFormComponent, {
      disableClose: true,
      data: this.editData
    }

    ).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram()
    })

  }

  openEditProgram() {
    this.dialogRef.open(EditProgramComponent, {
      disableClose: true,
      data: this.selectedRow

    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram()
    })
  }


  //Language
  public getAllLanguage() {
    this.vacancyService.getAllLanguages(this.editData.id, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceLanguage = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceLanguage)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }


  }

  selectedRowIndexL = -1;
  highlightL(language) {
    this.selectedRowL = language;
    this.selectedRowIndexL = language.id;
    console.log(language);



  }
  openDialogDeleteLanguage(rowData) {
    rowData = this.selectedRowL
    this.dialogRef.open(DeleteLanguageFormComponent, {
      data: this.selectedRowL
    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllLanguage()
    })
  }
  openDialogL() {
    this.dialogRef.open(NewLanguageFormComponent, {
      disableClose: true,
      data: this.editData
    }

    ).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllLanguage()
    })

  }

  openEditLanguage() {
    this.dialogRef.open(EditLanguageComponent, {
      disableClose: true,
      data: this.selectedRowL

    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllLanguage()
    })
  }
  // skill
  public getAllSkill() {
    this.vacancyService.getAllSkills(this.editData.id, this.page, 0, 25).subscribe(x => {
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
  openDialogDeleteSkill(rowData) {
    rowData = this.selectedRowS
    this.dialogRef.open(DeleteSkillFormComponent, {
      data: this.selectedRowS
    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllSkill()
    })
  }
  openDialogS() {
    this.dialogRef.open(NewSkillFormComponent, {
      disableClose: true,
      height: '500px',
      width: '700px',
      data: this.editData
    }

    ).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllSkill()
    })

  }

  openEditSkill() {
    this.dialogRef.open(EditSkillComponent, {
      disableClose: true,
      height: '500px',
      width: '700px',
      data: this.selectedRowS

    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllSkill()
    })
  }


  //applicants

  public getAllApplicants() {
    this.vacancyService.getAllApplicants(this.editData.id, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicant)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }


  }
  //highlight

  selectedRowIndexApp = -1;
  highlightApp(applicant) {
    this.selectedRowApp = applicant;
    this.selectedRowIndexApp = applicant.id;
    console.log(applicant);
  };

  public openEdit() {


    this.dialogRef.open(EditApplicantComponent, {
      // disableClose: true,
      height: '900px',
      width: '1400px',
      data: this.selectedRowApp

    })
  }

  //shortList

  public getAllShortListApplicants() {
    this.vacancyService.getAllShortListApplicants(this.editData.id, this.page, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceShortListApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceShortListApplicant)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }


  }
  //highlight

  selectedRowIndexAppS = -1;
  highlightAppS(applicantS) {
    this.selectedRowAppS = applicantS;
    this.selectedRowIndexAppS = applicantS.id;
    console.log(applicantS);



  }

  printApplicant() {

  }



  public DownloadLink = environment.apiBaseUrl + '/VacancyAdmin/report/vacancy/applicantsReportLink?objectId=' + this.editData.id;

  public ApplikantLink = 'http://jobs.energo-pro.ge/onlinejobs/#/Viewer/'



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

// delete program
@Component({
  selector: 'vex-new-program-form',
  templateUrl: './delete-program-form.component.html',
  styleUrls: ['./edit-vacancy.component.css']
})
export class DeleteProgramFormComponent implements OnInit {

  vacancyProgramForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceProgram: ProgramVacancy[]
  editData: any;



  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<DeleteProgramFormComponent>,
    private applicantService: ApplicantService,
    @Inject(MAT_DIALOG_DATA) public editDataP: any,) { }
  ngOnInit() {
    this.vacancyProgramForm = this.formBuilder.group({
      // id: this.editData.id,
      // programName: [''],
      // comment: [''],
      id: [],
      objectId: [],
      otherProgram: [''],
      vacancyId: [],
      programId: [''],
      programName: [''],
      vacancyName: []




    })
    // if (this.editData2) {
    //   this.vacancyProgramForm.controls['programName'].setValue(this.editData2.programName);
    // }
  }


  closeForm() {
    this.dialogRef.close()

  }

  deleteProgram() {
    this.vacancyService.deleteProgram(this.vacancyProgramForm.value, this.editDataP.id, this.editDataP.vacancyId).subscribe((result) => {
      console.log(result);

    })
    this.dialogRef.close();
  }
}

//delete language

@Component({
  selector: 'vex-new-language-form',
  templateUrl: './delete-language-form.component.html',
  styleUrls: ['./edit-vacancy.component.css']
})
export class DeleteLanguageFormComponent implements OnInit {

  vacancyLanguageForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceLanguage: LanguageVacancy[]
  editData: any;



  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<DeleteLanguageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editDataL: any,) { }
  ngOnInit() {
    this.vacancyLanguageForm = this.formBuilder.group({
      // id: this.editData.id,
      // programName: [''],

      id: [],
      objectId: [],
      otherLanguage: [''],
      vacancyId: [],
      languageId: [''],
      languageName: [''],



    })
    // if (this.editData2) {
    //   this.vacancyLanguageForm.controls['LanguageName'].setValue(this.editData2.LanguageName);
    // }
  }


  closeForm() {
    this.dialogRef.close()

  }

  deleteLanguage() {
    this.vacancyService.deleteLanguage(this.vacancyLanguageForm.value, this.editDataL.id, this.editDataL.vacancyId).subscribe((result) => {
      console.log(result);

    })
    this.dialogRef.close();
  }
}

//delete skill

@Component({
  selector: 'vex-new-skill-form',
  templateUrl: './delete-skill-form.component.html',
  styleUrls: ['./edit-vacancy.component.css']
})
export class DeleteSkillFormComponent implements OnInit {


  vacancySkillForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceSkill: SkillVacancy[]
  editData: any;



  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<DeleteSkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editDataS: any,) { }
  ngOnInit() {
    this.vacancySkillForm = this.formBuilder.group({
      // id: this.editData.id,
      // programName: [''],

      id: [],
      objectId: [],
      otherSkill: [''],
      vacancyId: [],
      skillId: [''],
      skillName: [''],



    })
    // if (this.editData2) {
    //   this.vacancySkillForm.controls['SkillName'].setValue(this.editData2.SkillName);
    // }
  }


  closeForm() {
    this.dialogRef.close()

  }

  deleteSkill() {
    this.vacancyService.deleteSkill(this.vacancySkillForm.value, this.editDataS.id, this.editDataS.vacancyId).subscribe((result) => {
      console.log(result);

    })
    this.dialogRef.close();
  }
}


function moment(deadLine: any): any {
  throw new Error('Function not implemented.');
}

