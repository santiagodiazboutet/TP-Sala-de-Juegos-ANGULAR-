import { Juego } from './juego';

export class JuegoPiedraPapelTijera extends  Juego {
    jugadaOponente: string = "";
    numeroIngresado:string = "";
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Piedra Papel Tijera",gano,jugador);
      }
    public verificar() {
      console.log("entro paca");


      switch(this.jugadaOponente){
        case 'piedra':
          if(this.numeroIngresado=='papel'){
                this.gano=true;
            }
            break;
        case 'papel':
          if(this.numeroIngresado=='tijera'){
            this.gano=true;
            }
            break;
        case 'tijera':
          if(this.numeroIngresado=='piedra'){
            this.gano=true;
            }
            break;
      }

        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
     public verificarEmpate() {
      console.log("entro paca");

      if(this.numeroIngresado==this.jugadaOponente){
        return true;
      }
      return false;

     }
     public NewGame(){
        switch(Math.floor((Math.random() * 3) + 1)){
            case 1:
                this.jugadaOponente="tijera";
                break;
            case 2:
                this.jugadaOponente="piedra";
                break;
            case 3:
                this.jugadaOponente="papel";
                break;
        }
        this.gano=false;
      }
}
