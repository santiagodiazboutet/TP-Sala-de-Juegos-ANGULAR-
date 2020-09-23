import { Juego } from '../clases/juego'

export class JuegoAdivina extends  Juego {
    numeroSecreto: number = 0;
    numeroIngresado = null;
    jugando=false;
    cantidadJugadas=0;
    constructor(jugador?:string) {
        super("Adivina el número",false,jugador);
      }

    public verificar() {
      if(this.numeroIngresado!=null){
        this.cantidadJugadas++;
        if (this.numeroIngresado == this.numeroSecreto) {
          this.gano = true;
        }
        this.numeroIngresado=null;
        if (this.gano) {
          return true;
        } else {
          return false;
        }
      }
     }
     public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        this.cantidadJugadas=0;
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
        this.jugando=true;
      }
      public retornarAyuda(numero) {
        if (numero < this.numeroSecreto) {
          return "Falta";
        }
        return "Te pasate";
      }
}
