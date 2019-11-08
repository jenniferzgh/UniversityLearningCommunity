import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalRelatedComponent } from './professional-related.component';

describe('ProfessionalRelatedComponent', () => {
  let component: ProfessionalRelatedComponent;
  let fixture: ComponentFixture<ProfessionalRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
