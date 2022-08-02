import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsSearchComponent } from './applicants-search.component';

describe('ApplicantsSearchComponent', () => {
  let component: ApplicantsSearchComponent;
  let fixture: ComponentFixture<ApplicantsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
