import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { MiHttpService } from 'src/app/servicios/mi-http/mi-http.service';
import { JuegoAnagrama } from "../../clases/juego-anagrama";
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  lista:Array<any>;
  nuevoJuego : JuegoAnagrama;
  ocultarVerificar: boolean=true;
  Tiempo: number;
  Mensajes:string;
  foo;
  constructor(private httpservice:MiHttpService,private fireService:FirebaseService) {
      this.nuevoJuego=new JuegoAnagrama();
    this.httpservice.obtenerPaises("https://restcountries.eu/rest/v2/all").subscribe((paises: any) => {
      this.nuevoJuego.listaPalabras=paises;
    }, error => {
      console.log('Error');
    });
  }

  ngOnInit() {

  }

  verificar()
  {



    if (this.nuevoJuego.verificar()){

      this.MostarMensaje("Ganaste!",true);
      //this.login.retornaremail().then(val=> this.nuevoJuego.jugador= val.toString());
      this.fireService.putDatos({juego:this.nuevoJuego.nombre,jugador:this.nuevoJuego.jugador,gano:'Gano',cantidadIntentos:this.nuevoJuego.contador},this.nuevoJuego.nombre)
      this.ocultarVerificar=true;


    }else{
      switch(this.nuevoJuego.contador){
        case 1:
          this.MostarMensaje("Ayuda. el pais pertenece al continente: "+ this.nuevoJuego.palabra.region);
          break;
        case 2:
          this.MostarMensaje("Ayuda. La capital del pais es: "+ this.nuevoJuego.palabra.capital);

          break;
        case 3:
          this.fireService.putDatos({juego:this.nuevoJuego.nombre,jugador:this.nuevoJuego.jugador,gano:'Perdio',cantidadIntentos:this.nuevoJuego.contador},this.nuevoJuego.nombre);
          this.MostarMensaje("Perdiste. El pais buscado era: "+ this.nuevoJuego.palabra.name);
          this.ocultarVerificar=true;
          break;
      }


    }
    //setTimeout(document.getElementById("snackbar").className=" ",3000);
  }

  NuevoJuego() {
    this.nuevoJuego.nuevoJuego();
    this.Tiempo=10;
    this.ocultarVerificar=false;
    this.fireService.getUser().then(val=>this.nuevoJuego.jugador=val.toString());
    document.getElementById("snackbar").className= "   "
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


   }
}
