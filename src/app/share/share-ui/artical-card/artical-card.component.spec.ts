import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalCardComponent } from './artical-card.component';

describe('ArticalCardComponent', () => {
  let component: ArticalCardComponent;
  let fixture: ComponentFixture<ArticalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
