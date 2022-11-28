import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledVacancyComponent, } from './cancelled-vacancy.component';

describe('CancelledVacancyComponent', () => {
  let component: CancelledVacancyComponent;
  let fixture: ComponentFixture<CancelledVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelledVacancyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CancelledVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
