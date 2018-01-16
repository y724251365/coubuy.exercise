import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnterComponent } from './admin-enter.component';

describe('AdminEnterComponent', () => {
  let component: AdminEnterComponent;
  let fixture: ComponentFixture<AdminEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
