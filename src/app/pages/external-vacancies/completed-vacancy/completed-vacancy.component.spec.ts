import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletedVacancyComponent } from './completed-vacancy.component';


describe('CompletedVacancyComponent', () => {
  let component: CompletedVacancyComponent;
  let fixture: ComponentFixture<CompletedVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedVacancyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CompletedVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
