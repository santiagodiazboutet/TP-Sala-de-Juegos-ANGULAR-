import { Juego } from './juego';

export class JuegoTaTeTi extends Juego {
  cuadrados: string[];
  leTocaAX: boolean;
  ganador: string;

  constructor(nombre?: string, gano?: boolean, jugador?:string) {
    super("Piedra Papel Tijera",gano,jugador);
  }

  public verificar(){
      return null;

  }
  calcularGanador() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let empate=true;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.cuadrados[a] &&
        this.cuadrados[a] === this.cuadrados[b] &&
        this.cuadrados[a] === this.cuadrados[c]
      ) {
        return this.cuadrados[a];
      }
    }
    for(let i =0;i<=8;i++){
      if(!this.cuadrados[i]){
        empate=false;
        break;
      }
    }
    if(empate==true){
      return 'empate';
    }
    return null;
  }
  nuevoJuego() {
    this.cuadrados = Array(9).fill(null);
    this.ganador = null;
    this.leTocaAX = true;
  }

  jugada(index){
    if (!this.cuadrados[index] && !this.ganador) {
      let xoy;
      if(this.leTocaAX){
        xoy='X';
      }else{
        xoy='O';
      }
      this.cuadrados.splice(index, 1,xoy);
      this.leTocaAX = !this.leTocaAX;
    }

    this.ganador = this.calcularGanador();
    if(!this.leTocaAX&&!this.ganador){
      let numerorandom:number;
      do{
      numerorandom=Math.round(Math.random()*(8-0))}
      while(this.cuadrados[numerorandom])
      console.log(numerorandom);
      this.jugada(numerorandom);
    }
  }


}
