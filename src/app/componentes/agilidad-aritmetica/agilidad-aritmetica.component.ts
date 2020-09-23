import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { FirebaseService } from 'src/app/servicios/firebase.service';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output()
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  Mensajes:string;
  foo;
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor(private fireService:FirebaseService) {
     this.ocultarVerificar=true;
     this.nuevoJuego = new JuegoAgilidad("Agilidad Aritmetica");

  }
  NuevoJuego() {
    this.nuevoJuego.generarnumero();
    this.Tiempo=10;
    this.ocultarVerificar=false;
    this.fireService.getUser().then(val=>this.nuevoJuego.jugador=val.toString());
   this.repetidor = setInterval(()=>{

      this.Tiempo--;
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=10;
      }
      }, 900);
  }
  verificar()
  {

    this.ocultarVerificar=true;

    clearInterval(this.repetidor);

    if (this.nuevoJuego.verificar()){

      this.MostarMensaje("Ganaste!",true);
      //this.login.retornaremail().then(val=> this.nuevoJuego.jugador= val.toString());


    }else{

      this.MostarMensaje("Perdiste. El numero buscado era: "+ this.nuevoJuego.resultado.toString());

    }
    this.fireService.putDatos({juego:this.nuevoJuego.nombre,jugador:this.nuevoJuego.jugador,gano:this.nuevoJuego.gano? 'Gano' : 'Perdio'},this.nuevoJuego.nombre)
    //setTimeout(document.getElementById("snackbar").className=" ",3000);
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
     }, 3000);

   }

}
