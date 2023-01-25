import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Applicant } from '../../model/applicant';
import { VacancyApplicant } from '../../model/vacancy-applicant-model';

@Component({
  selector: 'vex-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss', './user-view.components.css']
})
export class UserViewComponent implements OnInit {
  userForm: any;
  data: Applicant[] = [];
  dataSource!: MatTableDataSource<any>;
  dataSourceApplicant: VacancyApplicant[];

  displayedColumns: string[] = ['id', 'fname', 'lname', 'customerNumber', 'birthDate', 'mail', 'mobile', 'additionalphone', 'createuser', 'createdate', 'status'];
  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private userService: UserService,
    private vacancyService: VacancyService) { }
  searchApplicantsData!: MatTableDataSource<any>;
  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      email: [{ value: this.editData.email, disabled: true }],
      firstName: [{ value: this.editData.firstName, disabled: true }],
      lastName: [{ value: this.editData.lastName, disabled: true }],
      mobile: [{ value: this.editData.contactMobile, disabled: true }],

    }
    );
    this.getUserApplicant(1, 0, 25);

  }

  getUserApplicant(page, start, limit) {
    this.userService.userApplicant(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceApplicant = x['list']);
      // console.log(x['list'])
      console.log(this.dataSourceApplicant)
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }


}
