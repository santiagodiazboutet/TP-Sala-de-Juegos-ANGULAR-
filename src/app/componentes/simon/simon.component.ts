import { Component, OnInit, EventEmitter } from '@angular/core';
import { JuegoSimonDice } from '../../clases/juego-simon-dice';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})
export class SimonComponent implements OnInit {
  nuevoJuego:JuegoSimonDice;
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  ocultarVerificar: boolean;
  Mensajes:string;
  Jugando:boolean;
  repetidor:any;
  audio:string="../../../assets/Sonidos/beep1.wav";
  constructor() {
    this.nuevoJuego=new JuegoSimonDice();
   }

  ngOnInit() {
  }
  nuevaPartida(){
    this.Jugando=true;
    this.nuevoJuego.newGame();
    this.animate();
  }
  jugada(jugada:number){
    this.nuevoJuego.numeroIngresado=jugada;
    if(this.nuevoJuego.verificar()){
      (<HTMLMediaElement>(document.getElementsByClassName('sound')[jugada-1])).play();
      if (this.nuevoJuego.winGame()){
        this.MostarMensaje("Ha ganao",true);
        setTimeout(function() {

          (<HTMLMediaElement>(document.getElementsByClassName('sound')[5])).play();

      }, 500);
      this.Jugando=false;

      }

    }
    else{

      (<HTMLMediaElement>(document.getElementsByClassName('sound')[4])).play();
      this.MostarMensaje("Ha Perdio",false);
      this.Jugando=false;
    }

  }



  animate() {
    let Tiempo:number=0;

      console.log("llego", Tiempo);
    this.repetidor = setInterval(()=>{
      console.log(this.nuevoJuego.numeroSecreto[Tiempo]);
      document.getElementById('a').style.borderColor="";
      document.getElementById('b').style.borderColor="";
      document.getElementById('c').style.borderColor="";
      document.getElementById('d').style.borderColor="";
      if(Tiempo!=this.nuevoJuego.contador){
        switch(this.nuevoJuego.numeroSecreto[Tiempo]){
          case 1:
            document.getElementById('a').style.borderColor="#1aff00";
            (<HTMLMediaElement>(document.getElementsByClassName('sound')[0])).play();
            break;
          case 2:
              document.getElementById('b').style.borderColor="#ff0b00";
              (<HTMLMediaElement>(document.getElementsByClassName('sound')[1])).play();
            break;
          case 4:
              document.getElementById('d').style.borderColor="#29abd0";
              (<HTMLMediaElement>(document.getElementsByClassName('sound')[3])).play();
            break;
          case 3:
              document.getElementById('c').style.borderColor="#ffec00";
              (<HTMLMediaElement>(document.getElementsByClassName('sound')[2])).play();

            break;
        }
      }
      Tiempo++;
      if(Tiempo>this.nuevoJuego.contador ) {

      clearInterval(this.repetidor);
    }
    }, 1000);




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
