import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLoginComponent } from './choose-login.component';

describe('ChooseLoginComponent', () => {
  let component: ChooseLoginComponent;
  let fixture: ComponentFixture<ChooseLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
