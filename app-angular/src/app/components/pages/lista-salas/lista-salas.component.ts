import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/internal/operators/take';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrls: ['./lista-salas.component.css']
})
export class ListaSalasComponent implements OnInit,OnDestroy {
  listSalas$=this.funcionesService.listSalas$;
  constructor(
    private router:Router,
    private http: HttpClient,
    private funcionesService: ServiceFuncionesService,
    private toastr: ToastrService
  ) {     
  }

  ngOnInit(): void {
    this.funcionesService.getListsSalas() 
  }
  ngOnDestroy(): void {
      
  }
  onSendDisable(row:string,column:string,id:string,disable:string):void{
    this.router.navigate(['/layout'],{state:{'row':row,'column':column,'id':id,'disable':disable}})
  }

}
