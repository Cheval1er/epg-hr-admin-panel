import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Applicant, VacancyApplicant } from '../model/vacancy-applicant-model';
import { LanguageVacancy, ListLanguage } from '../model/vacancy-language-model';
import { ListProgram, ProgramVacancy } from '../model/vacancy-program-model';
import { VacancyShortListApplicant } from '../model/vacancy-shortList-model';
import { ListSkill, SkillVacancy } from '../model/vacancy-skill-model';
import { EditLanguageComponent } from './new-language-form/edit-language/edit-language.component';

import { NewLanguageFormComponent } from './new-language-form/new-language-form.component';
import { EditProgramComponent } from './new-program-form/edit-program/edit-program.component';
import { NewProgramFormComponent } from './new-program-form/new-program-form.component';
import { EditSkillComponent } from './new-skill-form/edit-skill/edit-skill.component';
import { NewSkillFormComponent } from './new-skill-form/new-skill-form.component';


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
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate'];

  displayedColumnsShortList = ['id', 'firstName', 'lastName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate']
  vacancyProgramForm: any;
  selectedRowS: any;
  selectedRowL: any;
  selectedRowApp: any;
  selectedRowAppS: any;
  vacancyDetail: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private datePipe: DatePipe,

    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public editData: any,


  ) { }

  ngOnInit(): void {

    this.vacancyForm = this.formBuilder.group({
      vacancyName: ['', Validators.required],
      vacancyAddress: ['', Validators.required],
      deadLine: ['', Validators.required],
      schedule: ['', Validators.required],
      categoryId: ['', Validators.required],
      typeId: ['', Validators.required],
      description: ['', Validators.required],
      experience: ['', Validators.required],
      probationaryPeriod: ['', Validators.required],
      educationLevelId: ['', Validators.required],
      education: ['', Validators.required],
      experienceSphereId: [''],
      educationSphereComment: [''],
      salary: [''],

    });
    if (this.editData) {
      this.vacancyForm.controls['vacancyName'].setValue(this.editData.vacancyName);
      this.vacancyForm.controls['vacancyAddress'].setValue(this.editData.vacancyAddress);
      this.vacancyForm.controls['deadLine'].setValue(this.editData.deadLine);
      this.vacancyForm.controls['schedule'].setValue(this.editData.schedule);
      this.vacancyForm.controls['categoryId'].setValue(this.editData.categoryId);
      this.vacancyForm.controls['typeId'].setValue(this.editData.typeId);
      this.vacancyForm.controls['description'].setValue(this.editData.description);
      this.vacancyForm.controls['experience'].setValue(this.editData.experience);
      this.vacancyForm.controls['probationaryPeriod'].setValue(this.editData.probationaryPeriod);

      this.vacancyForm.controls['educationLevelId'].setValue(this.editData.educationLevelId);
      this.vacancyForm.controls['education'].setValue(this.editData.education);
      this.vacancyForm.controls['experienceSphereId'].setValue(this.editData.experienceSphereId);
      this.vacancyForm.controls['educationSphereComment'].setValue(this.editData.educationSphereComment);
      this.vacancyForm.controls['salary'].setValue(this.editData.salary);
    };



    this.getAllProgram(1, 0, 25);
    this.getAllLanguage(1, 0, 25);
    this.getAllSkill(1, 0, 25);
    this.getAllApplicants(1, 0, 25);
    this.getAllShortListApplicants(1, 0, 25);



  };



  updateFormData() {
    console.log('Form data is ', this.vacancyForm.value);

    this.vacancyForm.value.deadLine = this.datePipe.transform(this.vacancyForm.value.deadLine, 'dd-MM-yyyy');

    this.vacancyService.updateVacancy(this.vacancyForm.value, this.editData.id).subscribe((result) => {
      console.log(result);
      setTimeout(() => {
        window.location.reload();
      }, 50);
    })

    this.dialogRef.closeAll();
  }

  closeForm() {
    this.dialogRef.closeAll();
  }
  categoryList: any[] = [
    {
      "id": 137,
      "name": "ადამიანური რესურსების მართვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 125,
      "name": "ადმინისტრაცია",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 126,
      "name": "ანალიტიკა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 124,
      "name": "აუდიტი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 151,
      "name": "ბიზნესის მართვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 247,
      "name": "ბილინგი",
      "key": "key.category",
      "sortOrder": 2
    },
    {
      "id": 133,
      "name": "განათლება",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 269,
      "name": "გარემოს დაცვა",
      "key": "key.category 1",
      "sortOrder": 2
    },
    {
      "id": 130,
      "name": "დიზაინი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 131,
      "name": "დისტრიბუცია",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 242,
      "name": "ენერგეტიკა",
      "key": "key.category.energy",
      "sortOrder": 1
    },
    {
      "id": 255,
      "name": "ენერგეტიკა / საშუალო ძაბვა",
      "key": "key.category. middle",
      "sortOrder": 2
    },
    {
      "id": 150,
      "name": "ენერგეტიკა/ დაბალი ძაბვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 149,
      "name": "ენერგეტიკა/ მაღალი ძაბვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 148,
      "name": "თბოენერგეტიკა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 134,
      "name": "ინჟინერია",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 138,
      "name": "ინფორმაციული ტექნოლგიები",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 144,
      "name": "კვლევები",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 262,
      "name": "კომერციული",
      "key": "key.category. commercial",
      "sortOrder": 2
    },
    {
      "id": 128,
      "name": "კონსალტინგი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 142,
      "name": "ლოჯისტიკა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 140,
      "name": "მენეჯმენტი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 241,
      "name": "ოპერატიული მართვა",
      "key": "key.category",
      "sortOrder": 1
    },
    {
      "id": 141,
      "name": "პროექტის მართვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 127,
      "name": "საზოგადოებასთან ურთიერთობა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 139,
      "name": "სამართალი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 145,
      "name": "სტრატეგიული დაგეგმვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 146,
      "name": "ტრენინგები / სწავლება",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 135,
      "name": "ფინანსები",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 129,
      "name": "ცხელი ხაზი/ აბონენტთა მომსახურება",
      "key": "",
      "sortOrder": 0
    },
    {
      "id": 143,
      "name": "ხარისხის უზრუნველყოფა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 132,
      "name": "ხელოვნება",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 136,
      "name": "ჯანდაცვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 147,
      "name": "ჰიდრო ენერგეტიკა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 152,
      "name": "სხვა",
      "key": null,
      "sortOrder": 0
    }
  ];

  typeList: any[] = [
    {
      "id": 301,
      "name": "გარე ვაკანსია",
      "key": "key.type.external",
      "sortOrder": 16
    },
    {
      "id": 300,
      "name": "შიდა ვაკანსია",
      "key": "key.type.internal",
      "sortOrder": 16
    },
    {
      "id": 302,
      "name": "სტაჟირება",
      "key": "key.type.intern",
      "sortOrder": 16
    }
  ]
  educationList: any[] = [
    {
      "id": 263,
      "name": "N/A",
      "key": "key.educationLevel",
      "sortOrder": 1
    },
    {
      "id": 157,
      "name": "არასრული უმაღლესი",
      "key": "key.educationLevel.elementary",
      "sortOrder": 1
    },
    {
      "id": 158,
      "name": "ბაკალავრი",
      "key": "key.educationLevel.medium",
      "sortOrder": 2
    },
    {
      "id": 193,
      "name": "დოქტორი",
      "key": "key.educationLevel.doctor",
      "sortOrder": 9
    },
    {
      "id": 159,
      "name": "მაგისტრი",
      "key": "key.educationLevel.graduated",
      "sortOrder": 3
    },
    {
      "id": 194,
      "name": "პროფესიული",
      "key": "key.educationLevel.proffesional",
      "sortOrder": 6
    },
    {
      "id": 195,
      "name": "საშუალო",
      "key": "key.educationLevel.medium",
      "sortOrder": 7
    }

  ];

  sphereList: any[] = [
    {
      "id": 264,
      "name": "N/A",
      "key": "key.sphere N",
      "sortOrder": 1
    },
    {
      "id": 277,
      "name": "ბიოლოგია / ეკოლოგია",
      "key": "key.sphere. biologi",
      "sortOrder": 1
    },
    {
      "id": 249,
      "name": "ელექტროენერგეტიკული",
      "key": "key.sphere.electroenergy",
      "sortOrder": 2
    },
    {
      "id": 245,
      "name": "ელექტროტექნიკური",
      "key": "key.sphere electrotechnical",
      "sortOrder": 2
    },
    {
      "id": 225,
      "name": "ენერგეტიკული ",
      "key": "key.sphere.energetical",
      "sortOrder": 3
    },
    {
      "id": 227,
      "name": "იურიდიული",
      "key": "key.sphere.legal",
      "sortOrder": 5
    },
    {
      "id": 244,
      "name": "ლოგისტიკა",
      "key": "key.sphere logistics",
      "sortOrder": 1
    },
    {
      "id": 230,
      "name": "საინფორმაციო ტექნოლოგიები",
      "key": "key.sphere.IT",
      "sortOrder": 7
    },
    {
      "id": 266,
      "name": "სატყეო",
      "key": "key.sphere. forest",
      "sortOrder": 1
    },
    {
      "id": 252,
      "name": "საშუალო",
      "key": "key.sphere. საშუალო",
      "sortOrder": 2
    },
    {
      "id": 224,
      "name": "ტექნიკური",
      "key": "key.sphere.tecnical",
      "sortOrder": 2
    },
    {
      "id": 228,
      "name": "უმაღლესი",
      "key": "key.sphere.higher ",
      "sortOrder": 1
    },
    {
      "id": 226,
      "name": "ფინანსური",
      "key": "key.sphere.financial",
      "sortOrder": 4
    },
    {
      "id": 229,
      "name": "ჰიდროენერგეტიკული",
      "key": "key.sphere.hydro",
      "sortOrder": 6
    }

  ]

  refreshButton() {
    this.ngOnInit()
  }

  //Programs
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
    this.selectedRow = program;
    this.selectedRowIndex = program.id;
    console.log(program);



  }
  openDialogDeleteProgram(rowData) {
    rowData = this.selectedRow
    this.dialogRef.open(DeleteProgramFormComponent, {
      data: this.selectedRow
    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram(1, 0, 25)
    })
  }
  openDialog() {
    this.dialogRef.open(NewProgramFormComponent, {
      data: this.editData
    }

    ).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram(1, 0, 25)
    })

  }

  openEditProgram() {
    this.dialogRef.open(EditProgramComponent, {
      data: this.selectedRow

    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram(1, 0, 25)
    })
  }


  //Language
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
      this.getAllLanguage(1, 0, 25)
    })
  }
  openDialogL() {
    this.dialogRef.open(NewLanguageFormComponent, {
      data: this.editData
    }

    ).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllLanguage(1, 0, 25)
    })

  }

  openEditLanguage() {
    this.dialogRef.open(EditLanguageComponent, {
      data: this.selectedRowL

    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllLanguage(1, 0, 25)
    })
  }
  // skill
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
  openDialogDeleteSkill(rowData) {
    rowData = this.selectedRowS
    this.dialogRef.open(DeleteSkillFormComponent, {
      data: this.selectedRowS
    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllSkill(1, 0, 25)
    })
  }
  openDialogS() {
    this.dialogRef.open(NewSkillFormComponent, {
      data: this.editData
    }

    ).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllSkill(1, 0, 25)
    })

  }

  openEditSkill() {
    this.dialogRef.open(EditSkillComponent, {
      data: this.selectedRowS

    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllSkill(1, 0, 25)
    })
  }


  //applicants

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
  //highlight

  selectedRowIndexApp = -1;
  highlightApp(applicant) {
    this.selectedRowApp = applicant;
    this.selectedRowIndexApp = applicant.id;
    console.log(applicant);



  }
  //shortList

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
  //highlight

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


