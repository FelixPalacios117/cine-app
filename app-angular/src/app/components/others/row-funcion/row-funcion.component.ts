import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-funcion',
  templateUrl: './row-funcion.component.html',
  styleUrls: ['./row-funcion.component.css']
})
export class RowFuncionComponent implements OnInit {

  @Input() image!:string;
  @Input() sala!:string;
  @Input() pelicula!:string;
  @Input() duracion!:string;
  @Input() clasificacion!:string;
  @Input() director!:string;
  @Input() hora!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
