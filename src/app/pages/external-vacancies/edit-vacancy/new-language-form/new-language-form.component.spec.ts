import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLanguageFormComponent } from './new-language-form.component';

describe('NewLanguageFormComponent', () => {
  let component: NewLanguageFormComponent;
  let fixture: ComponentFixture<NewLanguageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLanguageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
