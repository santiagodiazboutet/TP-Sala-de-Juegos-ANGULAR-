import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import {JuegoTaTeTi} from '../../../clases/juego-ta-te-ti'
@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  juego:JuegoTaTeTi;
  jugando:boolean=false;
  constructor(private fireService:FirebaseService) {
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
    if(this.juego.ganador){
    this.fireService.putDatos({juego:this.juego.nombre,jugador:this.juego.jugador,gano:this.juego.ganador},this.juego.nombre);
    }
  }

  newGame(){
    this.juego.nuevoJuego();
    this.fireService.getUser().then(val=>this.juego.jugador=val.toString());
    this.jugando=true;
  }
}
