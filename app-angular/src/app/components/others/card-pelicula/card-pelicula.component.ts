import { Component, Input, OnInit } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent implements OnInit {

  @Input() id!:string;
  @Input() name!:string;
  @Input() director!:string;
  @Input() image!:string;
  @Input() duracion!:string;

  constructor(
    private service:ServiceFuncionesService
  ) { }

  ngOnInit(): void {
    console.log(this.name)
  }

  onSelectPelicula():void{
    this.service.setPelicula({'id':this.id,'name':this.name});
  }

}
