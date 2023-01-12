

import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'vex-applicants-search',
  templateUrl: './applicants-search.component.html',
  styleUrls: ['./applicants-search.component.scss', './applicants-search.component.css']
})
export class ApplicantsSearchComponent implements AfterViewChecked {


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;





  constructor(private formBuilder: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef) { }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  appForm = this.formBuilder.group({
    vacancy: [""],
    languages: [""],
    programs: [""],
    departments: [""],
    educationLevel: [""],
    gender: [""],
    ageFrom: [""],
    ageTo: [""],
    experience: [""],
    dateFrom: [""],
    dateTo: [""]

  });

  languagesList: string[] = [
    'ბულგალური',
    'გერმანული',
    'ესპანური',
    'თურქული',
    'ესპანური',
    'იტალიური',
    'რუსული',
    'ფრანგული',
    'ქართული',
    'ჩეხური',
    'ჩინური'




  ]

  programsList: string[] = [
    'ArcGIS',
    'AutoCAD',
    'Excel',
    'IFS',
    'MS Office',
    'MS Project',
    'Oris',
    'Photoshop',
    'PowerPoint',
    'Visio',
    'Word',
    'სხვა'



  ]

  departmentsList: string[] = [
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

  ]

  educationList: string[] = [
    'N/A',
    'არასრული უმაღლესი',
    'ბაკალავრი',
    'დოქტორი',
    'მაგისტრი',
    'პროფესიული',
    'საშუალო'

  ];

  genderList: string[] = [
    'მდედრობითი',
    'მამრობითი'
  ]


    )
  }

  displayedColumns: string[] = ['checked', 'id', 'firstname', 'lastname', 'vacancyname',
    'customernubmer', 'birthdate', 'mail', 'mobile', 'additionalphone', 'createuser', 'createdate', 'status'];
  groupedColumns: string[] = ['grouped'];

  thirdGroupedColumns: string[] = ['edit'];

  //ragac chavtsere ubralod
  ngAfterViewInit(): void {
    this.appForm

  }

  ngOnInit(): void {
  }


  onReset() {
    this.appForm.reset();
  }

}