import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/pages/model/applicant';
import { ApplicantEducation } from 'src/app/pages/model/applicantDetail';
import { ApplicantService } from 'src/app/services/applicant.service';
import { VacancyService } from 'src/app/services/vacancy.service';

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

  displayedColumnsTrain = ['id', 'trainingName', 'trainingPlace', 'trainingCompany', 'from', 'to', 'trainingDesc']

  dataSource!: MatTableDataSource<any>;
  dataSourceApplicantEdu: ApplicantEducation[];

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
  dataEducation;

  getEducation() {
    this.httpClient.get<any>('http://localhost:8585/VacancyAdmin/di/items/getitems?key=key.educationLevel&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.dataEducation = response['list']
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



  refreshButton() {

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
}
