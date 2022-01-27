import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { data } from 'autoprefixer';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {

  private idPelicula!:string;
  
  editarPeliculaFM = new FormGroup({
    file: new FormControl(),
    fileSource: new FormControl(),
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
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editarPeliculaFM.patchValue({
        fileSource: file,
      });
    }
  }
  ngOnInit(): void {
    try {
      this.route.params.pipe(
        take(1),
        tap(({ id }) => {
          this.idPelicula=id;
          console.log('idPelicula',this.idPelicula)
          this.http
            .get<any>(`http://localhost:9090/get-movie/${id}`)
            .pipe(
              take(1),
              tap((data) => {
               this.editarPeliculaFM.controls.nombre.setValue(data.name);
               this.editarPeliculaFM.controls.clasificacion.setValue(data.classification);
               this.editarPeliculaFM.controls.director.setValue(data.director);
               this.editarPeliculaFM.controls.duracion.setValue(data.duration);
              })
            )
            .subscribe();
        })
      ).subscribe();
    } catch (error) {}
  }

  onSendForm():void {
    try {
      if (this.editarPeliculaFM.valid) {
        let formData:FormData = new FormData();
        formData.append('name',this.editarPeliculaFM.controls.nombre.value) 
        formData.append('image', this.editarPeliculaFM.controls.fileSource.value);
        formData.append('duration', this.editarPeliculaFM.controls.duracion.value);
        formData.append('director', this.editarPeliculaFM.controls.director.value);
        formData.append('classification', this.editarPeliculaFM.controls.clasificacion.value); 
         this.http
            .put<any>('http://localhost:9090/update-movie/'+this.idPelicula,formData)
            .pipe(take(1))
            .subscribe(response => {
              this.toastr.success('Alerta', response, {
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
