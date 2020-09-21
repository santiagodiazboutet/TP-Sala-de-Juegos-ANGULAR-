import { Component, OnInit } from '@angular/core';
import {JuegoTaTeTi} from '../../../clases/juego-ta-te-ti'
@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  juego:JuegoTaTeTi;
  constructor() {
    this.juego=new JuegoTaTeTi();
  }

  ngOnInit() {
    this.juego.nuevoJuego();
  }



  get player() {
    return this.juego.leTocaAX ? 'X' : 'O';
  }

  hacerMovimiento(idx: number) {
    this.juego.jugada(idx);
  }

  newGame(){
    this.juego.nuevoJuego();
  }
}
