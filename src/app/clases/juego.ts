export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;

  constructor(nombre?: string, gano?: boolean,jugador?:string) {
    if (nombre)
      this.nombre = nombre;


    if(jugador)
      this.jugador=jugador;
    else
      this.jugador= "natalia natalia";
  }




  public abstract verificar():boolean;


}
