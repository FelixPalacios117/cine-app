import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowFuncionComponent } from './row-funcion.component';

describe('RowFuncionComponent', () => {
  let component: RowFuncionComponent;
  let fixture: ComponentFixture<RowFuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowFuncionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowFuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
