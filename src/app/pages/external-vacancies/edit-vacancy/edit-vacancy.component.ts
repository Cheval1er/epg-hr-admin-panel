import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { start } from 'repl';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Vacancy, vacancyProgram } from '../model/vacancy';
import { VacancyProgramModel, ListProgram } from '../model/vacancyProgram';
import { NewProgramComponent } from './new-program/new-program.component';
@Component({
  selector: 'vex-edit-vacancy',
  templateUrl: './edit-vacancy.component.html',
  styleUrls: ['./edit-vacancy.component.scss', './edit-vacancy.component.css']
})
export class EditVacancyComponent implements OnInit {
  convertDate: string;
  dateFormat: string;
  dataSource!: MatTableDataSource<any>;
  vacancyId: number;
  vacancy: Vacancy[] = [];

  showAlert = false;
  vacancyForm: any;

  dataSourceProgram!: MatTableDataSource<any>;
  programData: ListProgram[] = [];

  displayedColumns = ['id', 'language'];
  columnToDisplay = ['id', 'programs'];
  displayedColumnsSkill = ['id', 'skill'];
  displayedColumnsApplicants = ['id', 'fName', 'lName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate'];

  displayedColumnsShortList = ['id', 'fName', 'lName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate']

  constructor(private formBuilder: FormBuilder,

    private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public editData: any,


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
    if (this.editData) {
      this.vacancyForm.controls['vacancyName'].setValue(this.editData.vacancyName);
      this.vacancyForm.controls['vacancyAddress'].setValue(this.editData.vacancyAddress);
      this.vacancyForm.controls['deadLine'].setValue(this.editData.deadLine);
      this.vacancyForm.controls['schedule'].setValue(this.editData.schedule);
      this.vacancyForm.controls['category'].setValue(this.editData.category);
      this.vacancyForm.controls['type'].setValue(this.editData.type);
      this.vacancyForm.controls['description'].setValue(this.editData.description);
      this.vacancyForm.controls['experience'].setValue(this.editData.experience);
      this.vacancyForm.controls['probationaryPeriod'].setValue(this.editData.probationaryPeriod);

      this.vacancyForm.controls['educationLevel'].setValue(this.editData.educationLevel);
      this.vacancyForm.controls['education'].setValue(this.editData.education);
      this.vacancyForm.controls['educationSphere'].setValue(this.editData.educationSphere);
      this.vacancyForm.controls['educationSphereComment'].setValue(this.editData.educationSphereComment);
      this.vacancyForm.controls['salary'].setValue(this.editData.salary);
    }


    this.getAllProgram();


  };

  updateFormData() {
    console.log('Form data is ', this.vacancyForm.value);

    this.vacancyForm.value.deadLine = this.datePipe.transform(this.vacancyForm.value.deadLine, 'dd-MM-yyyy');

    this.vacancyService.updateVacancy(this.vacancyForm.value, this.editData.id).subscribe((result) => {
      console.log(result);
      setTimeout(() => {
        window.location.reload();
      }, 50);
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

  refreshButton() {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  public getAllProgram() {
    this.vacancyService.getAllPrograms(this.editData.id).subscribe(x => {
      this.dataSourceProgram = new MatTableDataSource(this.programData = x['list']);
      console.log(this.programData);
    })
  }

  openDialog(editData) {
    const dialogRef = this.dialog.open(NewProgramComponent, {
      data: this.editData

    });


  }




}




