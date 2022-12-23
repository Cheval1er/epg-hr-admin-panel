import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ListProgram } from '../../model/vacancy-program-model';


@Component({
  selector: 'vex-new-program-form',
  templateUrl: './new-program-form.component.html',
  styleUrls: ['./new-program-form.component.scss']
})
export class NewProgramFormComponent implements OnInit {
  vacancyProgramForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceProgram: ListProgram[]


  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.vacancyProgramForm = this.formBuilder.group({
      // id: this.editData.id,
      // programName: [''],
      comment: [''],
      objectId: [],
      id: [],
      vacancyId: this.editData.id,
      vacancyName: this.editData.vacancyName,
      programId: [],
      programName: [],
      otherProgram: [],

    })

  }

  programList: string[] = [
    'ArcGis',
    'AutoCAD',
    'Excel',
    'IFS',
    'MS Office',
    'MS Project',
    'Oris',
    'Photoshop',
    'PowerPoint',
    'Visio',
    'Word',
    'სხვა'

  ]

  saveFormData() {
    console.log(this.vacancyProgramForm.value);
    this.vacancyService.addNewProgram(this.editData.id, this.vacancyProgramForm.value).subscribe((result) => {
      console.log(result)
    })
    this.getAllProgram(1, 0, 25);
  }
  closeForm() { }


  public getAllProgram(page: number, start: number, limit: number) {
    this.vacancyService.getAllPrograms(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceProgram = x['list']);
      console.log(x['list'])
      console.log(this.dataSourceProgram)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }


}