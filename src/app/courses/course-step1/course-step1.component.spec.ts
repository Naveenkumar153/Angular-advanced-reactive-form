import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStep1Component } from './course-step1.component';

describe('CourseStep1Component', () => {
  let component: CourseStep1Component;
  let fixture: ComponentFixture<CourseStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
