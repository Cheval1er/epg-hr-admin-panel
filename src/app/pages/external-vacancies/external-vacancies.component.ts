import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import highlight from 'highlight.js';
import { start } from 'repl';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Vacancy } from './vacancy';

import { VacancyFormComponent } from './vacancy-form/vacancy-form.component';


@Component({
  selector: 'vex-external-vacancies',
  templateUrl: './external-vacancies.component.html',
  styleUrls: ['./external-vacancies.component.scss', './external-vacancies.component.css'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ExternalVacanciesComponent implements AfterViewInit {
  [x: string]: any;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTable) table!: MatTable<List>;
  // dataSource: any;

  data: Vacancy[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  columnsToDisplay = ['id', 'vacancyName', 'title', 'vacancyAddress', 'deadLine',
    'category', 'description', 'probationaryPeriod', 'schedule', 'status'];
  groupedColumns: string[] = ['grouped'];
  secondGroupedColumns: string[] = ['options'];
  thirdGroupedColumns: string[] = ['edit'];
  highlightedRows: any;

  constructor(private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private formBuilder: FormBuilder) {
    // this.dataSource = new VacancyTableDataSource();
    this.vacancyService.getAllVacancies().subscribe(x => {
      this.data = x['list'];
      console.log(this.data);
    })


  }


  ngOnInit() {
    this.getAllVacancies();
    this.getAllNewVacancies(1, 5);

  }



  public getAllVacancies(): void {
    this.vacancyService.getAllVacancies().subscribe(
      (response: Vacancy[]) => {
        this.data['list'] = response;
        // console.log(this.data)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }

  status: 'new' | 'active';

  public getAllNewVacancies(start: number, limit: number): void {

  }






  openDialog() {
    this.dialogRef.open(VacancyFormComponent, {
      disableClose: true,
      height: '950px',
      width: '1200px'
    });
  }








  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }



  highlight(row) {

  }




}


