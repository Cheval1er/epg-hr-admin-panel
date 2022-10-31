import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/services/user.service';
import { User } from './user';


@Component({
  selector: 'vex-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss', './user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  public users: User[];
  User_Data: User[];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columnsToDisplay: string[] = ['checked', 'id', 'username', 'firstName', 'lastName', 'mobile', 'status'];
  groupedColumns: string[] = ['grouped'];

  thirdGroupedColumns: string[] = ['edit'];


  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

  }

  public getUser(): void {
    this.userService.getUser().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }




  ngAfterViewInit(): void {

  }
  searchField;
  searchfield2;
  clearSearchField() {
    this.searchField = '';
    this.searchfield2 = '';
  }

}
