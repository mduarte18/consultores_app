import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugReportsComponent } from './bug-reports.component';

describe('BugReportsComponent', () => {
  let component: BugReportsComponent;
  let fixture: ComponentFixture<BugReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
