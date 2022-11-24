import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';


@Component({
  selector: 'vex-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.scss', './vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {
  convertDate: string;
  dateFormat: string;
  vacancyForm: any;

  constructor(private formBuilder: FormBuilder,

    private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    // @Inject(MAT_DIALOG_DATA) public editData: any,

  ) { }

  ngOnInit(): void {
    this.vacancyForm = this.formBuilder.group({
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
      educationSphere: [''],
      educationSphereComment: [''],
      salary: [''],

    });
    // if (this.editData) {
    //   this.vacancyForm.controls['vacancyName'].setValue(this.editData.vacancyName);
    //   this.vacancyForm.controls['vacancyAddress'].setValue(this.editData.vacancyAddress);
    //   this.vacancyForm.controls['deadLine'].setValue(this.editData.deadLine);
    //   this.vacancyForm.controls['schedule'].setValue(this.editData.schedule);
    //   this.vacancyForm.controls['category'].setValue(this.editData.category);
    //   this.vacancyForm.controls['type'].setValue(this.editData.type);
    //   this.vacancyForm.controls['description'].setValue(this.editData.description);
    //   this.vacancyForm.controls['experience'].setValue(this.editData.experience);
    //   this.vacancyForm.controls['probationaryPeriod'].setValue(this.editData.probationaryPeriod);

    //   this.vacancyForm.controls['educationLevel'].setValue(this.editData.educationLevel);
    //   this.vacancyForm.controls['education'].setValue(this.editData.education);
    //   this.vacancyForm.controls['educationSphere'].setValue(this.editData.educationSphere);
    //   this.vacancyForm.controls['educationSphereComment'].setValue(this.editData.educationSphereComment);
    //   this.vacancyForm.controls['salary'].setValue(this.editData.salary);
    // }

  }




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


