import { Component, Input, OnInit } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  @Input() enable!: any;
  @Input() isReserved!: any;
  @Input() id!: string;

  constructor(private service: ServiceFuncionesService) {}

  ngOnInit(): void {}

  onSelectBox() {
    if (this.enable == 'true') {
      this.enable = 'false';
      this.service.removeDisableBox(this.id);
    } else {
      this.enable = 'true';
      this.service.addDisableBox(this.id);
    }
  }
}
