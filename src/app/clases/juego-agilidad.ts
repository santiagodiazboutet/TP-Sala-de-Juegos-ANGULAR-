import { Juego } from './juego';

export class JuegoAgilidad extends Juego{
    numeroSecreto1: number=0;
    numeroSecreto2: number=0;
    operadorSecreto:string="+";
    resultado:number=0;
    numeroIngresado = 0;
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Agilidad aritmetica",gano,jugador);
        
    
      
      }
    public verificar() {
        if (this.numeroIngresado == this.resultado) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
     public generarnumero() {
        this.numeroSecreto1 = Math.floor((Math.random() * 100) + 1);
        do{
        this.numeroSecreto2 = Math.floor((Math.random() * 100) + 1);
        }while(this.numeroSecreto1<this.numeroSecreto2);
        switch(Math.floor((Math.random() * 4) + 1)){
            case 1:
                this.operadorSecreto="+";
                this.resultado=this.numeroSecreto1+this.numeroSecreto2;
                break;
            case 2:
                this.operadorSecreto="-";
                this.resultado=this.numeroSecreto1-this.numeroSecreto2;
                break;
            case 3:
                this.operadorSecreto="*";
                this.resultado=this.numeroSecreto1*this.numeroSecreto2;
                break;
            case 4:
                this.operadorSecreto="/";                
                this.resultado=this.numeroSecreto1/this.numeroSecreto2;
                break;
        };
        console.info('numero Secreto:' + this.numeroSecreto1+'numero Secreto2:' + this.numeroSecreto2
        +this.operadorSecreto+this.resultado);
        this.gano = false;
      }
      public retornarAyuda() {
        if (this.numeroIngresado != this.resultado) {
          return "Le erraste al numero";
        }
        
      }
}