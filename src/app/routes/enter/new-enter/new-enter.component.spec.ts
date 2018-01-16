import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnterComponent } from './new-enter.component';

describe('NewEnterComponent', () => {
  let component: NewEnterComponent;
  let fixture: ComponentFixture<NewEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
