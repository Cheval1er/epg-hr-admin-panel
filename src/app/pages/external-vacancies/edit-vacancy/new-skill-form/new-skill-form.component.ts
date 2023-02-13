import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicantSkill } from 'src/app/pages/model/applicantDetail';
import { SkillVacancy } from 'src/app/pages/model/vacancy-skill-model';
import { VacancyService } from 'src/app/services/vacancy.service';




@Component({
  selector: 'vex-new-skill-form',
  templateUrl: './new-skill-form.component.html',
  styleUrls: ['./new-skill-form.component.scss']
})
export class NewSkillFormComponent implements OnInit {
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
      // skillName: [''],
      // comment: [''],
      id: [],
      objectId: [],
      otherSkill: [''],
      vacancyId: this.editData.id,
      skillId: [],
      programName: [],
      vacancyName: this.editData.vacancyName,
      levelId: [],




    })
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
    this.vacancyService.addNewSkill(this.editData.id, this.vacancySkillForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.close();




  }
  closeForm() {
    this.dialogRef.close()
  }




}




