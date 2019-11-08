import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteArticlesComponent } from './write-articles.component';

describe('WriteArticlesComponent', () => {
  let component: WriteArticlesComponent;
  let fixture: ComponentFixture<WriteArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
