import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';

@Component({
  selector: 'app-lista-funciones',
  templateUrl: './lista-funciones.component.html',
  styleUrls: ['./lista-funciones.component.css']
})
export class ListaFuncionesComponent implements OnInit,OnDestroy {

  listFunciones$=this.funcionesService.listFunciones$;

  constructor(
    private funcionesService :ServiceFuncionesService,
  ) { }

  ngOnInit(): void {
    this.funcionesService.getListsFunciones();
  }

  ngOnDestroy(): void {
  }

}
