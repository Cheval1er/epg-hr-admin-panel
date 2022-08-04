import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { VacancyFormComponent } from '../pages/vacancy-form/vacancy-form.component';
import { VacancyTableDataSource, VacancyTableItem } from './vacancy-table-datasource';

@Component({
  selector: 'vex-vacancy-table',
  templateUrl: './vacancy-table.component.html',
  styleUrls: ['./vacancy-table.component.scss', './vacancy-table.component.css']
})
export class VacancyTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<VacancyTableItem>;
  dataSource: VacancyTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'title', 'vacancyAddress', 'deadLine',
    'category', 'description', 'probationaryPeriod', 'schedule', 'status'];
  groupedColumns: string[] = ['grouped'];
  secondGroupedColumns: string[] = ['options'];
  thirdGroupedColumns: string[] = ['edit'];

  constructor(private dialogRef: MatDialog) {
    this.dataSource = new VacancyTableDataSource();
  }

  openDialog() {
    this.dialogRef.open(VacancyFormComponent,
      {
        height: '1000px',
        width: '1300px'
      });

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
