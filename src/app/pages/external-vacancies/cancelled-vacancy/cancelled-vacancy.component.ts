import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Vacancy, List } from '../../model/vacancy';
import { EditVacancyComponent } from '../edit-vacancy/edit-vacancy.component';

import { VacancyFormComponent } from '../vacancy-form/vacancy-form.component';
import { ViewVacancyComponent } from '../view-vacancy/view-vacancy.component';

@Component({
  selector: 'vex-cancelled-vacancy',
  templateUrl: './cancelled-vacancy.component.html',
  styleUrls: ['./cancelled-vacancy.component.scss', './cancelled-vacancy.component.css']
})
export class CancelledVacancyComponent implements OnInit, AfterViewInit {

  // [x: string]: any;


  // @ViewChild(MatTable) table!: MatTable<any>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  data: Vacancy[] = [];
  public editVacancy: List;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'company', 'vacancyName', 'vacancyAddress', 'deadLine',
    'category', 'type', 'probationaryPeriod', 'schedule', 'status'];
  groupedColumns: string[] = ['grouped'];
  secondGroupedColumns: string[] = ['options'];
  thirdGroupedColumns: string[] = ['edit'];
  highlightedRows: any;


  constructor(private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private router: Router
  ) {
    // this.dataSource = active VacancyTableDataSource();



  }



  ngOnInit() {

    this.getAllCancelledVacancies(0, 80);


  }





  // get all cancelled vacancies 
  public getAllCancelledVacancies(start: number, limit: number): void {
    this.vacancyService.getAllCancelledVacancies(start, limit).subscribe(c => {
      this.dataSource = new MatTableDataSource(this.data = c['list']);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      console.log(this.data);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }

  public cancelVacancy(rowData): void {
    rowData = this.selectedRow;
    this.vacancyService.cancelVacancy(rowData).subscribe((result) => {
      console.log(result)
    })
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }

  public duplicateVacancy(rowData): void {
    rowData = this.selectedRow;
    this.vacancyService.duplicateVacancy(rowData).subscribe((result) => {
      console.log(result)
    })
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }


  public activeVacancy(rowData): void {
    rowData = this.selectedRow;
    this.vacancyService.activeVacancy(rowData).subscribe((result) => {
      console.log(result)
    })
    setTimeout(() => {
      window.location.reload();
    }, 2);

  }

  public deleteVacancy(rowData): void {
    rowData = this.selectedRow;
    this.vacancyService.deleteVacancy(rowData).subscribe((result) => {
      console.log(result)
    })
    setTimeout(() => {
      window.location.reload();
    }, 2);

  }

  refreshButton() {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  openDialog() {
    this.dialogRef.open(VacancyFormComponent, {
      disableClose: true,
      height: '950px',
      width: '1200px'
    });
  }


  editData;


  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort
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
      // disableClose: true,
      height: '950px',
      width: '1400px',
      data: this.selectedRow

    })
    console.log(rowData)

  }
  viewDialog(rowData) {

    rowData = this.selectedRow

    this.dialogRef.open(ViewVacancyComponent, {
      // disableClose: true,
      height: '950px',
      width: '1400px',
      data: this.selectedRow

    })

    console.log(rowData)

  }

}
