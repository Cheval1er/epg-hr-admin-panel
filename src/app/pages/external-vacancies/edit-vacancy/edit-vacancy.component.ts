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
      categoryId: ['', Validators.required],
      typeId: ['', Validators.required],
      description: ['', Validators.required],
      experience: ['', Validators.required],
      probationaryPeriod: ['', Validators.required],
      educationLevelId: ['', Validators.required],
      education: ['', Validators.required],
      experienceSphereId: [''],
      educationSphereComment: [''],
      salary: [''],

    });
    if (this.editData) {
      this.vacancyForm.controls['vacancyName'].setValue(this.editData.vacancyName);
      this.vacancyForm.controls['vacancyAddress'].setValue(this.editData.vacancyAddress);
      this.vacancyForm.controls['deadLine'].setValue(this.editData.deadLine);
      this.vacancyForm.controls['schedule'].setValue(this.editData.schedule);
      this.vacancyForm.controls['categoryId'].setValue(this.editData.categoryId);
      this.vacancyForm.controls['typeId'].setValue(this.editData.typeId);
      this.vacancyForm.controls['description'].setValue(this.editData.description);
      this.vacancyForm.controls['experience'].setValue(this.editData.experience);
      this.vacancyForm.controls['probationaryPeriod'].setValue(this.editData.probationaryPeriod);

      this.vacancyForm.controls['educationLevelId'].setValue(this.editData.educationLevelId);
      this.vacancyForm.controls['education'].setValue(this.editData.education);
      this.vacancyForm.controls['experienceSphereId'].setValue(this.editData.experienceSphereId);
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
  categoryList: any[] = [
    {
      "id": 137,
      "name": "ადამიანური რესურსების მართვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 125,
      "name": "ადმინისტრაცია",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 126,
      "name": "ანალიტიკა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 124,
      "name": "აუდიტი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 151,
      "name": "ბიზნესის მართვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 247,
      "name": "ბილინგი",
      "key": "key.category",
      "sortOrder": 2
    },
    {
      "id": 133,
      "name": "განათლება",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 269,
      "name": "გარემოს დაცვა",
      "key": "key.category 1",
      "sortOrder": 2
    },
    {
      "id": 130,
      "name": "დიზაინი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 131,
      "name": "დისტრიბუცია",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 242,
      "name": "ენერგეტიკა",
      "key": "key.category.energy",
      "sortOrder": 1
    },
    {
      "id": 255,
      "name": "ენერგეტიკა / საშუალო ძაბვა",
      "key": "key.category. middle",
      "sortOrder": 2
    },
    {
      "id": 150,
      "name": "ენერგეტიკა/ დაბალი ძაბვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 149,
      "name": "ენერგეტიკა/ მაღალი ძაბვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 148,
      "name": "თბოენერგეტიკა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 134,
      "name": "ინჟინერია",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 138,
      "name": "ინფორმაციული ტექნოლგიები",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 144,
      "name": "კვლევები",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 262,
      "name": "კომერციული",
      "key": "key.category. commercial",
      "sortOrder": 2
    },
    {
      "id": 128,
      "name": "კონსალტინგი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 142,
      "name": "ლოჯისტიკა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 140,
      "name": "მენეჯმენტი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 241,
      "name": "ოპერატიული მართვა",
      "key": "key.category",
      "sortOrder": 1
    },
    {
      "id": 141,
      "name": "პროექტის მართვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 127,
      "name": "საზოგადოებასთან ურთიერთობა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 139,
      "name": "სამართალი",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 145,
      "name": "სტრატეგიული დაგეგმვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 146,
      "name": "ტრენინგები / სწავლება",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 135,
      "name": "ფინანსები",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 129,
      "name": "ცხელი ხაზი/ აბონენტთა მომსახურება",
      "key": "",
      "sortOrder": 0
    },
    {
      "id": 143,
      "name": "ხარისხის უზრუნველყოფა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 132,
      "name": "ხელოვნება",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 136,
      "name": "ჯანდაცვა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 147,
      "name": "ჰიდრო ენერგეტიკა",
      "key": null,
      "sortOrder": 0
    },
    {
      "id": 152,
      "name": "სხვა",
      "key": null,
      "sortOrder": 0
    }
  ];

  typeList: any[] = [
    {
      "id": 301,
      "name": "გარე ვაკანსია",
      "key": "key.type.external",
      "sortOrder": 16
    },
    {
      "id": 300,
      "name": "შიდა ვაკანსია",
      "key": "key.type.internal",
      "sortOrder": 16
    },
    {
      "id": 302,
      "name": "სტაჟირება",
      "key": "key.type.intern",
      "sortOrder": 16
    }
  ]
  educationList: any[] = [
    {
      "id": 263,
      "name": "N/A",
      "key": "key.educationLevel",
      "sortOrder": 1
    },
    {
      "id": 157,
      "name": "არასრული უმაღლესი",
      "key": "key.educationLevel.elementary",
      "sortOrder": 1
    },
    {
      "id": 158,
      "name": "ბაკალავრი",
      "key": "key.educationLevel.medium",
      "sortOrder": 2
    },
    {
      "id": 193,
      "name": "დოქტორი",
      "key": "key.educationLevel.doctor",
      "sortOrder": 9
    },
    {
      "id": 159,
      "name": "მაგისტრი",
      "key": "key.educationLevel.graduated",
      "sortOrder": 3
    },
    {
      "id": 194,
      "name": "პროფესიული",
      "key": "key.educationLevel.proffesional",
      "sortOrder": 6
    },
    {
      "id": 195,
      "name": "საშუალო",
      "key": "key.educationLevel.medium",
      "sortOrder": 7
    }

  ];

  sphereList: any[] = [
    {
      "id": 264,
      "name": "N/A",
      "key": "key.sphere N",
      "sortOrder": 1
    },
    {
      "id": 277,
      "name": "ბიოლოგია / ეკოლოგია",
      "key": "key.sphere. biologi",
      "sortOrder": 1
    },
    {
      "id": 249,
      "name": "ელექტროენერგეტიკული",
      "key": "key.sphere.electroenergy",
      "sortOrder": 2
    },
    {
      "id": 245,
      "name": "ელექტროტექნიკური",
      "key": "key.sphere electrotechnical",
      "sortOrder": 2
    },
    {
      "id": 225,
      "name": "ენერგეტიკული ",
      "key": "key.sphere.energetical",
      "sortOrder": 3
    },
    {
      "id": 227,
      "name": "იურიდიული",
      "key": "key.sphere.legal",
      "sortOrder": 5
    },
    {
      "id": 244,
      "name": "ლოგისტიკა",
      "key": "key.sphere logistics",
      "sortOrder": 1
    },
    {
      "id": 230,
      "name": "საინფორმაციო ტექნოლოგიები",
      "key": "key.sphere.IT",
      "sortOrder": 7
    },
    {
      "id": 266,
      "name": "სატყეო",
      "key": "key.sphere. forest",
      "sortOrder": 1
    },
    {
      "id": 252,
      "name": "საშუალო",
      "key": "key.sphere. საშუალო",
      "sortOrder": 2
    },
    {
      "id": 224,
      "name": "ტექნიკური",
      "key": "key.sphere.tecnical",
      "sortOrder": 2
    },
    {
      "id": 228,
      "name": "უმაღლესი",
      "key": "key.sphere.higher ",
      "sortOrder": 1
    },
    {
      "id": 226,
      "name": "ფინანსური",
      "key": "key.sphere.financial",
      "sortOrder": 4
    },
    {
      "id": 229,
      "name": "ჰიდროენერგეტიკული",
      "key": "key.sphere.hydro",
      "sortOrder": 6
    }

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
