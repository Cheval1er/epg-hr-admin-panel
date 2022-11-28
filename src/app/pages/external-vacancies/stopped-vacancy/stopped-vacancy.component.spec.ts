import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoppedVacancyComponent } from './stopped-vacancy.component';


describe('StoppedVacancyComponent', () => {
  let component: StoppedVacancyComponent;
  let fixture: ComponentFixture<StoppedVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoppedVacancyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StoppedVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
