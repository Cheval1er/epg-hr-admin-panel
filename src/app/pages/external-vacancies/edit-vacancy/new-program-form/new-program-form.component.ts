import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { event } from 'jquery';
import { VacancyService } from 'src/app/services/vacancy.service';
import { threadId } from 'worker_threads';
import { ListProgram, Program, ProgramVacancy } from '../../../model/vacancy-program-model';
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
  data: Program['vacancyId'];
  dataName: Program['vacancyName']


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
      programId: [],
      programName: [],
      vacancyName: this.editData.vacancyName,




    })

  }


  programList: any[] = [
    {
      "id": 267,
      "name": "ArcGIS",
      "key": "key.program",
      "sortOrder": 2
    },
    {
      "id": 182,
      "name": "AutoCAD",
      "key": "key.program.autoCard",
      "sortOrder": 1
    },
    {
      "id": 175,
      "name": "Excel",
      "key": "key.program.exel",
      "sortOrder": 1
    },
    {
      "id": 180,
      "name": "IFS",
      "key": "key.program.ifs",
      "sortOrder": 1
    },
    {
      "id": 239,
      "name": "MS Office",
      "key": "key.program.MS Office",
      "sortOrder": 1
    },
    {
      "id": 179,
      "name": "MS Project",
      "key": "key.program.project",
      "sortOrder": 1
    },
    {
      "id": 174,
      "name": "Oris",
      "key": "key.program.oris",
      "sortOrder": 1
    },
    {
      "id": 268,
      "name": "Photoshop",
      "key": "key.program",
      "sortOrder": 1
    },
    {
      "id": 177,
      "name": "PowerPoint",
      "key": "key.program.powerPoint",
      "sortOrder": 1
    },
    {
      "id": 178,
      "name": "Visio",
      "key": "key.program.visio",
      "sortOrder": 1
    },
    {
      "id": 176,
      "name": "Word",
      "key": "key.program.word",
      "sortOrder": 1
    },
    {
      "id": 183,
      "name": "სხვა",
      "key": "key.program.other",
      "sortOrder": 1
    }

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


