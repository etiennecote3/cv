import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSectionComponent } from './cv-section.component';

describe('CvSectionComponent', () => {
  let component: CvSectionComponent;
  let fixture: ComponentFixture<CvSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvSectionComponent]
    });
    fixture = TestBed.createComponent(CvSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
