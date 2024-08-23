import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvementsComponent } from './involvements.component';

describe('InvolvementsComponent', () => {
  let component: InvolvementsComponent;
  let fixture: ComponentFixture<InvolvementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvolvementsComponent]
    });
    fixture = TestBed.createComponent(InvolvementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
