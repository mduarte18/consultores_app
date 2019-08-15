import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportForCareersComponent } from './report-for-careers.component';

describe('ReportForCareersComponent', () => {
  let component: ReportForCareersComponent;
  let fixture: ComponentFixture<ReportForCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportForCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportForCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
