import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsidebarComponent } from './usidebar.component';

describe('UsidebarComponent', () => {
  let component: UsidebarComponent;
  let fixture: ComponentFixture<UsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
