import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersApplicationComponent } from './teachers-application.component';

describe('TeachersApplicationComponent', () => {
  let component: TeachersApplicationComponent;
  let fixture: ComponentFixture<TeachersApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
