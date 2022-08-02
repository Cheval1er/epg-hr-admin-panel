import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalVacanciesComponent } from './external-vacancies.component';

describe('ExternalVacanciesComponent', () => {
  let component: ExternalVacanciesComponent;
  let fixture: ComponentFixture<ExternalVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalVacanciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
