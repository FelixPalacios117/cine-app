import { Component, OnInit } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
import { SalaSelected } from '@app/shared/data.interface';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-agregar-funcion',
  templateUrl: './agregar-funcion.component.html',
  styleUrls: ['./agregar-funcion.component.css'],
})
export class AgregarFuncionComponent implements OnInit {

  public fecha!: Date;
  peliculas$ = this.service.listPeliculas$;
  salas$ = this.service.listSalas$;
  operationEdit:boolean=false;
  private idEditFuntion!:string
  peliculaSelected$ = this.service.peliculaSelected$;
  salaSelected$ = this.service.salaSelected$;

  form = new FormGroup({
    fecha: new FormControl('', [Validators.required]),
  });

  constructor(
    private service: ServiceFuncionesService,
    private http: HttpClient,
    private router: Router,
    private toastr:ToastrService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras?.state?.operation=='editFuntion'){
      
      this.operationEdit=true;
      this.idEditFuntion=navigation?.extras?.state?.id;
      const pelicula = {
        'id':navigation?.extras?.state?.idPelicula,
        'name':navigation?.extras?.state?.nombrePelicula,
      }
      const sala = {
        'id':navigation?.extras?.state?.idSala,
        'name':navigation?.extras?.state?.nombreSala,
      }
      this.service.setSala(sala);
      this.service.setPelicula(pelicula)
      this.fecha= navigation?.extras?.state?.fecha
    }
    this.service.getListsPeliculas();
    this.service.getListsSalas();
  }

  ngOnInit(): void {}

  onSaveFuncion(): void {
    try {
      if (typeof this.fecha != 'undefined') {
        this.peliculaSelected$.pipe(take(1)).subscribe((pelicula) => {
          if (pelicula.id !== '') {
            this.salaSelected$.pipe(take(1)).subscribe((sala) => {
              if (sala.id !== '') {
                const funcion = {
                  idPelicula: pelicula.id,
                  idSala: sala.id,
                  horario: this.fecha,
                };
                this.http
                  .post<any>('http://localhost:9090/new-funcion', funcion)
                  .pipe(take(1))
                  .subscribe((data) => {
                    this.service.setPelicula({id:'',name:''})
                    this.service.setSala({id:'',name:''})
                    this.router.navigate(['/listafunciones']);
                    this.toastr.success('Alerta', 'Se agrego', {
                      closeButton: true,
                      progressBar: true,
                      timeOut: 1500,
                    });
                    console.log(data);
                  });
              }else{
                this.toastr.error('Alerta', 'Selecciona una sala', {
                  closeButton: true,
                  progressBar: true,
                  timeOut: 1500,
                }); 
              }
            });
          }else{
            this.toastr.error('Alerta', 'Selecciona una pelicula', {
              closeButton: true,
              progressBar: true,
              timeOut: 1500,
            }); 
          }
        });
      }else{
        this.toastr.error('Alerta', 'Selecciona una fecha', {
          closeButton: true,
          progressBar: true,
          timeOut: 1500,
        }); 
      }
    } catch (error) {
      console.log(error);
    }
  }

  onEditFuncion(): void {
    try {
      if (typeof this.fecha != 'undefined') {
        this.peliculaSelected$.pipe(take(1)).subscribe((pelicula) => {
          if (pelicula.id !== '') {
            this.salaSelected$.pipe(take(1)).subscribe((sala) => {
              if (sala.id !== '') {
                const funcion = {
                  idPelicula: pelicula.id,
                  idSala: sala.id,
                  horario: this.fecha,
                };
                this.http
                  .put<any>('http://localhost:9090/update-funcion/'+this.idEditFuntion, funcion)
                  .pipe(take(1))
                  .subscribe((data) => {
                    this.service.setPelicula({id:'',name:''})
                    this.service.setSala({id:'',name:''})
                    this.router.navigate(['/listafunciones']);
                    this.toastr.success('Alerta', 'Se edito', {
                      closeButton: true,
                      progressBar: true,
                      timeOut: 1500,
                    });
                    console.log(data);
                  });
              }else{
                this.toastr.error('Alerta', 'Selecciona una sala', {
                  closeButton: true,
                  progressBar: true,
                  timeOut: 1500,
                }); 
              }
            });
          }else{
            this.toastr.error('Alerta', 'Selecciona una pelicula', {
              closeButton: true,
              progressBar: true,
              timeOut: 1500,
            }); 
          }
        });
      }else{
        this.toastr.error('Alerta', 'Selecciona una fecha', {
          closeButton: true,
          progressBar: true,
          timeOut: 1500,
        }); 
      }
    } catch (error) {
      console.log(error);
    }
  }
}
