import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-funciones',
  templateUrl: './lista-funciones.component.html',
  styleUrls: ['./lista-funciones.component.css']
})
export class ListaFuncionesComponent implements OnInit,OnDestroy {

  listFunciones$=this.funcionesService.listFunciones$;

  constructor(
    private funcionesService :ServiceFuncionesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.funcionesService.getListsFunciones();
  }

  ngOnDestroy(): void {
  }

  onNavigateToAdd():void{
    this.router.navigate(['/agregarfuncion'],{state:{'operation':'newFuntion'}})
  }

  onNavigateToEdit(id:string,idSala:string,idPelicula:string,nombreSala:string,nombrePelicula:string,fecha:string):void{
    const data ={
      'operation':'editFuntion',
      'id':id,
      'idPelicula':idPelicula,
      'idSala':idSala,
      'nombreSala':nombreSala,
      'nombrePelicula':nombrePelicula,
      'fecha':fecha
    }
    console.log(data)
    this.router.navigate(['/agregarfuncion'],{state:data})
  }

}
