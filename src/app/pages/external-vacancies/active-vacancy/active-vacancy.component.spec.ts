import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveVacancyComponent, } from './active-vacancy.component';

describe('ActiveVacancyComponent', () => {
  let component: ActiveVacancyComponent;
  let fixture: ComponentFixture<ActiveVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveVacancyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ActiveVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
