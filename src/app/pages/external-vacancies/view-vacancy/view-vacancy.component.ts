import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HighlightConfig } from 'src/@vex/components/highlight/highlight.model';
import { VacancyService } from 'src/app/services/vacancy.service';
import { VacancyApplicant } from '../../model/vacancy-applicant-model';
import { ListLanguage } from '../../model/vacancy-language-model';
import { ListProgram } from '../../model/vacancy-program-model';
import { VacancyShortListApplicant } from '../../model/vacancy-shortList-model';
import { ListSkill } from '../../model/vacancy-skill-model';

@Component({
  selector: 'vex-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss', './view-vacancy.components.css']
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

    private vacancyService: VacancyService,
    private datePipe: DatePipe,
    private httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public editData: any,


  ) { }

  displayedColumns = ['id', 'languages', 'comment'];

  columnToDisplay = ['id', 'programs', 'comment'];

  displayedColumnsSkill = ['id', 'skills', 'comment'];

  displayedColumnsApplicants = ['id', 'firstName', 'lastName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate'];

  displayedColumnsShortList = ['id', 'firstName', 'lastName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate']

  ngOnInit(): void {

    this.vacancyForm = this.formBuilder.group({
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
      education: [{ value: this.editData.education, disabled: true }],
      experienceSphereId: [{ value: this.editData.experienceSphereId, disabled: true }],
      educationSphereComment: [{ value: this.editData.educationSphereComment, disabled: true }],
      salary: [{ value: this.editData.salary, disabled: true }],

    });
    this.getAllLanguage(1, 0, 25);
    this.getAllProgram(1, 0, 25);
    this.getAllSkill(1, 0, 25);
    this.getAllApplicants(1, 0, 25);
    this.getAllShortListApplicants(1, 0, 25);

    this.getcategory();
    this.getEducation();
    this.getSphere();
    this.getType();

  }
  closeForm() {

  }

  // categoryList: any[] = [
  //   {
  //     "id": 137,
  //     "name": "ადამიანური რესურსების მართვა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 125,
  //     "name": "ადმინისტრაცია",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 126,
  //     "name": "ანალიტიკა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 124,
  //     "name": "აუდიტი",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 151,
  //     "name": "ბიზნესის მართვა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 247,
  //     "name": "ბილინგი",
  //     "key": "key.category",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 133,
  //     "name": "განათლება",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 269,
  //     "name": "გარემოს დაცვა",
  //     "key": "key.category 1",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 130,
  //     "name": "დიზაინი",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 131,
  //     "name": "დისტრიბუცია",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 242,
  //     "name": "ენერგეტიკა",
  //     "key": "key.category.energy",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 255,
  //     "name": "ენერგეტიკა / საშუალო ძაბვა",
  //     "key": "key.category. middle",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 150,
  //     "name": "ენერგეტიკა/ დაბალი ძაბვა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 149,
  //     "name": "ენერგეტიკა/ მაღალი ძაბვა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 148,
  //     "name": "თბოენერგეტიკა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 134,
  //     "name": "ინჟინერია",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 138,
  //     "name": "ინფორმაციული ტექნოლგიები",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 144,
  //     "name": "კვლევები",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 262,
  //     "name": "კომერციული",
  //     "key": "key.category. commercial",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 128,
  //     "name": "კონსალტინგი",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 142,
  //     "name": "ლოჯისტიკა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 140,
  //     "name": "მენეჯმენტი",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 241,
  //     "name": "ოპერატიული მართვა",
  //     "key": "key.category",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 141,
  //     "name": "პროექტის მართვა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 127,
  //     "name": "საზოგადოებასთან ურთიერთობა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 139,
  //     "name": "სამართალი",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 145,
  //     "name": "სტრატეგიული დაგეგმვა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 146,
  //     "name": "ტრენინგები / სწავლება",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 135,
  //     "name": "ფინანსები",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 129,
  //     "name": "ცხელი ხაზი/ აბონენტთა მომსახურება",
  //     "key": "",
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 143,
  //     "name": "ხარისხის უზრუნველყოფა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 132,
  //     "name": "ხელოვნება",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 136,
  //     "name": "ჯანდაცვა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 147,
  //     "name": "ჰიდრო ენერგეტიკა",
  //     "key": null,
  //     "sortOrder": 0
  //   },
  //   {
  //     "id": 152,
  //     "name": "სხვა",
  //     "key": null,
  //     "sortOrder": 0
  //   }
  // ];

  // typeList: any[] = [
  //   {
  //     "id": 301,
  //     "name": "გარე ვაკანსია",
  //     "key": "key.type.external",
  //     "sortOrder": 16
  //   },
  //   {
  //     "id": 300,
  //     "name": "შიდა ვაკანსია",
  //     "key": "key.type.internal",
  //     "sortOrder": 16
  //   },
  //   {
  //     "id": 302,
  //     "name": "სტაჟირება",
  //     "key": "key.type.intern",
  //     "sortOrder": 16
  //   }
  // ]
  // educationList: any[] = [
  //   {
  //     "id": 263,
  //     "name": "N/A",
  //     "key": "key.educationLevel",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 157,
  //     "name": "არასრული უმაღლესი",
  //     "key": "key.educationLevel.elementary",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 158,
  //     "name": "ბაკალავრი",
  //     "key": "key.educationLevel.medium",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 193,
  //     "name": "დოქტორი",
  //     "key": "key.educationLevel.doctor",
  //     "sortOrder": 9
  //   },
  //   {
  //     "id": 159,
  //     "name": "მაგისტრი",
  //     "key": "key.educationLevel.graduated",
  //     "sortOrder": 3
  //   },
  //   {
  //     "id": 194,
  //     "name": "პროფესიული",
  //     "key": "key.educationLevel.proffesional",
  //     "sortOrder": 6
  //   },
  //   {
  //     "id": 195,
  //     "name": "საშუალო",
  //     "key": "key.educationLevel.medium",
  //     "sortOrder": 7
  //   }

  // ];

  // sphereList: any[] = [
  //   {
  //     "id": 264,
  //     "name": "N/A",
  //     "key": "key.sphere N",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 277,
  //     "name": "ბიოლოგია / ეკოლოგია",
  //     "key": "key.sphere. biologi",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 249,
  //     "name": "ელექტროენერგეტიკული",
  //     "key": "key.sphere.electroenergy",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 245,
  //     "name": "ელექტროტექნიკური",
  //     "key": "key.sphere electrotechnical",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 225,
  //     "name": "ენერგეტიკული ",
  //     "key": "key.sphere.energetical",
  //     "sortOrder": 3
  //   },
  //   {
  //     "id": 227,
  //     "name": "იურიდიული",
  //     "key": "key.sphere.legal",
  //     "sortOrder": 5
  //   },
  //   {
  //     "id": 244,
  //     "name": "ლოგისტიკა",
  //     "key": "key.sphere logistics",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 230,
  //     "name": "საინფორმაციო ტექნოლოგიები",
  //     "key": "key.sphere.IT",
  //     "sortOrder": 7
  //   },
  //   {
  //     "id": 266,
  //     "name": "სატყეო",
  //     "key": "key.sphere. forest",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 252,
  //     "name": "საშუალო",
  //     "key": "key.sphere. საშუალო",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 224,
  //     "name": "ტექნიკური",
  //     "key": "key.sphere.tecnical",
  //     "sortOrder": 2
  //   },
  //   {
  //     "id": 228,
  //     "name": "უმაღლესი",
  //     "key": "key.sphere.higher ",
  //     "sortOrder": 1
  //   },
  //   {
  //     "id": 226,
  //     "name": "ფინანსური",
  //     "key": "key.sphere.financial",
  //     "sortOrder": 4
  //   },
  //   {
  //     "id": 229,
  //     "name": "ჰიდროენერგეტიკული",
  //     "key": "key.sphere.hydro",
  //     "sortOrder": 6
  //   }

  // ]
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
