import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportForStateComponent } from './report-for-state.component';

describe('ReportForStateComponent', () => {
  let component: ReportForStateComponent;
  let fixture: ComponentFixture<ReportForStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportForStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportForStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
