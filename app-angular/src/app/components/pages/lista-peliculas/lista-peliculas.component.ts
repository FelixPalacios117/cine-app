import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/internal/operators/take';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css'],
})
export class ListaPeliculasComponent implements OnInit, OnDestroy {
  listPeliculas$ = this.funcionesService.listPeliculas$;

  constructor(
    private http: HttpClient,
    private funcionesService: ServiceFuncionesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.funcionesService.getListsPeliculas();
  }
  ngOnDestroy(): void {}

  onDeletePelicula(id: string): void {
    try {
      this.http
        .delete<any>(`http://localhost:9090/delete-movie/${id}`)
        .pipe(take(1))
        .subscribe((data) => {
          this.funcionesService.getListsPeliculas();
          console.log(data);
          this.toastr.success('Alerta', 'selimino', {
            closeButton: true,
            progressBar: true,
            timeOut: 1500,
          });
        },(error)=>{
          this.toastr.warning('Alerta', 'error al eliminar', {
            closeButton: true,
            progressBar: true,
            timeOut: 1500,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
}
