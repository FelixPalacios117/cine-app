import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit, OnDestroy {

  listPeliculas$ = this.funcionesService.listPeliculas$

  constructor(
    private funcionesService :ServiceFuncionesService,
  ) { }

  ngOnInit(): void {
    this.funcionesService.getListsPeliculas()
  }
  ngOnDestroy():void{
    
  }

}
