import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveConsultantComponent } from './approve-consultant.component';

describe('ApproveConsultantComponent', () => {
  let component: ApproveConsultantComponent;
  let fixture: ComponentFixture<ApproveConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
