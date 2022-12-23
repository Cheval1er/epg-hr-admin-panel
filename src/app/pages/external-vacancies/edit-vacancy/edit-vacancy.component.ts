import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { start } from 'repl';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Vacancy, } from '../model/vacancy';
import { ListProgram } from '../model/vacancy-program-model';
import { VacancyFormComponent } from '../vacancy-form/vacancy-form.component';
import { NewProgramFormComponent } from './new-program-form/new-program-form.component';


@Component({
  selector: 'vex-edit-vacancy',
  templateUrl: './edit-vacancy.component.html',
  styleUrls: ['./edit-vacancy.component.scss', './edit-vacancy.component.css']
})
export class EditVacancyComponent implements OnInit {
  convertDate: string;
  selectedRow;
  dataSource!: MatTableDataSource<any>;

  dataSourceProgram: ListProgram[]
  showAlert = false;
  vacancyForm: any;

data: ListProgram[];




  displayedColumns = ['id', 'language'];
  columnToDisplay = ['id', 'programs', 'comment'];
  displayedColumnsSkill = ['id', 'skill'];
  displayedColumnsApplicants = ['id', 'fName', 'lName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate'];

  displayedColumnsShortList = ['id', 'fName', 'lName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate']

  constructor(private formBuilder: FormBuilder,

    private dialogRef: MatDialog,
    private vacancyService: VacancyService,
    private datePipe: DatePipe,

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


    this.getAllProgram(1, 0, 25)


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


  public getAllProgram(page: number, start: number, limit: number) {
    this.vacancyService.getAllPrograms(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceProgram = x['list']);
      console.log(x['list'])
      console.log(this.dataSourceProgram)
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }


  }

  selectedRowIndex = -1;
  highlight(program) {
    this.selectedRow = program;
    this.selectedRowIndex = program.id;
    console.log(program);



  }

  openDialog() {
    this.dialogRef.open(NewProgramFormComponent, {
      data: this.editData
    }

    )
  }

 
  public deleteProgram(program): void {
    program = this.selectedRow;
    this.vacancyService.deleteProgram(program.id, program).subscribe((result) => {
      console.log(result)
    })
    // setTimeout(() => {
    //   window.location.reload();
    // }, 2);

  }

}


