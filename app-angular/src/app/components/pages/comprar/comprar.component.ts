import { Component, OnInit } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/internal/operators/take';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  listFunciones$=this.funcionesService.listFunciones$
  constructor(
    private http: HttpClient,
    private funcionesService: ServiceFuncionesService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.funcionesService.getListsFunciones()
  }
  
  onClick(id:string,row:string,column:string,disable:string,comprados:string,sala:string,pelicula:string):void{
     this.router.navigate(['/seleccionarAsientos'],{
       state:{
         'id':id,
          'row':row,
          'column':column,
          'disable':disable,
        'comprados':comprados,
        'sala':sala,
        'pelicula':pelicula}
    });
  }
}
