import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxModule } from '@app/components/others/box/box.module';
import { ServiceFuncionesService } from '@app/shared/services/service-funciones.service';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sala-layout',
  templateUrl: './sala-layout.component.html',
  styleUrls: ['./sala-layout.component.css'],
})
export class SalaLayoutComponent implements OnInit {
  data!: any;
  boxlist$ = this.service.listaBox$;

  constructor(
    private router: Router,
    private toastr:ToastrService,
    private service: ServiceFuncionesService,
    private http: HttpClient
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state;
    this.service.buildGrid(this.data.row, this.data.column, this.data.disable,'');
  }

  ngOnInit(): void {}
  onSave(): void { 
    try {
      this.http
        .put<any>('http://localhost:9090/update-sillas/'+this.data.id, {
          disable: this.service.getDisableBox(),
        })
        .pipe(
          take(1),
          tap(
            (data) => { 
              this.toastr.success('Alerta', 'Se modifico', {
                closeButton: true,
                progressBar: true,
                timeOut: 1500,
              });
              this.router.navigate(['/listasalas']);
            },
            (error) => {
              console.log(error);
            }
          )
        )
        .subscribe();
    } catch (error) {
      console.log(error);
    }
    console.log(this.service.getDisableBox());
  }
}
