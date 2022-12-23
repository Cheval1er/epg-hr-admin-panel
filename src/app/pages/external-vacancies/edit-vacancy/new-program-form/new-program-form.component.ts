import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'vex-new-program-form',
  templateUrl: './new-program-form.component.html',
  styleUrls: ['./new-program-form.component.scss']
})
export class NewProgramFormComponent implements OnInit {
  vacancyProgramForm;

  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.vacancyProgramForm = this.formBuilder.group({
      id: this.editData.id,
      programName: [''],
      comment: [''],
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
  }
  closeForm() { }
}
