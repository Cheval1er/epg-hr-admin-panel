import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { User } from '../model/user';
import { UserViewComponent } from './user-view/user-view.component';


@Component({
  selector: 'vex-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss', './user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchUsersData: User[] = [];

  columnsToDisplay: string[] = ['id', 'username', 'firstName', 'lastName', 'mobile', 'status'];
  groupedColumns: string[] = ['grouped'];

  thirdGroupedColumns: string[] = ['edit'];
  selectedRow: any;
  userSearchForm: any;


  constructor(private userService: UserService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialog) {

  }

  ngOnInit(): void {

    this.userSearchForm = this.formBuilder.group({
      userName: [''],
      personName: [''],
    })

    this.getAllUsers(1, 0, 25);


  }
  // filterData($event: any) {
  //   this.searchUsersData.filter = $event.target.value;
  // }




  public getAllUsers(page: number, start: number, limit: number) {
    this.userService.getUser(page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.searchUsersData = x['list']);
      // this.data = x['list'];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.searchUsersData);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }

  searchUser(page: number, start: number, limit: number) {
    this.userService.searchUsers(this.userSearchForm.value.userName, this.userSearchForm.value.personName, page, start, limit).subscribe(x => {

      this.dataSource = x['list'];

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource, this.userSearchForm.value.userName, this.userSearchForm.value.personName)
    }
    )


  }

  ngAfterViewInit(): void {

  }
  // searchField;
  // searchfield2;
  // clearSearchField() {
  //   this.searchField = '';
  //   this.searchfield2 = '';
  // }

  refreshButton() {
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }


  onReset() {
    window.location.reload();
    this.userSearchForm.reset();
  }


  selectedRowIndex = -1;
  highlight(user) {
    this.selectedRow = user;
    this.selectedRowIndex = user.id;
    console.log(user);
  }

  public cancelUser(): void {

    this.userService.cancelUser(this.selectedRow).subscribe((result) => {
      console.log(result)
    })
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }

  public activeUser(): void {

    this.userService.activeUser(this.selectedRow).subscribe((result) => {
      console.log(result)
    })
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }

  public lockUser(): void {

    this.userService.lockUser(this.selectedRow).subscribe((result) => {
      console.log(result)
    })
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }

  public unLockUser(): void {

    this.userService.unLockUser(this.selectedRow).subscribe((result) => {
      console.log(result)
    })
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }



  viewDialog() {



    this.dialogRef.open(UserViewComponent, {
      // disableClose: true,
      height: '1400px',
      width: '1400px',
      data: this.selectedRow

    })

    console.log(this.selectedRow)

  }
}
