import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ListProgram, ProgramVacancy } from '../model/vacancy-program-model';
import { EditProgramComponent } from './new-program-form/edit-program/edit-program.component';
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

  data: ProgramVacancy[];




  displayedColumns = ['id', 'language'];
  columnToDisplay = ['id', 'programs', 'comment'];
  displayedColumnsSkill = ['id', 'skill'];
  displayedColumnsApplicants = ['id', 'fName', 'lName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate'];

  displayedColumnsShortList = ['id', 'fName', 'lName', 'personalNumber',
    'bDay', 'mail', 'additionalMail', 'mobile', 'additionalPhone', 'applyDate']
  vacancyProgramForm: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
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
    };



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
    this.ngOnInit()
  }

  //Programs
  public getAllProgram(page: number, start: number, limit: number) {
    this.vacancyService.getAllPrograms(this.editData.id, page, start, limit).subscribe(x => {
      this.dataSource = new MatTableDataSource(this.dataSourceProgram = x['list']);
      // console.log(x['list'])
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
  openDialogDeleteProgram(rowData) {
    rowData = this.selectedRow
    this.dialogRef.open(DeleteProgramFormComponent, {
      data: this.selectedRow
    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram(1, 0, 25)
    })
  }
  openDialog() {
    this.dialogRef.open(NewProgramFormComponent, {
      data: this.editData
    }

    ).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram(1, 0, 25)
    })

  }

  openEditProgram() {
    this.dialogRef.open(EditProgramComponent, {
      data: this.selectedRow

    }).afterClosed().subscribe(EditVacancyComponent => {
      this.getAllProgram(1, 0, 25)
    })
  }


  //Language


}


@Component({
  selector: 'vex-new-program-form',
  templateUrl: './delete-program-form.component.html',
  styleUrls: ['./edit-vacancy.component.css']
})
export class DeleteProgramFormComponent implements OnInit {

  vacancyProgramForm;
  dataSource!: MatTableDataSource<any>;

  dataSourceProgram: ProgramVacancy[]
  editData: any;



  constructor(private formBuilder: FormBuilder,
    private vacancyService: VacancyService,
    private dialogRef: MatDialogRef<DeleteProgramFormComponent>,
    @Inject(MAT_DIALOG_DATA) public editData2: any,) { }
  ngOnInit() {
    this.vacancyProgramForm = this.formBuilder.group({
      // id: this.editData.id,
      // programName: [''],
      // comment: [''],
      id: [],
      objectId: [],
      otherProgram: [''],
      vacancyId: [],
      programId: [''],
      programName: [''],
      vacancyName: []




    })
    // if (this.editData2) {
    //   this.vacancyProgramForm.controls['programName'].setValue(this.editData2.programName);
    // }
  }


  closeForm() {
    this.dialogRef.close()

  }

  deleteProgram() {
    this.vacancyService.deleteProgram(this.vacancyProgramForm.value, this.editData2.id, this.editData2.vacancyId).subscribe((result) => {
      console.log(result);

    })
    this.dialogRef.close();
  }
}
