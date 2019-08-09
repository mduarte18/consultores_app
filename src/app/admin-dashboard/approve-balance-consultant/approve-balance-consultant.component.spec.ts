import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBalanceConsultantComponent } from './approve-balance-consultant.component';

describe('ApproveBalanceConsultantComponent', () => {
  let component: ApproveBalanceConsultantComponent;
  let fixture: ComponentFixture<ApproveBalanceConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveBalanceConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveBalanceConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
