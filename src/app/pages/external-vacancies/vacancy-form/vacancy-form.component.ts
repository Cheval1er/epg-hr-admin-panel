import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VacancyService } from 'src/app/services/vacancy.service';


@Component({
  selector: 'vex-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.scss', './vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {
  convertDate: string;
  dateFormat: string;

  constructor(private formBuilder: FormBuilder,

    private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private datePipe: DatePipe

  ) { }

  ngOnInit(): void {


  }

  vacancyForm = this.formBuilder.group({
    vacancyName: ['', Validators.required],
    vacancyAddress: ['', Validators.required],
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






  saveFormData() {
    console.log('Form data is ', this.vacancyForm.value);

    this.vacancyForm.value.deadLine = this.datePipe.transform(this.vacancyForm.value.deadLine, 'dd-MM-yyyy')

    this.vacancyService.addVacancy(this.vacancyForm.value).subscribe((result) => {
      console.log(result)
    })
    this.dialogRef.closeAll();
  }

  closeForm() {
    this.dialogRef.closeAll();
  }
  categoryList: string[] = [
    'ადამიანური რესურსების მართვა',
    'ადმინისტრაცია',
    'ანალიტიკა',
    'აუდიტი',
    'ბიზნესის მართვა',
    'ბილინგი',
    'განათლება',
    'გარემოს დაცვა',
    'დიზაინი',
    'დისტრიბუცია',
    'ენერგეტიკა',
    'ენერგეტიკა/საშუალო ძაბვა',
    'ენერგეტიკა/დაბალი ძაბვა',
    'ენერგეტიკა/მაღალი ძაბვა',
    'თბოენერგეტიკა',
    'ინჟინერია',
    'ინფორმაციული ტექნოლოგიები',
    'კვლევები',
    'კომერციული',
    'კონსალტინგი',
    'ლოჯისტიკა',
    'მენეჯმენტი',
    'ოპერატიული მართვა',
    'პროექტის მართვა',
    'საზოგადოებასთან ურთიერთობა',
    'სამართალი',
    'სტრატეგიული დაგეგმვა',
    'ტრენინგები/სწავლება',
    'ფინანსები',
    'ცხელი ხაზი/აბონენტთა მომსახურება',
    'ხარისხის უზრუნველყოფა',
    'ხელოვნება',
    'ჯანდაცვა',
    'ჰიდრო ენერგეტიკა',
    'სხვა'
  ];

  educationList: string[] = [
    'N/A',
    'არასრული უმაღლესი',
    'ბაკალავრი',
    'დოქტორი',
    'მაგისტრი',
    'პროფესიული',
    'საშუალო'

  ];

  sphereList: string[] = [
    'N/A',
    'ბიოლოგია/ეკოლოგია',
    'ელექტროენერგეტიკული',
    'ელექტროტექნიკური',
    'ენერგეტიკული',
    'იურიდიული',
    'ლოგისტიკა',
    'საინფორმაციო ტექნოლოგიები',
    'სატყეო',
    'საშუალო',
    'ტექნიკური',
    'უმაღლესი',
    'ფინანსური',
    'ჰიდროენერგეტიკული'


  ]


}


function moment(dateValue: any, arg1: string, arg2: boolean) {
  throw new Error('Function not implemented.');
}
// function moment(date: Date, arg1: string) {
//   throw new Error('Function not implemented.');
// }
