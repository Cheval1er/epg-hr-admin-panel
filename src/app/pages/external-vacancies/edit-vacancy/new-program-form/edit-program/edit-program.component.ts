import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Program, ProgramVacancy } from 'src/app/pages/model/vacancy-program-model';
import { VacancyService } from 'src/app/services/vacancy.service';
import { environment } from 'src/environments/environment';

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
    private httpClient: HttpClient,
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
    this.getProgram();
  }


  programList;
  getProgram() {
    this.httpClient.get<any>(environment.apiBaseUrl + '/VacancyAdmin/di/items/getitems?key=key.program&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.programList = response['list']
      }

    )
  }
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
