import { Component, OnInit,Input } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';

@Component({
  selector: 'app-box-b',
  templateUrl: './box-b.component.html',
  styleUrls: ['./box-b.component.css']
})
export class BoxBComponent implements OnInit {

  @Input() enable!: any;
  @Input() isReserved!: any;
  boxSelected:boolean=false;
  @Input() id!: string;

  constructor(private service: ServiceFuncionesService) { }

  ngOnInit(): void {
  }
  onSelectBox() {
    if (this.boxSelected == true) {
      this.boxSelected = false;
      this.service.removeBougthBox(this.id);
      this.service.addSubtotal(-4.5);
    } else {
      this.boxSelected = true;
      this.service.addBougthBox(this.id);
      this.service.addSubtotal(4.5);
    }
  }
}
