import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApplicantService } from 'src/app/services/applicant.service';
import { EditApplicantComponent } from '../../external-vacancies/edit-vacancy/edit-applicant/edit-applicant.component';
import { Applicant } from '../../model/applicant';
import { ApplicantEducation, ApplicantTraining, ApplicantExperience, ApplicantLanguage, ApplicantProgram, ApplicantSkill, ApplicantDepartment, ApplicantFile } from '../../model/applicantDetail';

import saveAs from 'file-saver';
import { DownloadService } from 'src/app/services/download.service';
import * as XLSX from 'xlsx';
import { environment } from 'src/environments/environment';
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
  selector: 'vex-view-applicant',
  templateUrl: './view-applicant.component.html',
  styleUrls: ['./view-applicant.component.scss', './view-applicant.component.css']
})
export class ViewApplicantComponent implements OnInit {
  applicantForm: any;

  @ViewChild('content', { static: false }) el!: ElementRef;
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
  displayedColumnsProgram = ['id', 'program', 'level', 'otherProgram'];
  displayedColumnsSkill = ['id', 'skill', 'level', 'otherSkill'];
  displayedColumnsDepartment = ['id', 'department'];
  // displayedColumnsFile = ['fileName', 'fileRecord', 'fileFormat', 'download'];
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

