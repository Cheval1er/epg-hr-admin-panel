import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ListProgram, ProgramVacancy } from '../../model/vacancy-program-model';
import { EditVacancyComponent } from '../edit-vacancy.component';


@Component({
  selector: 'vex-new-program-form',
  templateUrl: './new-program-form.component.html',
  styleUrls: ['./new-program-form.component.scss']
})
export class NewProgramFormComponent implements OnInit {
  [x: string]: any;
  vacancyProgramForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceProgram: ProgramVacancy[]



  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<NewProgramFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.vacancyProgramForm = this.formBuilder.group({
      // id: this.editData.id,
      // programName: [''],
      // comment: [''],
      id: [],
      objectId: [],
      otherProgram: [''],
      vacancyId: this.editData.id,
      programId: [this.programName],
      programName: [''],
      vacancyName: this.editData.vacancyName,




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
    this.dialogRef.close();




  }
  closeForm() {
    this.dialogRef.close()
  }




}