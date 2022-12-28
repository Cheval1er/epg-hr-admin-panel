import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ProgramVacancy, Program } from '../../../model/vacancy-program-model';
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
      comment: [''],
      id: [],
      objectId: [],
      otherProgram: [''],
      vacancyId: [],
      programId: [],
      programName: [],
      vacancyName: []




    })
    if (this.editData) {
      this.vacancyProgramForm.controls['comment'].setValue(this.editData.comment);
      this.vacancyProgramForm.controls['programName'].setValue(this.editData.programName);
      this.vacancyProgramForm.controls['programId'].setValue(this.editData.programId)

    }
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
    this.vacancyService.editProgram(this.editData.objectId, this.editData.vacancyId, this.vacancyProgramForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.close();




  }
  closeForm() {
    this.dialogRef.close()
  }



}
