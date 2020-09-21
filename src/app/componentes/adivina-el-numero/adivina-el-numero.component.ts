
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

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
  constructor() {
    this.nuevoJuego = new JuegoAdivina();
  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador=0;
  }
  verificar()
  {
    if(this.nuevoJuego.numeroIngresado!=null){
    this.contador++;
    this.ultimoNumero=this.nuevoJuego.numeroIngresado;
    console.info("numero Secreto:",this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()){

      this.MostarMensaje("Sos un Genio!!!",true);

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
    console.info("numero Secreto:",this.nuevoJuego.gano);
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
