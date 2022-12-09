import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ListProgram, VacancyProgramModel } from '../../model/vacancyProgram';

@Component({
  selector: 'vex-new-program',
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.scss']
})
export class NewProgramComponent implements OnInit {


  // programData: VacancyProgramModel[] = [];
  vacancyProgramForm: any;

  dataSourceProgram!: MatTableDataSource<any>;
  programData: ListProgram[] = [];

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    @Inject(MAT_DIALOG_DATA) public editData: any) { }
  ngOnInit(): void {
    this.vacancyProgramForm = this.formBuilder.group({
      programName: [''],
      comment: ['']
    })

  }

  programList: string[] = [
    'ArcGIS',
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
    console.log('Form data is ', this.vacancyProgramForm.value);

    this.vacancyService.addNewProgram(this.editData.id, this.vacancyProgramForm.value).subscribe((result) => {

      console.log(result);
      // console.log(this.vacancyProgramForm.value);
      // console.log(this.programData);

    });


  }

  closeForm() {
    this.dialogRef.closeAll();
  }
}
