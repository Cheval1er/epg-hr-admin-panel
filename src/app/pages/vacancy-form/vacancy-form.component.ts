import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VacancyData } from './vacancy-data';


@Component({
  selector: 'vex-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.scss', './vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialog,
    private http: HttpClient) { }

  editRecordId = null;
  @ViewChild('f') Forms: NgForm;

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
  submitted = false;

  vacancyDataModel = new VacancyData(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', true, ' ', ' ', ' ',);

  saveForm() {
    // let url = "http://localhost:4200/pages/externalVacancies";
    // this.http.post(url, this.vacancyDataModel)
    this.submitted = true;
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


  ngOnInit(): void {
  }
}
