import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
import { ToastrService } from 'ngx-toastr';
 import { take,tap } from 'rxjs/operators';
@Component({
  selector: 'app-selecionar-asientos',
  templateUrl: './selecionar-asientos.component.html',
  styleUrls: ['./selecionar-asientos.component.css']
})
export class SelecionarAsientosComponent implements OnInit {

  data:any;
  boxlist$ = this.service.listaBox$;
  peliculaSelected$ = this.service.peliculaSelected$;
  salaSelected$ = this.service.salaSelected$;
  total =this.service.subtoal$;
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private service:ServiceFuncionesService,
    private http:HttpClient
  ) { 
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state;
    const pelicula = {
      'id':'this.data.idPelicula',
      'name':this.data.pelicula,
    }
    const sala = {
      'id':'this.data.idSala',
      'name':this.data.sala,
    }
    this.service.setUpSocket(this.data.id)
    this.service.setSala(sala);
    this.service.setPelicula(pelicula)
    this.service.buildGrid(this.data.row, this.data.column, this.data.disable,this.data.comprados);
  }

  ngOnInit(): void {
  }

  onBougthBoletos():void{
   try {
    const compra ={
      funcion: this.data.id,
      total:this.service.getSubTotal(),
      boletos:this.service.getBougthBox(),
      precio:4.5
    }
    console.log(compra)
    this.http.post<any>('http://localhost:9090/new-factura',compra).pipe(take(1)).subscribe((data)=>{
      this.router.navigate(['/comprar'])
      this.service.onCompra(this.data);
      this.toastr.success('Alerta', 'Se agrego', {
        closeButton: true,
        progressBar: true,
        timeOut: 1500,
      }); 
    },(error)=>{
      console.log(error);
    });
    console.log(compra);
   } catch (error) {
     console.log(error)
   }
  } 
}
