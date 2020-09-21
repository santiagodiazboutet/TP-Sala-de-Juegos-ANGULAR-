import { Component, OnInit } from '@angular/core';
import {JuegoMemotest} from '../../clases/juego-memotest'
@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
  juego:JuegoMemotest;
  constructor() {
    this.juego=new JuegoMemotest();
  }

  ngOnInit() {
    this.juego.nuevoJuego();
  }




  hacerMovimiento(idx: number) {
    this.juego.jugada(idx);
  }

  newGame(){
    this.juego.nuevoJuego();
  }
}
