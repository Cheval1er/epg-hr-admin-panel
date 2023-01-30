import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import saveAs from 'file-saver';
import { Applicant } from 'src/app/pages/model/applicant';
import { ApplicantDepartment, ApplicantEducation, ApplicantExperience, ApplicantFile, ApplicantLanguage, ApplicantProgram, ApplicantSkill, ApplicantTraining } from 'src/app/pages/model/applicantDetail';
import { ApplicantService } from 'src/app/services/applicant.service';

import { DownloadService } from 'src/app/services/download.service';




const MIME_TYPES = {
  pdf: 'application/pdf',
  png: 'image/png',
  jpg: 'image/jpeg',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  doc: 'application/msword',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xls: 'application/vnd.ms-excel'
}
@Component({
  selector: 'vex-edit-applicant',
  templateUrl: './edit-applicant.component.html',
  styleUrls: ['./edit-applicant.component.scss', './edit-applicant.component.css']
})
export class EditApplicantComponent implements OnInit {
  applicantForm: any;
  selectedRowAppFile: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<EditApplicantComponent>,
    private httpClient: HttpClient,
    private datePipe: DatePipe,
    private applicantService: ApplicantService,
    private downloadService: DownloadService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public editDataApplicant: any,
  ) { }


  displayedColumnsEdu = ['id', 'university', 'profession', 'sphere', 'quality',
    'from', 'to', 'otherUniversity', 'description'];

  displayedColumnsTrain = ['id', 'trainingName', 'trainingPlace', 'trainingCompany', 'from', 'to', 'trainingDesc'];
  displayedColumnsExperience = ['id', 'company', 'position', 'place', 'category', 'level', 'from', 'to', 'reason', 'salary', 'description'];
  displayedColumnsLanguage = ['id', 'language', 'level', 'otherLanguage'];
  displayedColumnsProgram = ['id', 'program', 'level'];
  displayedColumnsSkill = ['id', 'skill'];
  displayedColumnsDepartment = ['id', 'department'];
  displayedColumnsFile = ['fileName', 'fileRecord', 'fileFormat'];
  displayedColumnsApplicant = ['id', 'vacancyName', 'createDate']


  dataSource!: MatTableDataSource<any>;
  dataSourceApplicantEdu: ApplicantEducation[];
  dataSourceApplicantTrain: ApplicantTraining[];
  dataSourceApplicantExperience: ApplicantExperience[];
  dataSourceApplicantLanguage: ApplicantLanguage[];
  dataSourceApplicantProgram: ApplicantProgram[];
  dataSourceApplicantSkill: ApplicantSkill[];
  dataSourceApplicantDepartment: ApplicantDepartment[];
  dataSourceApplicantFile: ApplicantFile[];

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
    this.getApplicantSkill(1, 0, 25);
    this.getApplicantDepartment(1, 0, 25);
    this.getApplicantFile(1, 0, 25);
    this.getApplicantsVacancies(1, 0, 25)

  }

  attachedFile: ApplicantFile[];
  download(id) {
    const EXT = this.selectedRowAppFile.fileName.substring(this.selectedRowAppFile.fileName.lastIndexOf('.') + 1);
    this.downloadService.downloadFile({ 'id': id }).subscribe(fileData =>
      saveAs(new Blob([fileData], { type: MIME_TYPES[EXT] }), this.selectedRowAppFile.fileName))

  }
  selectedRowIndexAppFile = -1;
  highlightApp(applicantsFile) {
    this.selectedRowAppFile = applicantsFile;
    this.selectedRowIndexAppFile = applicantsFile.id;
    console.log(applicantsFile);
  };
  closeForm() {
    this.dialogRef.close()
  }
  // applicants
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

  getApplicantsVacancies(page: number, start: number, limit: number) {
    this.applicantService.applicantsVacancies(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicant)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  //applicant language
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
  //applicant experience
  getApplicantExperience(page: number, start: number, limit: number) {
    this.applicantService.applicantExperience(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantExperience = x['list']);
      console.log(x['list'])
      console.log(this.dataSourceApplicantExperience)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  //applicant skill

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
  //applicant department
  getApplicantDepartment(page: number, start: number, limit: number) {
    this.applicantService.applicantDepartment(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantDepartment = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantDepartment)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  //applicant program
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


  //applicant education
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
  //applicant training
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

  //applicant file
  getApplicantFile(page: number, start: number, limit: number) {
    this.applicantService.applicantFile(this.editDataApplicant.applicantId, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantFile = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantFile)
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