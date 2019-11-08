import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalFromMyTeacherComponent } from './artical-from-my-teacher.component';

describe('ArticalFromMyTeacherComponent', () => {
  let component: ArticalFromMyTeacherComponent;
  let fixture: ComponentFixture<ArticalFromMyTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalFromMyTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalFromMyTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
