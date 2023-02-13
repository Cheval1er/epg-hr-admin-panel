import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { VacancyService } from 'src/app/services/vacancy.service';
import { EditVacancyComponent } from './edit-vacancy/edit-vacancy.component';
import { List, Vacancy } from '../model/vacancy';

import { VacancyFormComponent } from './vacancy-form/vacancy-form.component';
import { ViewVacancyComponent } from './view-vacancy/view-vacancy.component';


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

  selectedRow;
  // @ViewChild(MatTable) table!: MatTable<List>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data: Vacancy[]
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
    // this.dataSource = new VacancyTableDataSource();



  }



  ngOnInit() {
    this.getAllVacancies();
    // this.getAllNewVacancies(0, 80);
    // this.getAllActiveVacancies(0, 80);
    // this.getAllCancelledVacancies(0, 80);
    // this.getAllCompletedVacancies(0, 80);
    // this.getAllStoppedVacancies(0, 80);



  }


  //get all vacancies
  public getAllVacancies(): void {
    this.vacancyService.getAllVacancies().subscribe(x => {
      this.dataSource = new MatTableDataSource(this.data = x['list']);
      // this.data = x['list'];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.data);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
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


  //get all new vacancies
  // public getAllNewVacancies(start: number, limit: number): void {
  //   this.vacancyService.getAllNewVacancies(start, limit).subscribe(x => {
  //     this.dataSource = new MatTableDataSource(this.data = x['list']);

  //     console.log(this.data);
  //   }),
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }




  // }

  // get all active vacancies 

  // public getAllActiveVacancies(start: number, limit: number): void {
  //   this.vacancyService.getAllActiveVacancies(start, limit).subscribe(a => {
  //     this.dataSource = new MatTableDataSource(this.data = a['list']);
  //     this.dataSource.sort = this.sort;
  //     this.dataSource.paginator = this.paginator;

  //     console.log(this.data);
  //   }),
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  // }

  //get all cancelled vacancies
  // public getAllCancelledVacancies(start: number, limit: number): void {
  //   this.vacancyService.getAllCancelledVacancies(start, limit).subscribe(c => {
  //     this.dataSource = new MatTableDataSource(this.data = c['list']);


  //     console.log(this.data);
  //   }),
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  // }


  // public getAllCompletedVacancies(start: number, limit: number): void {
  //   this.vacancyService.getAllCompletedVacancies(start, limit).subscribe(c => {
  //     this.dataSource = new MatTableDataSource(this.data = c['list']);


  //     console.log(this.data);
  //   }),
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  // }


  // public getAllStoppedVacancies(start: number, limit: number): void {
  //   this.vacancyService.getAllStoppedVacancies(start, limit).subscribe(c => {

  //     this.dataSource = new MatTableDataSource(this.data = c['list']);



  //     console.log(this.data);

  //   }),
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  // }


  refreshButton() {
    setTimeout(() => {
      window.location.reload();
    }, 2);
  }

  openDialog() {
    this.dialogRef.open(VacancyFormComponent, {
      disableClose: true,
      height: '950px',
      width: '1200px'
    });
  }


  // editData;
  // editButtonClick(vacancyId: number) {
  //   this.router.navigate(['/vacancy', vacancyId]);
  //   this.editData = this.selectedRow

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



  editDialog() {



    this.dialogRef.open(EditVacancyComponent, {
      // disableClose: true,
      height: '950px',
      width: '100%',
      data: this.selectedRow

    })

    // console.log(rowData)

  }

  viewDialog(rowData) {

    rowData = this.selectedRow

    this.dialogRef.open(ViewVacancyComponent, {
      // disableClose: true,
      height: '1400px',
      width: '1400px',
      data: this.selectedRow

    })

    console.log(rowData)

  }


  goToLinks(url: string) {
    window.open(url, "_blank");
  }
}

