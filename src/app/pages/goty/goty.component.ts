import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    return this.gameService.getNominados().subscribe(juegos => {
      this.juegos = juegos;
    });
  }

  votarJuego(juego: Game) {
    return this.gameService.votarJuegos(juego.id).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire('Gracias', `${resp.mensaje}`, 'success');
      } else {
        Swal.fire('Error', `${resp}`, 'error');
      }
    });
  }

}
