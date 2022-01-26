import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { pluck, take, tap, withLatestFrom } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceFuncionesService {
  private listFuncionesSubject = new BehaviorSubject<any[]>([]);
  listFunciones$ = this.listFuncionesSubject.asObservable();

  private listPeliculaSubject = new BehaviorSubject<any[]>([]);
  listPeliculas$ = this.listPeliculaSubject.asObservable();

  constructor(private http: HttpClient) {}

  getListsFunciones(): void {
    try {
      this.http
        .get<any>('http://localhost:9090/list-funcion')
        .pipe(take(1))
        .subscribe((data) => {
          console.log('from service',data);
          this.listFuncionesSubject.next(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  getListsPeliculas(): void {
    try {
      this.http
        .get<any>('http://localhost:9090/list-movie')
        .pipe(take(1))
        .subscribe((data) => {
          console.log('from service',data);
          this.listPeliculaSubject.next(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  addNewPelicula(data:FormData): void {
    try {
      console.log(data);
      this.http
        .get<any>('http://localhost:9090/list-movie')
        .pipe(take(1))
        .subscribe((data) => {
          console.log('from service',data);
          this.listPeliculaSubject.next(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
