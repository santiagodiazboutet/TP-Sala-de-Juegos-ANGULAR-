import { Juego } from './juego';

export class JuegoMemotest extends Juego{
  cuadrados: Unidad[];
  cantidadAcertadas:number=0;
  cantidadjugadas:number=0;
  cantidadJugadaActual:number=0;
  jugadaActual:number[];
  constructor(nombre?: string, gano?: boolean, jugador?:string) {
    super("Memotest",gano,jugador);
  }
  nuevoJuego() {
    this.cuadrados=Array(16).fill(null);
    console.log(this.cuadrados);
    this.jugadaActual=Array(2).fill(17);
    console.log(this.cuadrados);
    this.cantidadJugadaActual=0;
    this.cantidadjugadas=0;
    this.elegirImagenes();
    this.gano=false;
    this.cantidadAcertadas=0;
  }

  elegirImagenes(){
    let j=0;
    let imagenestomadas:number[];
    for(let i =0;i<8;i++){
      let Par:number;
      do{
        j=Math.round(Math.random()*(15-0))
      }while(this.cuadrados[j]);
      this.cuadrados[j]={imagen:"./assets/JPEG/" + (i+1).toString()+".jpg",par:18,seleccionada:false};
      do{
        Par=Math.round(Math.random()*(15-0))
      }while(this.cuadrados[Par]);
      this.cuadrados[Par]={imagen:"./assets/JPEG/" + (i+1).toString()+".jpg",par:j,seleccionada:false};

      this.cuadrados[j].par=Par;
    }

  }

  verificar(){
    if(this.cantidadAcertadas==8){
      return true;
    }
    return false;
  }

  jugada(index:number){


    if(!this.cuadrados[index].seleccionada){
    console.log(this.jugadaActual);
    if(this.jugadaActual[0]!=index&&this.jugadaActual[1]!=index){
      if(this.cantidadJugadaActual==2){
        if(this.cuadrados[this.jugadaActual[0]].imagen!=this.cuadrados[this.jugadaActual[1]].imagen)
        {
          this.cuadrados[this.jugadaActual[0]].seleccionada=false;
          this.cuadrados[this.jugadaActual[1]].seleccionada=false;
        }else{
          this.cantidadAcertadas++;
        }

        this.jugadaActual[0]=17;
        this.jugadaActual[1]=17;
        this.cuadrados[index].seleccionada=true;

        this.cantidadJugadaActual=1;
        this.jugadaActual[0]=index;

      }else{
        this.cuadrados[index].seleccionada=true;
        this.jugadaActual[this.cantidadJugadaActual]=index;
        this.cantidadJugadaActual++;

        if(this.cantidadAcertadas==7){
          this.cantidadAcertadas++;
        }
      }
    }
    console.log(this.cantidadAcertadas);
    this.cantidadjugadas++;
    this.gano=this.verificar();
    }
  }



}
export class Unidad{
    imagen:string;
    par:number;
    seleccionada:boolean=false;
}
