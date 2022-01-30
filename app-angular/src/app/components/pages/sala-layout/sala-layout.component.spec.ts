import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaLayoutComponent } from './sala-layout.component';

describe('SalaLayoutComponent', () => {
  let component: SalaLayoutComponent;
  let fixture: ComponentFixture<SalaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
