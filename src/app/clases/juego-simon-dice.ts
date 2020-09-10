import { Juego } from './juego';
import { VirtualTimeScheduler } from 'rxjs';

export class JuegoSimonDice extends  Juego {
  numeroSecreto: number []=[];
  numeroIngresado : number=0;
  contador:number=1;
  contadorJugada:number=0;
  vaganango:boolean=false;
  constructor(nombre?: string, gano?: boolean, jugador?:string) {
      super("Simon dice",gano,jugador);

    }

    public verificar(){
      if(this.numeroSecreto[this.contadorJugada]==this.numeroIngresado){
        this.contadorJugada++;
        return true;
      }
      else {
        return false;
      }

    }
    public newGame(){
      for(let i=this.contador-1;i>=0;i--){
        this.numeroSecreto[i]=Math.floor((Math.random() * 4) + 1);
      }
      this.contadorJugada=0;
      console.log(this.numeroSecreto);
    }
    public winGame(){
      if(this.contadorJugada==this.contador){
        return true;
      }
      else {
        return false;
      }
    }
  }
