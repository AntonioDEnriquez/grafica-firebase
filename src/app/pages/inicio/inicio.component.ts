import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor(public db: AngularFirestore) {
    // const coleccion = collection(this.firestore, 'goty');
    // console.log(coleccion);

    // this.item = collectionData(coleccion);
    // console.log(this.item);
  }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
      .pipe(
        // Permite transformar lo que recivo en otra cosa
        map((resp: any[]) => {
          // El operador map va a recibir la respuesta, la respuesta va a regresar un nuevo arreglo 
          // y cada uno de los valores del arreglo los paso por la funcion que extrae el nombre y los votos y regreso un nuevo objeto que tiene el name y el value igual a los votos 
          return resp.map(({ name, votos }) => ({ name, value: votos }))
          // Es lo mismo que lo de arriba
          // return resp.map(juego => {
          //   return {
          //     name: juego.name,
          //     value: juego.votos
          //   }
          // })
        })
      )
      .subscribe(juegos => {
        // console.log(juegos);
        this.juegos = juegos;
      });

  }

}
