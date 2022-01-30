import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBComponent } from './box-b.component';

describe('BoxBComponent', () => {
  let component: BoxBComponent;
  let fixture: ComponentFixture<BoxBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
