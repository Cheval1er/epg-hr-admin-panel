import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { resetExtensions } from 'showdown';

@Component({
  selector: 'vex-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss', './user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['checked', 'id', 'username', 'firstname', 'lastname', 'mobile', 'status'];
  groupedColumns: string[] = ['grouped'];

  thirdGroupedColumns: string[] = ['edit'];




  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }
  searchField;
  searchfield2;
  clearSearchField() {
    this.searchField = '';
    this.searchfield2 = '';
  }
  onReset() {
    this.onReset()

  }
}
