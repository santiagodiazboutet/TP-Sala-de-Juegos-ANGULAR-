import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import {JuegoMemotest} from '../../clases/juego-memotest'
@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
  juego:JuegoMemotest;
  jugando:boolean=false;
  constructor(private fireService:FirebaseService) {
    this.juego=new JuegoMemotest();
  }

  ngOnInit() {
    this.juego.nuevoJuego();

  }



  hacerMovimiento(idx: number) {
    this.juego.jugada(idx);
    if(this.juego.gano){
      let val ={juego:this.juego.nombre,jugador:this.juego.jugador,gano:this.juego.gano? "Gano" : "Perdio"};
      console.info(val);
    this.fireService.putDatos({juego:this.juego.nombre,jugador:this.juego.jugador,gano:this.juego.gano? "Gano" : "Perdio", cantidadMovimientos:this.juego.cantidadjugadas},this.juego.nombre);
    }
  }

  newGame(){
    this.juego.nuevoJuego();
    this.jugando=true;
    this.fireService.getUser().then(val=>this.juego.jugador=val.toString());

  }
}