      id: [{ value: this.editDataApplicant.id, disabled: true }],
      objectId: this.editDataApplicant.objectId,
      applicantId: this.editDataApplicant.applicantId,
      name: [{ value: this.editDataApplicant.fname, disabled: true }],
      LName: [{ value: this.editDataApplicant.lname, disabled: true }],
      customerNumber: [{ value: this.editDataApplicant.customerNumber, disabled: true }],
      birthDate: [{ value: this.editDataApplicant.birthDate, disabled: true }],
      gender: [{ value: this.editDataApplicant.genderId, disabled: true }],
      registrationCountry: [{ value: this.editDataApplicant.registrationCountry, disabled: true }],
      registrationCity: [{ value: this.editDataApplicant.registrationCity, disabled: true }],
      registrationAddress: [{ value: this.editDataApplicant.registrationAddress, disabled: true }],
      country: [{ value: this.editDataApplicant.country, disabled: true }],
      city: [{ value: this.editDataApplicant.city, disabled: true }],
      address: [{ value: this.editDataApplicant.address, disabled: true }],
      mail: [{ value: this.editDataApplicant.mail, disabled: true }],
      phone: [{ value: this.editDataApplicant.phone, disabled: true }],
      additionalphone: [{ value: this.editDataApplicant.additionalphone, disabled: true }],
      cityzen: [{ value: this.editDataApplicant.cityzen, disabled: true }],
      workStart: [{ value: this.editDataApplicant.workStart, disabled: true }],
      wontedType: [{ value: this.editDataApplicant.wantedTypeId, disabled: true }],
      workSchedule: [{ value: this.editDataApplicant.workSheduleId, disabled: true }],
      wontedPosition: [{ value: this.editDataApplicant.wantedPosition, disabled: true }],
      workPlace: [{ value: this.editDataApplicant.workPlace, disabled: true }],
      wontedSalary: [{ value: this.editDataApplicant.wantedSalary, disabled: true }],
      connectionId: [{ value: this.editDataApplicant.connectionId, disabled: true }],
      relativityName: [{ value: this.editDataApplicant.relativityName, disabled: true }],
      relativityPosition: [{ value: this.editDataApplicant.relativityPosition, disabled: true }],
      relativityPlaceWork: [{ value: this.editDataApplicant.relativityPlaceWork, disabled: true }],
      relativityMobile: [{ value: this.editDataApplicant.relativityMobile, disabled: true }],
      createDate: [{ value: this.editDataApplicant.createDate, disabled: true }],
      createUser: [{ value: this.editDataApplicant.createUser, disabled: true }]

    })
    // this.geteditApplicant(1, 0, 25);
    this.getGenders();
    this.getWantedType();
    this.getGraphicType();
    this.getConnection();
    this.getApplicantEdu();
    this.getEducation();
    this.getApplicantTrain();
    this.getExperience();
    this.getApplicantExperience();
    this.getLanguages();
    this.getUniversity();
    this.getApplicantLanguage();
    this.getLangLevel();
    this.getApplicantProgram();
    this.getProgram();
    this.getSkill();
    this.getApplicantSkill();
    this.getApplicantDepartment();
    // this.getApplicantFile();
    this.getApplicantsVacancies()
  }


  public DownloadFiles = environment.apiBaseUrl + '/VacancyAdmin/applicant/file/download?id=';

  download(id) {
    const EXT = this.selectedRowAppFile.fileName.substring(this.selectedRowAppFile.fileName.lastIndexOf('.') + 1);
    this.downloadService.downloadFile({ 'id': id }).subscribe(fileData =>
      saveAs(new Blob([fileData], { type: MIME_TYPES[EXT] }), this.selectedRowAppFile.fileName))

  }
  closeForm() {
    this.dialogRef.close()
  }
  selectedRowIndexAppFile = -1;
  highlightApp(applicantsFile) {
    this.selectedRowAppFile = applicantsFile;
    this.selectedRowIndexAppFile = applicantsFile.id;
    console.log(applicantsFile);
  };

  // applicants
  geteditApplicant() {
    this.applicantService.editApplicant(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicant)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }

  getApplicantsVacancies() {
    this.applicantService.applicantsVacancies(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicant)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  //applicant language
  getApplicantLanguage() {
    this.applicantService.applicantLanguage(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantLanguage = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantLanguage)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

  }
  //applicant experience
  getApplicantExperience() {
    this.applicantService.applicantExperience(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantExperience = x['list']);
      console.log(x['list'])
      console.log(this.dataSourceApplicantExperience)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  //applicant skill

  getApplicantSkill() {
    this.applicantService.applicantSkill(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantSkill = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantSkill)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  //applicant department
  getApplicantDepartment() {
    this.applicantService.applicantDepartment(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantDepartment = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantDepartment)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  //applicant program
  getApplicantProgram() {
    this.applicantService.applicantProgram(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantProgram = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantProgram)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }


  //applicant education
  getApplicantEdu() {
    this.applicantService.applicantEdu(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantEdu = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantEdu)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  //applicant training
  getApplicantTrain() {
    this.applicantService.applicantTrain(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicantTrain = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicantTrain)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }

  //applicant file
  // getApplicantFile() {
  //   this.applicantService.applicantFile(this.editDataApplicant.applicantId, 1, 0, 25).subscribe(x => {
  //     this.dataSource = new MatTableDataSource(this.dataSourceApplicantFile = x['list']);
  //     // console.log(x['list'])
  //     console.log(this.dataSourceApplicantFile)
  //   }),
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  // }

  dataEducation;

  getEducation() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataEducation = response['list']
      }

    )
  }

  dataSkill;
  getSkill() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.skill&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
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
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.experienceLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
      .subscribe(
        response => {
          console.log(response);
          this.dataExperience = response['list']
        }

      )
  };

  dataProgram;
  getProgram() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.programLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
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
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.gender&includeKeys=&excludeKeys=&page=1&start=0&limit=25')
      .subscribe(
        response => {
          console.log(response);
          this.dataGender = response['list']
        }

      )
  };

  wantedType;
  getWantedType() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.work&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.wantedType = response['list']
      }

    )
  };

  graphicType;
  getGraphicType() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.grafic&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.graphicType = response['list']
      }

    )
  };

  connection;
  getConnection() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.relative&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.connection = response['list']
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

  // for university
  dataUniversity;
  getUniversity() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.university&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataUniversity = response['list']
      }

    )
  }

  // for language level
  dataLangLevel;
  getLangLevel() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.languageLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataLangLevel = response['list']
      }

    )
  }

  // public makePdf() {
  //   let data = document.getElementById('htmltable');

  //   html2canvas(data).then(canvas => {

  //     let docWidth = 208;
  //     let docHeight = canvas.height * docWidth / canvas.width;

  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let doc = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

  //     doc.save('exportedPdf.pdf');
  //   });
  // }

}
