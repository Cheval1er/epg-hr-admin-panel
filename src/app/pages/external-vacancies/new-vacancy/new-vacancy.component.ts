import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { EditVacancyComponent } from '../edit-vacancy/edit-vacancy.component';
import { Vacancy, List } from '../vacancy';
import { VacancyFormComponent } from '../vacancy-form/vacancy-form.component';

@Component({
  selector: 'vex-new-vacancy',
  templateUrl: './new-vacancy.component.html',
  styleUrls: ['./new-vacancy.component.scss', './new-vacancy.component.css']
})
export class NewVacancyComponent implements OnInit, AfterViewInit {

  // [x: string]: any;


  // @ViewChild(MatTable) table!: MatTable<any>;
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


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
    private router: Router
  ) {
    // this.dataSource = new VacancyTableDataSource();



  }



  ngOnInit() {

    this.getAllNewVacancies(0, 80);


  }





  //get all new vacancies
  public getAllNewVacancies(start: number, limit: number): void {
    this.vacancyService.getAllNewVacancies(start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.data = x['list']);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      console.log(this.data);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }




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


}
