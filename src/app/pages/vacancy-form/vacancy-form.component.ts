import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'vex-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.scss', './vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }


  vacancyForm = this.formBuilder.group({
    vacancyName: ['', Validators.required],
    address: ['', Validators.required],
    deadLine: ['', Validators.required],
    schedule: ['', Validators.required],
    category: ['', Validators.required],
    type: ['', Validators.required],
    description: ['', Validators.required],
    experience: ['', Validators.required],
    probationaryPeriod: ['', Validators.required],
    educationLevel: ['', Validators.required],
    education: ['', Validators.required],
    educationSphere: ['', Validators.required],
    educationSphereComment: [''],
    salary: [''],

  });


  saveForm() {
    console.log('Form data is ', this.vacancyForm.value);
  }


  ngOnInit(): void {
  }
}
