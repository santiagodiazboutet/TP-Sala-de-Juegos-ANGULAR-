import { Component, OnInit, EventEmitter } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-jankenpon',
  templateUrl: './jankenpon.component.html',
  styleUrls: ['./jankenpon.component.css']
})
export class JankenponComponent implements OnInit {
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoPiedraPapelTijera;
  ocultarVerificar: boolean;
  Mensajes:string;
  Jugando:boolean;

  constructor() {
    this.nuevoJuego=new JuegoPiedraPapelTijera();
    this.Jugando=false;
   }

  ngOnInit() {
  }

  jugada(jugada:string){
    console.log(jugada);
    console.log(this.nuevoJuego.jugadaOponente);
    this.nuevoJuego.numeroIngresado=jugada;
    if(this.nuevoJuego.verificar()){
      this.MostarMensaje("Ha ganado. Pero podra hacerlo otra vez?",true);

    }else{
      this.MostarMensaje("Ha Perdido, Intentelo nuevamente",false);

    }
    this.Jugando=false;
  }
  nuevaPartida(){
    this.nuevoJuego.NewGame();
    this.Jugando=true;
  }
  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);

   }
}
