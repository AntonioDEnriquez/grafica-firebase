import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

const base_url = environment.url;


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private juegos: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominados() {
    const url = `${base_url}/api/goty`;

    if (this.juegos.length > 0) {
      // console.log('Desde cache');

      // no tenemos juegos
      // el of nos permite regresar cualquier cosa como un Observable
      return of(this.juegos);
    } else {
      return this.http.get<Game[]>(url)
        .pipe(
          tap(juegos => {
            // console.log('Desde net');

            this.juegos = juegos;
          })
        )
    }


    /** Diferiencia entre map y tap
     *la diferencia radica en lo que deseas hacer, si necesitas manipular los elementos en la transmisión lo mejor es map.
      Mientras que tap se usa para efectos secundarios dentro de una secuencia. Por lo tanto, este operador se puede utilizar 
      para hacer algo dentro de una secuencia y devolver el mismo observable en el que se utilizó. Ejecuta un método para emitir 
      un simple efecto secundario aislado. 
     *
     */

  }

  votarJuegos(id: string) {
    const url = `${base_url}/api/goty/${id}`;

    return this.http.post(url, {}).pipe(
      catchError(err => {
        const error = err.error.mensaje
        return of(error);
      })
    )
  }

}
