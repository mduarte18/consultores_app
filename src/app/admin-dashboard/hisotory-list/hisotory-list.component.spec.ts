import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisotoryListComponent } from './hisotory-list.component';

describe('HisotoryListComponent', () => {
  let component: HisotoryListComponent;
  let fixture: ComponentFixture<HisotoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisotoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisotoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
