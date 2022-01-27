import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationEnd } from '@angular/router';
import { data } from 'autoprefixer';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css'],
})
export class AgregarPeliculaComponent implements OnInit {
  agregarPeliculaFM = new FormGroup({
    file: new FormControl(),
    fileSource:new FormControl(),
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    clasificacion: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    director: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    duracion: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private router :Router,
    private toastr:ToastrService,
    private serviceFunciones: ServiceFuncionesService,
    private http: HttpClient
    ) {}

  ngOnInit(): void {}
  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.agregarPeliculaFM.patchValue({
        fileSource: file
      });
    }
  }
   onSendForm():void {
    try {
      if (this.agregarPeliculaFM.valid) {
        let formData:FormData = new FormData();
        formData.append('name',this.agregarPeliculaFM.controls.nombre.value) 
        formData.append('image', this.agregarPeliculaFM.controls.fileSource.value);
        formData.append('duration', this.agregarPeliculaFM.controls.duracion.value);
        formData.append('director', this.agregarPeliculaFM.controls.director.value);
        formData.append('classification', this.agregarPeliculaFM.controls.clasificacion.value); 
         this.http
            .post<any>('http://localhost:9090/new-movie',formData)
            .pipe(take(1))
            .subscribe(response => {
              console.log('from service',response);
              this.toastr.success('Alerta', 'Se agrego', {
                closeButton: true,
                progressBar: true,
                timeOut: 1500,
              });
              this.router.navigate(['/listapeliculas'])
            },error =>{
              console.log(error);
            });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
