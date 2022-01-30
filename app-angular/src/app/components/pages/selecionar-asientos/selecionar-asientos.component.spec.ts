import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarAsientosComponent } from './selecionar-asientos.component';

describe('SelecionarAsientosComponent', () => {
  let component: SelecionarAsientosComponent;
  let fixture: ComponentFixture<SelecionarAsientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarAsientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
