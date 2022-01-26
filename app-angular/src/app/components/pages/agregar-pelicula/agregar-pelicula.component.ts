import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent implements OnInit {

  agregarPeliculaFM = new FormGroup({
    'file':new FormControl(),
    'nombre':new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    'clasificacion':new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    'director':new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    'duracion':new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ])
  })

  constructor(
    private serviceFunciones:ServiceFuncionesService,
  ) { }

  ngOnInit(): void {
  }

  onSendForm():void{
    try {
      console.log(this.agregarPeliculaFM)
      if(this.agregarPeliculaFM.valid){
        const formData=new FormData()
        formData.append('name',this.agregarPeliculaFM.value.nombre)
        formData.append('image',this.agregarPeliculaFM.value.file[0])
        formData.append('duration',this.agregarPeliculaFM.value.duracion)
        formData.append('classification',this.agregarPeliculaFM.value.clasificacion)
        formData.append('director',this.agregarPeliculaFM.value.director)
        console.log('formData',formData);
      }

    } catch (error) {
      console.log(error);
    }
   
  }
}
