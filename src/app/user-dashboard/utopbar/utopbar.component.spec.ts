import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtopbarComponent } from './utopbar.component';

describe('UtopbarComponent', () => {
  let component: UtopbarComponent;
  let fixture: ComponentFixture<UtopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
