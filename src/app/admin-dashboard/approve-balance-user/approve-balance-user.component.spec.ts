import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBalanceUserComponent } from './approve-balance-user.component';

describe('ApproveBalanceUserComponent', () => {
  let component: ApproveBalanceUserComponent;
  let fixture: ComponentFixture<ApproveBalanceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveBalanceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveBalanceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
