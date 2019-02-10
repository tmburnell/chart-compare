import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLineComponent } from './ngx-line.component';

describe('NgxLineComponent', () => {
  let component: NgxLineComponent;
  let fixture: ComponentFixture<NgxLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
