import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SkillVacancy } from 'src/app/pages/model/vacancy-skill-model';
import { VacancyService } from 'src/app/services/vacancy.service';

import { NewSkillFormComponent } from '../new-skill-form.component';


@Component({
  selector: 'vex-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent implements OnInit {

  [x: string]: any;
  vacancySkillForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceSkill: SkillVacancy[]



  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<NewSkillFormComponent>,
    private httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.vacancySkillForm = this.formBuilder.group({
      // id: this.editData.id,
      // SkillName: [''],

      id: this.editData.id,
      objectId: this.editData.objectId,
      otherSkill: [''],
      vacancyId: this.editData.vacancyId,
      skillId: [''],
      skillName: [''],





    })
    if (this.editData) {
      this.vacancySkillForm.controls['id'].setValue(this.editData.id);
      this.vacancySkillForm.controls['objectId'].setValue(this.editData.objectId);
      this.vacancySkillForm.controls['vacancyId'].setValue(this.editData.vacancyId)
      this.vacancySkillForm.controls['otherSkill'].setValue(this.editData.otherSkill);
      this.vacancySkillForm.controls['skillName'].setValue(this.editData.SkillName);
      this.vacancySkillForm.controls['skillId'].setValue(this.editData.SkillId)

    }

    this.getSkill();
  }


  skillList;
  getSkill() {
    this.httpClient.get<any>('http://192.168.150.131:9090/VacancyAdmin/di/items/getitems?key=key.skill&includeKeys=&excludeKeys=&page=1&start=0&limit=25').subscribe(
      response => {
        console.log(response);
        this.skillList = response['list']
      }

    )
  }

  saveFormData() {
    console.log(this.vacancySkillForm.value);
    this.vacancyService.updateSkill(this.editData.objectId, this.editData.vacancyId, this.vacancySkillForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.close();




  }
  closeForm() {
    this.dialogRef.close()
  }


}
