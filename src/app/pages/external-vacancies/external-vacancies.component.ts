import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'vex-external-vacancies',
  templateUrl: './external-vacancies.component.html',
  styleUrls: ['./external-vacancies.component.scss', './external-vacancies.component.css'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ExternalVacanciesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
