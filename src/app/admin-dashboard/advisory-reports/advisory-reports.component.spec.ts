import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryReportsComponent } from './advisory-reports.component';

describe('AdvisoryReportsComponent', () => {
  let component: AdvisoryReportsComponent;
  let fixture: ComponentFixture<AdvisoryReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
