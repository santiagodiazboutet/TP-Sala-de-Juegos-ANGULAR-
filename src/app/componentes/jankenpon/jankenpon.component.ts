import { Component, OnInit, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
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
  resultado:String;
  time=new Date();
  constructor(private fireService:FirebaseService) {
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
      this.resultado="Gano";
    }else if(this.nuevoJuego.jugadaOponente==jugada){
      this.MostarMensaje("Ha Empatadp contra "+this.nuevoJuego.jugadaOponente +", Intentelo nuevamente",false);
      this.resultado="Empato";
    }else{
      this.MostarMensaje("Ha Perdido contra "+this.nuevoJuego.jugadaOponente +", Intentelo nuevamente",false);
      this.resultado="Perdio";
    }
    console.log(this.nuevoJuego.jugador);
    console.log(this.nuevoJuego.nombre);
    this.fireService.putDatos({juego:this.nuevoJuego.nombre,jugador:this.nuevoJuego.jugador,gano:this.resultado,date:this.time.getTime()},this.nuevoJuego.nombre)
    this.Jugando=false;
  }
  nuevaPartida(){
    this.nuevoJuego.NewGame();
    this.Jugando=true;
    this.fireService.getUser().then(val=>this.nuevoJuego.jugador=val.toString());
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
