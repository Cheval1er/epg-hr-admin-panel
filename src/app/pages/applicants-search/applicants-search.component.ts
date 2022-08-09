

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'vex-applicants-search',
  templateUrl: './applicants-search.component.html',
  styleUrls: ['./applicants-search.component.scss', './applicants-search.component.css']
})
export class ApplicantsSearchComponent implements OnInit {


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['checked', 'id', 'firstname', 'lastname', 'vacancyname',
    'customernubmer', 'birthdate', 'mail', 'mobile', 'additionalphone', 'createuser', 'createdate', 'status'];
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

}