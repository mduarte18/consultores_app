import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtopbarComponent } from './atopbar.component';

describe('AtopbarComponent', () => {
  let component: AtopbarComponent;
  let fixture: ComponentFixture<AtopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
