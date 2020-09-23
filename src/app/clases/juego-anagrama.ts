
import { Paises } from "./interfaces/paises";
import { Juego } from "./juego";

export class JuegoAnagrama extends Juego{
  listaPalabras:Array<Paises>;
  palabra:Paises;
  palabraAnagramizada:String;
  palabraIngresada:String;
  contador:number=0;
  constructor(nombre?: string, gano?: boolean, jugador?:string) {
    super("Anagrama",gano,jugador);
    this.listaPalabras=new Array<Paises>();



  }

  verificar(){
    if(this.palabraIngresada.toLowerCase()==this.palabra.name.toLowerCase()){
      this.contador++;

      return true;
    }else{
      this.contador++;

    return false;}
  }
  nuevoJuego() {
    console.log(this.listaPalabras.length);
    let numerodePais:number=Math.floor((Math.random() * this.listaPalabras.length-1) + 1)
    console.log(this.listaPalabras);
    console.log(numerodePais);
    let arrayPalabra=this.listaPalabras.splice(numerodePais,1);
    console.log(arrayPalabra);
    this.palabra=arrayPalabra.pop();
    this.palabraAnagramizada=this.shuffle(this.palabra.name);
    this.contador=0;
    this.palabraIngresada="";
  }

   shuffle(s) {
    let arr = s.split('');           // Convert String to array
    let n = arr.length;              // Length of the array

    for(let i=0 ; i<n-1 ; ++i) {
      let j =Math.floor(Math.random() * n);       // Get random of [0, n-1]

      let temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }

    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }
}
