import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { pluck, take, tap, withLatestFrom } from 'rxjs/operators';
import { SalaSelected, PeliculaSelected } from '../data.interface';
import { io } from 'socket.io-client';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceFuncionesService {
  letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private boxDisables!: string;
  private boxBougth: string = '';
  socket!: any;

  private subtoalSubject = new BehaviorSubject<number>(0);
  subtoal$ = this.subtoalSubject.asObservable();

  private peliculaSelectedSubject = new BehaviorSubject<PeliculaSelected>({
    id: '',
    name: '',
  });
  peliculaSelected$ = this.peliculaSelectedSubject.asObservable();

  private salaSelectedSubject = new BehaviorSubject<SalaSelected>({
    id: '',
    name: '',
  });
  salaSelected$ = this.salaSelectedSubject.asObservable();

  private listFuncionesSubject = new BehaviorSubject<any[]>([]);
  listFunciones$ = this.listFuncionesSubject.asObservable();

  private listBoxSubject = new BehaviorSubject<any[]>([]);
  listaBox$ = this.listBoxSubject.asObservable();

  private listPeliculaSubject = new BehaviorSubject<any[]>([]);
  listPeliculas$ = this.listPeliculaSubject.asObservable();

  private listSalaSubject = new BehaviorSubject<any[]>([]);
  listSalas$ = this.listSalaSubject.asObservable();
  constructor(private http: HttpClient) {}

  setUpSocket(idFuncion: string): void {
    this.socket = io('http://localhost:9090', {
      query: { funcion: idFuncion },
    });
    this.socket.on('onSelected', (data: any) => {
      this.onUpdatebuildGrid(data.row, data.column, data.disable,data.comprados,data.newCompra);
      console.log(' on onSelected', data);
    });
  }

  onCompra(body: any): void {
    const compra = {
      row: body.row,
      column: body.column,
      disable: body.disable,
      comprados: body.comprados,
      newCompra:this.boxBougth,
    };
     console.log(' emit onSelected', compra);
    this.socket.emit('onSelected', compra);
  }

  onUpdatebuildGrid(
    row: number,
    column: number,
    disable: string,
    comprados: string,
    newCompra: string
  ): void {
    this.boxDisables = disable;
    let gridy = this.listBoxSubject.getValue();
    if (disable) {
      disable.split(',').forEach((item) => {
        if (item.length === 3) {
          gridy[this.letters.indexOf(item[0])][item[1] + item[2]] = {
            id: item[0] + item[1] + item[2],
            enable: true,
            isReserved: false,
          };
        } else {
          gridy[this.letters.indexOf(item[0])][item[1]] = {
            id: item[0] + item[1],
            enable: true,
            isReserved: false,
          };
        }
      });
    }
    if (comprados != '') {
      comprados.split(',').forEach((item) => {
        if (item.length === 3) {
          gridy[this.letters.indexOf(item[0])][item[1] + item[2]] = {
            id: item[0] + item[1] + item[2],
            enable: false,
            isReserved: true,
          };
        } else {
          gridy[this.letters.indexOf(item[0])][item[1]] = {
            id: item[0] + item[1],
            enable: false,
            isReserved: true,
          };
        }
      });
    }
    if (newCompra != '') {
      newCompra.split(',').forEach((item) => {
        if (item.length === 3) {
          gridy[this.letters.indexOf(item[0])][item[1] + item[2]] = {
            id: item[0] + item[1] + item[2],
            enable: false,
            isReserved: true,
          };
        } else {
          gridy[this.letters.indexOf(item[0])][item[1]] = {
            id: item[0] + item[1],
            enable: false,
            isReserved: true,
          };
        }
      });
    }
    this.listBoxSubject.next(gridy);
  }

  setPelicula(pelicula: any): void {
    this.peliculaSelectedSubject.next(pelicula);
  }

  setSala(sala: SalaSelected): void {
    this.salaSelectedSubject.next(sala);
  }

  addSubtotal(n: number): void {
    this.subtoalSubject.next(this.subtoalSubject.getValue() + n);
  }
  getListsFunciones(): void {
    try {
      //this.listFuncionesSubject.next([]);
      this.http
        .get<any>('http://localhost:9090/list-funcion')
        .pipe(take(1))
        .subscribe((data) => {
          console.log(data);
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
          console.log(data);
          this.listPeliculaSubject.next(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  getListsSalas(): void {
    try {
      this.http
        .get<any>('http://localhost:9090/list-sala')
        .pipe(take(1))
        .subscribe((data) => {
          this.listSalaSubject.next(data);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  getDisableBox(): string {
    return this.boxDisables;
  }

  addDisableBox(box: string): void {
    if (this.boxDisables.length > 0) {
      this.boxDisables += ',' + box;
      console.log(this.boxDisables);
    } else {
      this.boxDisables = box;
    }
  }

  removeDisableBox(box: string): void {
    this.boxDisables = this.boxDisables
      .split(',')
      .filter((item) => item !== box)
      .toString();
    console.log(this.boxDisables);
  }

  getBougthBox(): string {
    return this.boxBougth;
  }

  getSubTotal(): number {
    return this.subtoalSubject.getValue();
  }

  addBougthBox(box: string): void {
    if (this.boxBougth.length > 0) {
      this.boxBougth += ',' + box;
    } else {
      this.boxBougth = box;
    }
    console.log(this.boxBougth);
  }

  removeBougthBox(box: string): void {
    this.boxBougth = this.boxBougth
      .split(',')
      .filter((item) => item !== box)
      .toString();
  }

  buildGrid(
    row: number,
    column: number,
    disable: string,
    comprados: string
  ): void {
    this.boxDisables = disable;
    console.log(disable);
    let gridx = [];
    let gridy: any[] = [];
    console.log(row, column);
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        gridx.push({
          id: this.letters[i] + j,
          enable: false,
          isReserved: false,
        });
      }
      gridy.push(gridx);
      gridx = [];
    }
    if (disable) {
      disable.split(',').forEach((item) => {
        if (item.length === 3) {
          gridy[this.letters.indexOf(item[0])][item[1] + item[2]] = {
            id: item[0] + item[1] + item[2],
            enable: true,
            isReserved: false,
          };
        } else {
          gridy[this.letters.indexOf(item[0])][item[1]] = {
            id: item[0] + item[1],
            enable: true,
            isReserved: false,
          };
        }
      });
    }
    if (comprados != '') {
      comprados.split(',').forEach((item) => {
        if (item.length === 3) {
          gridy[this.letters.indexOf(item[0])][item[1] + item[2]] = {
            id: item[0] + item[1] + item[2],
            enable: false,
            isReserved: true,
          };
        } else {
          gridy[this.letters.indexOf(item[0])][item[1]] = {
            id: item[0] + item[1],
            enable: false,
            isReserved: true,
          };
        }
      });
    }
    this.listBoxSubject.next(gridy);
  }
}
