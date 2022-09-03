import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserdialogComponent } from './newuserdialog.component';

describe('NewuserdialogComponent', () => {
  let component: NewuserdialogComponent;
  let fixture: ComponentFixture<NewuserdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewuserdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewuserdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
