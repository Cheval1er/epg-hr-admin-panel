import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { VacancyService } from 'src/app/services/vacancy.service';
import { EditVacancyComponent } from './edit-vacancy/edit-vacancy.component';
import { List, Vacancy } from './vacancy';

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
export class ExternalVacanciesComponent implements OnInit, AfterViewInit {
  // [x: string]: any;


  // @ViewChild(MatTable) table!: MatTable<List>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  data: Vacancy[] = [];
  public editVacancy: List;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'vacancyName', 'title', 'vacancyAddress', 'deadLine',
    'category', 'description', 'probationaryPeriod', 'schedule', 'status'];
  groupedColumns: string[] = ['grouped'];
  secondGroupedColumns: string[] = ['options'];
  thirdGroupedColumns: string[] = ['edit'];
  highlightedRows: any;


  constructor(private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private formBuilder: FormBuilder,


    private datePipe: DatePipe,
    private router: Router

  ) {
    // this.dataSource = new VacancyTableDataSource();



  }



  ngOnInit() {
    this.getAllVacancies();
    this.getAllNewVacancies(0, 80);
    this.getAllActiveVacancies(0, 80);
    this.getAllCancelledVacancies(0, 80);
    this.getAllCompletedVacancies(0, 80);
    this.getAllStoppedVacancies(0, 80);



  }



  //get all vacancies
  public getAllVacancies(): void {
    this.vacancyService.getAllVacancies().subscribe(x => {
      this.dataSource = new MatTableDataSource(this.data = x['list']);
      // this.data = x['list'];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log(this.data);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }

  //get all new vacancies
  public getAllNewVacancies(start: number, limit: number): void {
    this.vacancyService.getAllNewVacancies(start, limit).subscribe(t => {
      this.dataSource = new MatTableDataSource(this.data = t['list']);

      console.log(this.data);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }




  }

  // get all active vacancies 

  public getAllActiveVacancies(start: number, limit: number): void {
    this.vacancyService.getAllActiveVacancies(start, limit).subscribe(a => {
      this.dataSource = new MatTableDataSource(this.data = a['list']);

      console.log(this.data);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }

  //get all cancelled vacancies
  public getAllCancelledVacancies(start: number, limit: number): void {
    this.vacancyService.getAllCancelledVacancies(start, limit).subscribe(c => {
      this.dataSource = new MatTableDataSource(this.data = c['list']);

      let result = this.dataSource.filter

      console.log(this.data);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }


  public getAllCompletedVacancies(start: number, limit: number): void {
    this.vacancyService.getAllCompletedVacancies(start, limit).subscribe(c => {
      this.dataSource = new MatTableDataSource(this.data = c['list']);

      let result = this.dataSource.filter

      console.log(this.data);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }


  public getAllStoppedVacancies(start: number, limit: number): void {
    this.vacancyService.getAllStoppedVacancies(start, limit).subscribe(c => {

      this.dataSource = new MatTableDataSource(this.data = c['list']);


      let result = this.dataSource.filter

      console.log(this.data);

    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }




  openDialog() {
    this.dialogRef.open(VacancyFormComponent, {
      disableClose: true,
      height: '950px',
      width: '1200px'
    });
  }



  // editButtonClick(vacancyId: number) {
  //   this.router.navigate(['/vacancy', vacancyId])

  // }


  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }
  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }


  selectedRowIndex = -1;
  highlight(vacancy) {
    this.selectedRow = vacancy;
    this.selectedRowIndex = vacancy.id;
    console.log(vacancy);



  }
  selectedRow;


  editDialog(rowData) {

    rowData = this.selectedRow
    this.dialogRef.open(EditVacancyComponent, {
      disableClose: true,
      height: '950px',
      width: '1200px',
      data: this.selectedRow

    })
    console.log(rowData)
  }



}

