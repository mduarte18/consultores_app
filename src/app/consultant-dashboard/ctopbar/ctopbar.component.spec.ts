import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtopbarComponent } from './ctopbar.component';

describe('CtopbarComponent', () => {
  let component: CtopbarComponent;
  let fixture: ComponentFixture<CtopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
