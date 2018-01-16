import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefunComponent } from './refun.component';

describe('RefunComponent', () => {
  let component: RefunComponent;
  let fixture: ComponentFixture<RefunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
