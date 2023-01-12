import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Program, ProgramVacancy } from 'src/app/pages/model/vacancy-program-model';
import { VacancyService } from 'src/app/services/vacancy.service';

import { NewProgramFormComponent } from '../new-program-form.component';

@Component({
  selector: 'vex-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.scss']
})
export class EditProgramComponent implements OnInit {
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

      id: this.editData.id,
      objectId: this.editData.objectId,
      otherProgram: [''],
      vacancyId: this.editData.vacancyId,
      programId: [''],
      programName: [''],





    })
    if (this.editData) {
      this.vacancyProgramForm.controls['id'].setValue(this.editData.id);
      this.vacancyProgramForm.controls['objectId'].setValue(this.editData.objectId);
      this.vacancyProgramForm.controls['vacancyId'].setValue(this.editData.vacancyId)
      this.vacancyProgramForm.controls['otherProgram'].setValue(this.editData.otherProgram);
      this.vacancyProgramForm.controls['programName'].setValue(this.editData.programName);
      this.vacancyProgramForm.controls['programId'].setValue(this.editData.programId)

    }
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
    this.vacancyService.updateProgram(this.editData.objectId, this.editData.vacancyId, this.vacancyProgramForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.close();




  }
  closeForm() {
    this.dialogRef.close()
  }



}
