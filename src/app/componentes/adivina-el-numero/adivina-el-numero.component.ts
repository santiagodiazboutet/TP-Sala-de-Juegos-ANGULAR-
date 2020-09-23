
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { JuegoAdivina } from '../../clases/juego-adivina'
import { LoginService } from "src/app/servicios/firebase/login.service";
@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ultimoNumero:number=0;
   foo;
  constructor(private fireService:FirebaseService) {
    this.nuevoJuego = new JuegoAdivina(this.foo);

  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador=0;
    this.fireService.getUser().then(val=> this.nuevoJuego.jugador= val.toString());
   }
  verificar()
  {
    if(this.nuevoJuego.numeroIngresado!=null){
    this.contador++;
    this.ultimoNumero=this.nuevoJuego.numeroIngresado;
    console.info("numero Secreto:",this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()){

      this.MostarMensaje("Sos un Genio!!!",true);
      //this.login.retornaremail().then(val=> this.nuevoJuego.jugador= val.toString());
      console.log(this.nuevoJuego.jugador);
      this.fireService.putDatos({juego:this.nuevoJuego.nombre,jugador:this.nuevoJuego.jugador,cantidadMovimientos:this.nuevoJuego.cantidadJugadas},this.nuevoJuego.nombre)

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo.";
          break;
          case 2:
          mensaje="No.¿¿¿Te estaras Acercando???";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          mensaje="No era el  "+this.ultimoNumero+".";
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="Afortunado en el amor";
          break;

        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje(mensaje+" Ayuda :"+this.nuevoJuego.retornarAyuda(this.ultimoNumero));


    }
  }
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

    console.info("objeto",x);

   }
  ngOnInit() {


  }

}
