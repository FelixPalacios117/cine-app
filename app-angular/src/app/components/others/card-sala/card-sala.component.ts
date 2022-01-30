import { Component, OnInit,Input } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
@Component({
  selector: 'app-card-sala',
  templateUrl: './card-sala.component.html',
  styleUrls: ['./card-sala.component.css']
})
export class CardSalaComponent implements OnInit {
  @Input() id!:string;
  @Input() name!:string;
  @Input() capacidad!:string;
  constructor(
    private service:ServiceFuncionesService
  ) { }

  ngOnInit(): void {
  }
  onSelectSala():void{
    this.service.setSala({'id':this.id,'name':this.name});
  }

}
