import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/pages/model/applicant';
import { ApplicantEducation, ApplicantExperience, ApplicantLanguage, ApplicantProgram, ApplicantSkill, ApplicantTraining } from 'src/app/pages/model/applicantDetail';
import { ApplicantService } from 'src/app/services/applicant.service';

@Component({
  selector: 'vex-edit-applicant',
  templateUrl: './edit-applicant.component.html',
  styleUrls: ['./edit-applicant.component.scss', './edit-applicant.components.css']
})
export class EditApplicantComponent implements OnInit {
  applicantForm: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dialogRef: MatDialog,
    private httpClient: HttpClient,
    private datePipe: DatePipe,
    private applicantService: ApplicantService,

    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public editDataApplicant: any,
  ) { }


  displayedColumnsEdu = ['id', 'university', 'profession', 'sphere', 'quality',
    'from', 'to', 'otherUniversity', 'description'];

  displayedColumnsTrain = ['id', 'trainingName', 'trainingPlace', 'trainingCompany', 'from', 'to', 'trainingDesc'];
  displayedColumnsExperience = ['id', 'company', 'position', 'place', 'category', 'level', 'from', 'to', 'reason', 'salary', 'description'];
  displayedColumnsLanguage = ['id', 'language', 'level'];
  displayedColumnsProgram = ['id', 'program', 'level'];
  displayedColumnsSkill = ['id', 'skill'];

  dataSource!: MatTableDataSource<any>;
  dataSourceApplicantEdu: ApplicantEducation[];
  dataSourceApplicantTrain: ApplicantTraining[];
  dataSourceApplicantExperience: ApplicantExperience[];
  dataSourceApplicantLanguage: ApplicantLanguage[];
  dataSourceApplicantProgram: ApplicantProgram[];
  dataSourceApplicantSkill: ApplicantSkill[];

  dataSourceApplicant: Applicant[] = [];

  ngOnInit(): void {
    this.applicantForm = this.formBuilder.group({
      id: this.editDataApplicant.id,
      objectId: this.editDataApplicant.objectId,
      applicantId: this.editDataApplicant.applicantId,
      name: [this.editDataApplicant.fname],
      LName: [this.editDataApplicant.lname],
      customerNumber: [this.editDataApplicant.customerNumber],
      birthDate: [this.editDataApplicant.birthDate],
      gender: [this.editDataApplicant.genderId],
      registrationCountry: [this.editDataApplicant.registrationCountry],
      registrationCity: [this.editDataApplicant.registrationCity],
      registrationAddress: [this.editDataApplicant.registrationAddress],
      country: [this.editDataApplicant.country],
      city: [this.editDataApplicant.city],
      address: [this.editDataApplicant.address],
      mail: [this.editDataApplicant.mail],
      phone: [this.editDataApplicant.phone],
      additionalphone: [this.editDataApplicant.additionalphone],
      cityzen: [this.editDataApplicant.cityzen],
      workStart: [this.editDataApplicant.workStart],
      wontedType: [this.editDataApplicant.wantedTypeId],
      workSchedule: [this.editDataApplicant.workSheduleId],
      wontedPosition: [this.editDataApplicant.wantedPosition],
      workPlace: [this.editDataApplicant.workPlace],
      wontedSalary: [this.editDataApplicant.wantedSalary],
      connectionId: [this.editDataApplicant.connectionId],
      relativityName: [this.editDataApplicant.relativityName],
      relativityPosition: [this.editDataApplicant.relativityPosition],
      relativityPlaceWork: [this.editDataApplicant.relativityPlaceWork],
      relativityMobile: [this.editDataApplicant.relativityMobile],
      createDate: [this.editDataApplicant.createDate],
      createUser: [this.editDataApplicant.createUser]

    })
    if (this.editDataApplicant) {
      this.applicantForm.controls['id'].setValue(this.editDataApplicant.id);
      this.applicantForm.controls['objectId'].setValue(this.editDataApplicant.objectId);
      this.applicantForm.controls['applicantId'].setValue(this.editDataApplicant.applicantId);
      this.applicantForm.controls['name'].setValue(this.editDataApplicant.fname);
      this.applicantForm.controls['LName'].setValue(this.editDataApplicant.lname);
      this.applicantForm.controls['wontedType'].setValue(this.editDataApplicant.wantedTypeId);
    }

    this.geteditApplicant(1, 0, 25);
    this.getGenders();
    this.getWantedType();
    this.getGraphicType();
    this.getConnection();
    this.getApplicantEdu(1, 0, 25);
    this.getEducation();
    this.getApplicantTrain(1, 0, 25);
    this.getExperience();
    this.getApplicantExperience(1, 0, 25);
    this.getLanguages();
    this.getUniversity();
    this.getApplicantLanguage(1, 0, 25);
    this.getLangLevel();
    this.getApplicantProgram(1, 0, 25);
    this.getProgram();
    this.getSkill();
    this.getApplicantSkill(1, 0, 25)

  }

  geteditApplicant(page: number, start: number, limit: number) {
    this.applicantService.editApplicant(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicant)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }

  getApplicantLanguage(page: number, start: number, limit: number) {
    this.applicantService.applicantLanguage(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantLanguage = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantLanguage)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

  }
  getApplicantExperience(page: number, start: number, limit: number) {
    this.applicantService.applicantExperience(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantExperience = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantExperience)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }

  getApplicantSkill(page: number, start: number, limit: number) {
    this.applicantService.applicantSkill(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantSkill = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantSkill)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }

  getApplicantProgram(page: number, start: number, limit: number) {
    this.applicantService.applicantProgram(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantProgram = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantProgram)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  dataEducation;

  getEducation() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataEducation = response['list']
      }

    )
  }

  dataSkill;
  getSkill() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.skill&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataSkill = response['list']
      }

    )
  }

  getApplicantEdu(page: number, start: number, limit: number) {
    this.applicantService.applicantEdu(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantEdu = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantEdu)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }

  getApplicantTrain(page: number, start: number, limit: number) {
    this.applicantService.applicantTrain(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantTrain = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantTrain)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }



  refreshButton() {
    this.ngOnInit()

  }


  //experience Level
  dataExperience;
  getExperience() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.experienceLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
      .subscribe(
        response => {
          console.log(response);
          this.dataExperience = response['list']
        }

      )
  };

  dataProgram;
  getProgram() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.programLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
      .subscribe(
        response => {
          console.log(response);
          this.dataProgram = response['list']
        }

      )
  }

  saveEditApplicant() {
    // this.applicantService.editApplicant(this.editDataApplicant.applicantId, this.applicantForm.value).subscribe((result) => {
    //   console.log(result);
    // })
  }
  dataGender;
  getGenders() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.gender&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
      .subscribe(
        response => {
          console.log(response);
          this.dataGender = response['list']
        }

      )
  };

  wantedType;
  getWantedType() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.work&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.wantedType = response['list']
      }

    )
  };

  graphicType;
  getGraphicType() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.grafic&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.graphicType = response['list']
      }

    )
  };

  connection;
  getConnection() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.relative&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.connection = response['list']
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

  // for university
  dataUniversity;
  getUniversity() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.university&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataUniversity = response['list']
      }

    )
  }

  // for language level
  dataLangLevel;
  getLangLevel() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.languageLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataLangLevel = response['list']
      }

    )
  }
}